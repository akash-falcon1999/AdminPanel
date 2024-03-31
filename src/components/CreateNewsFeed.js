import React,{useState} from 'react';
import axios from 'axios';
import "../index.css";



const CreateNewsFeed = () => {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [previewContent, setPreviewContent] = useState('');
  

  const handlePreview = () => {
    // Logic to generate preview content for mobile view
    setPreviewContent(`Title: ${title}\nCategory: ${category}\nContent: ${content}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to API for submission
    const formData = { title, content, category };
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then(response => {
        console.log('News feed created:', response.data);
        // Optionally, redirect or show success message
      })
      .catch(error => {
        console.error('Error creating news feed:', error);
        // Handle error
      });
  };

  return (
    <div>
      <h1>Create News Feed</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea placeholder="Content" class="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
         <div class="mb-3">
         <label for="category" class="form-label">Category</label>
        <input type="text"  class="form-control" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        
        <button type="button" class="btn btn-secondary" onClick={()=>{
            previewContent===''?handlePreview(): setPreviewContent('')
        }}>Preview</button>
        <div>
          <h5>Mobile Preview</h5>
          <pre>{previewContent}</pre>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Publish</button>
      </form>
    </div>
  );
  
}

export default CreateNewsFeed