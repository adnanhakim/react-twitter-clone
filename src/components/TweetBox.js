import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
   return (
      <div className="tweetbox">
         <form>
            <div className="tweetbox-input">
               <Avatar src="https://avatars1.githubusercontent.com/u/46572622?s=460&u=b7bd8dd34eabcf10a7d9f10ed10e3786467d7db4&v=4" />
               <input type="text" placeholder="What's happening?" />
            </div>
            <input
               className="tweetbox-image-input"
               type="text"
               placeholder="Optional: Enter image URL"
            />
            <Button className="tweetbox-tweet-button">Tweet</Button>
         </form>
      </div>
   );
}

export default TweetBox;
