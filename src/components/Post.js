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
            <Avatar src={avatar} />
         </div>
         <div className="post-body">
            <div className="post-header">
               <div className="post-header-text">
                  <div className="post-header-name">{displayName}</div>
                  {verified && <VerifiedUserIcon className="post-badge" />}
                  <div className="post-header-username">@{username}</div>
               </div>
               <div className="post-header-description">
                  <p>{text}</p>
               </div>
            </div>
            <img src={image} alt="" />
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
