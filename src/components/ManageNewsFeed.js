import React,{useState,useEffect} from 'react';
import "../index.css";
import axios from 'axios';

const ManageNewsFeed = () => {
    const [newsFeeds, setNewsFeeds] = useState([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setNewsFeeds(response.data);
        })
        .catch(error => {
          console.error('Error fetching news feeds:', error);
        });
    }, []);
  
    const handleDelete = (id) => {
      // Logic to delete news feed by id
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          console.log('News feed deleted:', id);
          // Remove the deleted news feed from state
          setNewsFeeds(newsFeeds.filter(feed => feed.id !== id));
        })
        .catch(error => {
          console.error('Error deleting news feed:', error);
          // Handle error
        });
    };
  
    return (
      <div>
        <h1>Manage News Feeds</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsFeeds.map(feed => (
              <tr key={feed.id}>
                <td>{feed.title}</td>
                <td>{feed.body}</td>
                <td>{feed.category}</td>
                <td>
                  <button class="btn btn-secondary" onClick={() => handleDelete(feed.id)}>Delete</button>
                  <button class="btn btn-secondary" >Edit</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ManageNewsFeed