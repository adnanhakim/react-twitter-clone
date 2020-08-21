import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ avatar, displayName, username, verified, text, image }) {
   return (
      <div className="post">
         <div className="post-avatar">
            <Avatar src="https://avatars1.githubusercontent.com/u/46572622?s=460&u=b7bd8dd34eabcf10a7d9f10ed10e3786467d7db4&v=4" />
         </div>
         <div className="post-body">
            <div className="post-header">
               <div className="post-header-text">
                  <div className="post-header-name">Adnan Hakim</div>
                  <VerifiedUserIcon className="post-badge" />
                  <div className="post-header-username">@adnanhakim</div>
               </div>
               <div className="post-header-description">
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Repellat, fugiat.
                  </p>
               </div>
            </div>
            <img
               src="https://pbs.twimg.com/media/Ef4_V5hX0AE6_5K?format=jpg&name=medium"
               alt=""
            />
            <div className="post-footer">
               <ChatBubbleOutlineIcon fontSize="small" />
               <RepeatIcon fontSize="small" />
               <FavoriteBorderIcon fontSize="small" />
               <PublishIcon fontSize="small" />
            </div>
         </div>
      </div>
   );
}

export default Post;
