const users = [
  {
    id: '1',
    name: 'Joe',
    email: 'joe@xx.com',
    age: 30
  },
  { id: '2', name: 'Jane', email: 'jane@xx.com', age: 40 }
];

const posts = [
  {
    id: '1',
    title: 'number 1',
    body: 'something',
    author: '1',
    published: false
  },
  {
    id: '2',
    title: 'number 2',
    body: 'something else',
    author: '2',
    published: true
  }
];

const comments = [
  { id: '1', text: 'comment1', author: '1', post: '1' },
  { id: '2', text: 'comment2', author: '1', post: '2' },
  { id: '3', text: 'comment3', author: '2', post: '2' },
  { id: '4', text: 'comment4', author: '2', post: '2' }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
