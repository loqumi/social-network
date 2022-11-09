import React from "react";

let Users = (props) => {
     if (props.users.length === 0){
          props.setusers([
               {
                 id: 1,
                 followed: false,
                 avatar: "http://avotarov.ru/picture/avatar-64/kartinki/885.jpg",
                 username: "Egor K",
                 status: "codinggg",
                 location: { city: "Fergana", country: "Uzbekistan" },
               },
               {
                 id: 2,
                 followed: true,
                 avatar: "http://avotarov.ru/picture/avatar-64/kartinki/885.jpg",
                 username: "Matvey",
                 status: "chiling",
                 location: { city: "New York", country: "United States" },
               },
               {
                 id: 3,
                 followed: false,
                 avatar: "http://avotarov.ru/picture/avatar-64/kartinki/885.jpg",
                 username: "Kirill",
                 status: "working :(",
                 location: { city: "Fergana", country: "Uzbekistan" },
               },
           ],)
     }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <img src={u.avatar} alt="avatar" />
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.username}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
