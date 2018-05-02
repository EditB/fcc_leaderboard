import React from 'react';
import 'whatwg-fetch';

export const LeaderItem = (props) => {
  return(
    <div className="row">
      <div className="col">
        {props.index}
      </div>
      <div className="col camperName">
        <img src='https://avatars3.githubusercontent.com/u/6472304?v=4"' height="10%"  width="10%" alt={props.username} /> {props.username}
      </div>
      <div className="col">
        {props.recent}
      </div>
      <div className="col">
        {props.alltime}
      </div>

    </div>
  );
};


export default LeaderItem;
