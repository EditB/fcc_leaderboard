import React, { Component } from 'react';
import 'whatwg-fetch';
import LeaderItem from './LeaderItem';
import LeaderHeader from './LeaderHeader';

export class Leaderboard extends Component {

  constructor(props) {
    super(props);

    this.fetchResults = this.fetchResults.bind(this);
    this.sortBy = this.sortBy.bind(this);

    this.state={
        leaders: [],
        sortByField: "recent"
    }
  }

  sortBy(field){
    this.setState({
      sortByField: field
    });
  }

  fetchResults(){

    //Note: need to implement a case when there's no response and give a msg to the users
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(resp => resp.json())
      .then(resp => {
        this.setState({leaders: resp});
      })
  }

  componentDidMount() {
    this.fetchResults();
  }

  render() {
    const {leaders} = this.state;

    //Need to figure out how to sort!!
    //const alltime = _.sortBy({leaders}, "alltime"})
    return (
    <div className="container">
      <LeaderHeader sortBy={this.sortBy}/>
      {leaders.sort((a, b) => b[this.state.sortByField] - a[this.state.sortByField]).map((leader, index) => (
         <LeaderItem
            username={leader.username}
            recent={leader.recent}
            alltime={leader.alltime}
            index={index}
            img={leader.img}
          />
      ))}
    </div>
    )
  }
}

export default Leaderboard;
