let rerenderEntireTree = () => {
  console.log("State changed");
};
let state = {
  profilepage: {
    username: "Egor Kirdyapin",

    profileAvatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",

    infoabout: [
      { title: "Date of Birth:", value: "17.04.2001" },
      { title: "City:", value: "Fergana" },
      { title: "Education:", value: "Vocational secondary" },
      { title: "Website:", value: "http://github.com/loqumi" },
    ],
    post: [
      {
        username: "User 2",
        avatar: "https://vraki.net/sites/default/files/inline/images/2_3.png",
        message: "Hi, how are you?",
        likesCount: 15,
      },
      {
        username: "User 2",
        avatar: "https://vraki.net/sites/default/files/inline/images/2_3.png",
        message: "It`s my first post!",
        likesCount: 31,
      },
    ],
    newPostText: "",
  },
  messagespage: {
    chats: [{ link: "/messages/1", name: "Vasiliy Piraniev" }],
    messages: [{ time: "30.10.2022", message: "Hi, what`s up?" }],
  },
  sidebar: {
    friends: [
      {
        id: 1,
        name: "Vasya",
        avatar:
          "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
      },
      {
        id: 2,
        name: "Semen",
        avatar:
          "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
      },
      {
        id: 3,
        name: "Kolya",
        avatar:
          "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
      },
    ],
    sidebarnav: [
      { href: "profile", title: "Profile" },
      { href: "messages", title: "Messages" },
      { href: "news", title: "News" },
      { href: "music", title: "Music" },
      { href: "settings", title: "Settings" },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    username: state.profilepage.username,
    avatar: state.profilepage.profileAvatar,
    message: state.profilepage.newPostText,
    likesCount: 0,
  };
  state.profilepage.post.unshift(newPost);
  state.profilepage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (NewText) => {
  state.profilepage.newPostText = NewText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default state;
