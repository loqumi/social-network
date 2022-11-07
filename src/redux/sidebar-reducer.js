let initialState = {
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
}

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
