import React,{useState,useEffect} from 'react';
import "../index.css";
import axios from 'axios';


const PerformanceReport = () => {
    const [commentsCount, setCommentsCount] = useState(0);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
          setCommentsCount(response.data.length);
        })
        .catch(error => {
          console.error('Error fetching comments count:', error);
        });
    }, []);
  
    return (
      
        
         <div className='card'>
            <img src="./stats-icon.png" class="card-img-top" alt="..."/>
            <h6 class="card-title">Comments</h6>
            <p>{commentsCount}</p>
         </div>
        
        
      
    );
  }


export default PerformanceReport