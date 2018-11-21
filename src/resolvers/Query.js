const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }

    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  post() {
    return {
      id: '123',
      title: 'Title',
      body: 'lasdasd'
    };
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }

    return db.posts.filter(post => {
      const title = post.title.toLowerCase().includes(args.query.toLowerCase());
      const body = post.title.toLowerCase().includes(args.query.toLowerCase());
      return title || body;
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  }
};

export { Query as default };
