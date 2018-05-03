import React, { Component } from 'react';
import 'whatwg-fetch';
import LeaderItem from './LeaderItem';
import LeaderHeader from './LeaderHeader';

export class Leaderboard extends Component {

  constructor(props) {
    super(props);

    this.fetchResults = this.fetchResults.bind(this);

    this.state={
        leaders: []
    }
  }

  fetchResults(){

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

    return (
    <div className="container">
      <LeaderHeader />
      {leaders.map((leader, index) => (
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
