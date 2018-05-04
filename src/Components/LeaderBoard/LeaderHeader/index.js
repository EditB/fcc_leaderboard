import React from 'react';
import 'whatwg-fetch';

export class LeaderHeader extends React.Component {
  sort(field){
    this.props.sortBy(field);
  }
  render() {
    return(
      <div className="row headerRow">
        <div className="col">#</div>
        <div className="col camperName">Camper Name</div>
        <div onClick={this.sort.bind(this, 'recent')} id="recent" className="col">Points in Past 30 Days</div>
        <div id="alltime" onClick={this.sort.bind(this, 'alltime')} className="col">All time points</div>
      </div>
    );
 }
};


export default LeaderHeader;
