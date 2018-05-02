import React from 'react';
import 'whatwg-fetch';

export const LeaderHeader = () => {
  return(
    <div className="row headerRow">
      <div className="col">#</div>
      <div className="col camperName">Camper Name</div>
      <div className="col">Points in Past 30 Days</div>
      <div className="col">All time points</div>
    </div>
  );
};


export default LeaderHeader;
