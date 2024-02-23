const listHelper = require('../utility/list_helper');

console.log("Starting list_helper tests...");

test('dummy returns one', () => {
  console.log("Running test: dummy returns one");
  const blogs = [];
  const result = listHelper.dummy(blogs);
  console.log("Result:", result);
  expect(result).toBe(1);
});

describe('total likes', () => {
  console.log(" tests for total likes.");
  const listWithOneBlog = [
    {
      _id: 'ig #',
      title: 'title of book goes here',
      author: 'name of author',
      url: 'url to pdf',
      likes: 5,
      __v: 0
    }
  ];

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    console.log("Result:", result);
    expect(result).toBe(5);
  });
});

console.log("All tests have been executed.");
