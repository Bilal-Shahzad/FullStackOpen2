const dummy = (blogs) => {
    console.log("Received blogs:", blogs);
    return 1; 
  }
  
  const totalLikes = (blogs) => {
    console.log("Received blogs:", blogs);
  
    const likesArray = blogs.map(blog => blog.likes);
    console.log("Likes array:", likesArray);
  
    const total = likesArray.reduce((sum, likes) => sum + likes, 0); 
    console.log("Total likes:", total);
  
    return total;
  }
  
  const favoriteBlog = (blogs) => {
    console.log("recieved blogs:", blogs);
  
    if (blogs.length === 0) return null; 
  
    const favorite = blogs.reduce((max, blog) => (max.likes > blog.likes) ? max : blog);
    console.log("fvorite blog:", favorite);
  
    return {
      title: favorite.title,
      author: favorite.author,
      likes: favorite.likes
    };
  }
  
  const mostBlogs = (blogs) => {
    console.log("received bogs:", blogs);
  
    if (blogs.length === 0) return null;
  
    const blogCounts = {};
    blogs.forEach(blog => {
      if (blog.author in blogCounts) {
        blogCounts[blog.author]++;
      } else {
        blogCounts[blog.author] = 1;
      }
    });
    console.log("Blog counts:", blogCounts);
  
    const authorWithMostBlogs = Object.keys(blogCounts).reduce((a, b) => blogCounts[a] > blogCounts[b] ? a : b);
    console.log("Author with most blogs:", authorWithMostBlogs);
  
    return {
      author: authorWithMostBlogs,
      blogs: blogCounts[authorWithMostBlogs]
    };
  }
  
  const mostLikes = (blogs) => {
    console.log("gt blogs:", blogs);
  
    if (blogs.length === 0) return null; 
  
    const likesByAuthor = {};
    blogs.forEach(blog => {
      if (blog.author in likesByAuthor) {
        likesByAuthor[blog.author] += blog.likes;
      } else {
        likesByAuthor[blog.author] = blog.likes;
      }
    });
    console.log("likes by author:", likesByAuthor);
  
    const authorWithMostLikes = Object.keys(likesByAuthor).reduce((a, b) => likesByAuthor[a] > likesByAuthor[b] ? a : b);
    console.log("author with most likes:", authorWithMostLikes);
  
    return {
      author: authorWithMostLikes,
      likes: likesByAuthor[authorWithMostLikes]
    };
  }
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }
  