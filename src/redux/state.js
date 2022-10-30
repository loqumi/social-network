let state = {
  profilepage : {
    infoabout: [
      { title: "Date of Birth:", value: "17.04.2001" },
      { title: "City:", value: "Fergana" },
      { title: "Education:", value: "Vocational secondary" },
      { title: "Website:", value: "http://github.com/loqumi" },
    ],
    post: [
      {
        username: "Vasiliy Piraniev",
        avatar: "https://vraki.net/sites/default/files/inline/images/2_3.png",
        message: "Hi, how are you?",
        likesCount: "15",
      },
      {
        username: "Lorem, ipsum.",
        avatar: "https://vraki.net/sites/default/files/inline/images/2_3.png",
        message: "It`s my first post!",
        likesCount: "31",
      },
    ],
  },
  messagespage: {
    chats: [
      { link: "/messages/1", name: "Vasiliy Piraniev" },
      { link: "/messages/2", name: "My self" },
      { link: "/messages/3", name: "kto to eshe" },
      { link: "/messages/4", name: "Lorem, ipsum." },
      { link: "/messages/5", name: "Lorem kto to tam" },
      { link: "/messages/6", name: "Kto takoy lorem" },
      { link: "/messages/7", name: "Ne ya a kto to eshe" },
    ],
    messages: [
      { time: "12.12.2001", message: "ПРиВЕТ МЕДВЕД))" },
      { time: "12.1.2001", message: "ПРиВЕТ МЕДВЕД))" },
      { time: "12.4.2001", message: "ПРиВЕТ МЕДВЕД))" },
      { time: "12.2.2001", message: "ПРиВЕТ МЕДВЕД))" },
      { time: "12.6.2001", message: "ПРиВЕТ МЕДВЕД))" },
      { time: "12.5.2001", message: "ПРиВЕТ МЕДВЕД))" },
    ],
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

export default state;
