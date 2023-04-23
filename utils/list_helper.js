const dummy = (blogs) => {
  return blogs;
};

const totalPostLikes = (posts) => {
  const total = posts.reduce((total, post) => total + post.likes, 0);
  return total;
};

const favoriteBlog = (posts) => {
  return posts.reduce(
    (acc, post) => {
      if (post.likes > acc.likes) {
        return post;
      } else {
        return acc;
      }
    },
    { likes: 0 }
  );
};

module.exports = {
  dummy,
  totalPostLikes,
  favoriteBlog,
};
