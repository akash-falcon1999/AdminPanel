import React from 'react';
import ReactDOM  from 'react-dom/client';
import Dashboard from './components/Dashboard';
import CreateNewsFeed from './components/CreateNewsFeed';
import ManageNewsFeed from './components/ManageNewsFeed';
import PerformanceReport from './components/PerformanceReport';
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';

const App=()=> {
  return (
    <div className='container'>
      <Dashboard/>
      <Outlet/>
    </div>
  );
}

const AppRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/create-news-feed',
        element:<CreateNewsFeed/>
      },
      {
        path:'/manage-news-feed',
        element:<ManageNewsFeed/>
      },
      {
        path:'/performance-report',
        element:<PerformanceReport/>
      },
    ],
  },
]
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/> )


