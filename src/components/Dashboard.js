
import React, {useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import { fetchUserActivity, fetchContentStatistics, fetchTopPerformedNews, fetchTopCommentedNews, fetchTopSharedNews } from './newsDataApi';


const Dashboard=()=> {
    const [userActivity, setUserActivity] = useState(null);
    const [contentStatistics, setContentStatistics] = useState(null);
    const [top_news,settop_news] = useState(null);
    const [top_comments,settop_comments]=useState(null);
    const [top_shared,settop_shared]=useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const activityData = await fetchUserActivity();
          const statsData = await fetchContentStatistics();
          const top_performed_news= await fetchTopPerformedNews();
          const top_comments_news=await fetchTopCommentedNews();
          const top_shared_news=await fetchTopSharedNews();

          setUserActivity(activityData);
          setContentStatistics(statsData);
          settop_news(top_performed_news);
          settop_comments(top_comments_news);
          settop_shared(top_shared_news);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Dashboard</a>
        <Link to="/create-news-feed" class="nav-link" >Create</Link>
        <Link to="/manage-news-feed" class="nav-link" >Manage</Link>       
        <Link to="/performance-report" class="nav-link">Report</Link>
      </div>
    </div>
  </div>
</nav>
 <div class="d-flex flex-row mb-3">
 <div class="p-2">
    <div className='card'>
        <h5>User Activity</h5>
        {
        userActivity && (
          <ul>
            <li>Active Users: {userActivity.activeUsers}</li>
            <li>Registered Users: {userActivity.registeredUsers}</li>
            
          </ul>
        )}
        </div>
    </div>
 <div class="p-2">     
        <div className='card'>
        <h5>Content Statistics</h5>
        {
        contentStatistics && (
          <ul>
            <li>News Count: {contentStatistics.newsCount}</li>
            <li>Articles Count: {contentStatistics.articlesCount}</li>
           
          </ul>
        )}
      </div>
 </div>
 <div class="p-2">
      <div className='card'>
        <h5>Trending</h5>
        {
        top_news && (
             
            {top_news}
          
        )}
      </div>
 </div>
 <div class="p-2">
      <div className='card'>
        <h5>Most Comments</h5>
        {
        top_comments && (
          
            {top_comments}
          
        )}
        </div>
 </div>
 <div class="p-2">
        <div className='card'>
        <h5>Most Shared</h5>
        {
        top_shared && (
          
            {top_shared}
          
        )}

        </div>
</div>
 </div>
      

 </div>
);
}
  
  export default Dashboard;