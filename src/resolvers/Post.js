const Post = {
  author(parent, args, { db }, info) {
    return db.users.find(user => {
      return user.id === parent.author;
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments.filter(comment => comment.id === parent.id);
  }
};

export { Post as default };
