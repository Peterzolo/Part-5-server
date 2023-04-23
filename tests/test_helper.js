const Blog = require("../models/Blog");
const User = require("../models/User");

const initialBlogposts = [
  {
    author: "Malisa",
    title: "Social Media Empowerment 3",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 20,
    id: "64379e2370d5dcf06ae0546d",
  },
  {
    author: "Malisa",
    title: "Social Media Empowerment 2",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 20,
    id: "64379e4870d5dcf06ae0546f",
  },
  {
    author: "Malisa",
    title: "Social Media Empowerment 1",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 50,
    id: "64379e5570d5dcf06ae05471",
  },
  {
    author: "Malisa",
    title: "Social Media Empowerment 4",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 50,
    id: "64379e6070d5dcf06ae05473",
  },
  {
    author: "Malisa",
    title: "Social Media Empowerment 5",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 50,
    id: "64379e6770d5dcf06ae05475",
  },
  {
    author: "Malisa",
    title: "Social Media Empowerment 6",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 200,
    id: "64379e7470d5dcf06ae05477",
  },
  {
    author: "Nancy",
    title: "Political motivation 1",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 200,
    id: "64379e9a70d5dcf06ae05479",
  },
  {
    author: "Nancy",
    title: "Political motivation 2",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 200,
    id: "64379ea070d5dcf06ae0547b",
  },
  {
    author: "Nancy",
    title: "Political motivation 3",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 200,
    id: "64379ea570d5dcf06ae0547d",
  },
  {
    author: "Nancy",
    title: "Political motivation 4",
    url: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: 300,
    id: "64379eb670d5dcf06ae0547f",
  },
];

// const nonExistingId = async () => {
//   const note = new Note({ content: "willremovethissoon" });
//   await note.save();
//   await note.remove();

//   return note._id.toString();
// };

const blogsInDb = async () => {
  const notes = await Blog.find({});
  return notes.map((note) => note.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

module.exports = {
  initialBlogposts,
  // nonExistingId,
  blogsInDb,
  usersInDb,
};

module.exports = {
  initialBlogposts,
};
