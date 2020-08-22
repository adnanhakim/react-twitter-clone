import React from 'react';
import './Widgets.css';
import {
   TwitterTimelineEmbed,
   TwitterShareButton,
   TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
   return (
      <div className="widgets">
         <div className="widgets-input">
            <SearchIcon className="widgets-search-icon" />
            <input type="text" placeholder="Search Twitter" />
         </div>

         <div className="widgets-widget-container">
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={'1273541605392363520'} />

            <TwitterTimelineEmbed
               sourceType="profile"
               screenName="CFCAdnan"
               options={{ height: 400 }}
            />

            <TwitterShareButton
               url={'https://adnanhakim.netlify.app'}
               options={{ text: '#reactjs is awesome', via: 'CFCAdnan' }}
            />
         </div>
      </div>
   );
}

export default Widgets;
