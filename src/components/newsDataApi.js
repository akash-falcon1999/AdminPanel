import axios from 'axios';

function delay(ms) {
    console.log(`waiting ${ms} miliseconds`)
    return new Promise(resolve => setTimeout(resolve, ms));
}
const fetchUserActivity = async () => {
  try {
    // Simulating user activity data
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    await delay(1000);
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    await delay(1000);
    return {
      activeUsers: usersResponse.data.length,
      registeredUsers: usersResponse.data.length,
      totalPosts: postsResponse.data.length
    };
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw error;
  }
};

const fetchContentStatistics = async () => {
  try {
    // Simulating content statistics data
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    await delay(1000);

    return {
      newsCount: postsResponse.data.length,
      articlesCount: postsResponse.data.length
    };
  } catch (error) {
    console.error('Error fetching content statistics:', error);
    throw error;
  }
};

const fetchTopPerformedNews = async () => {
  try {
    // Simulating top performed news data
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    await delay(1000);

    // Assuming top performed news are the latest posts
    return postsResponse.data.slice(0, 5);
  } catch (error) {
    console.error('Error fetching top performed news:', error);
    throw error;
  }
};

const fetchTopSharedNews = async () => {
  try {
    // Simulating top shared news data
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
    await delay(1000);

    // Assuming top shared news are the most commented posts
    return postsResponse.data.sort((a, b) => b.comments.length - a.comments.length).slice(0, 5);
  } catch (error) {
    console.error('Error fetching top shared news:', error);
    throw error;
  }
};

const fetchTopCommentedNews = async () => {
  try {
    // Simulating top commented news data
    const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    await delay(1000);

    // Assuming top commented news are the most commented posts
    var max_comments=0;
    return postsResponse.forEach(id => {
        const comments=async()=>await axios.get('https://jsonplaceholder.typicode.com/posts/'+id+"comments");
        max_comments=comments.length>max_comments? comments.length : max_comments;
    });
  } catch (error) {
    console.error('Error fetching top commented news:', error);
    throw error;
  }
};

export {
  fetchUserActivity,
  fetchContentStatistics,
  fetchTopPerformedNews,
  fetchTopSharedNews,
  fetchTopCommentedNews,
};