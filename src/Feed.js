import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {

 
  
  return (
  <div className='feed'>
      {/* MessageSender */}
      <MessageSender />
      
      {/* Post */}
      <div className='posts'>
        <Post 
        profilePic={'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}
        username={'User Name'}
        timestamp={'Monday, 10:21 Am'}
        />
      </div>

  </div>
  )}

export default Feed;