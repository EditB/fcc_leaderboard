import React from 'react';
import 'whatwg-fetch';

export const LeaderItem = (props) => {
  var rowName = "row ";
  if (props.index % 2 == 0){
    rowName += "even";
  }
  else{
    rowName += "odd";
  }

  return(
    <div className={rowName}>
      <div className="col">
        {props.index + 1}
      </div>
      <div className="col camperName">
        <img src={props.img} height="10%"  width="10%" alt={props.username} /> {props.username}
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
