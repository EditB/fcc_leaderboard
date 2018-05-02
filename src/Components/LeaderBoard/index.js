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

    console.log("in fectchResults")

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')

      .then(resp => resp.json())
      .then(resp => {
        console.log("raw response: ")
        console.log(JSON.stringify(resp));
        this.setState({leaders: resp.data});
      //  console.log({this.state.leaders});
      })



      /*
        function(response){
          return response.json();
        }
        ).then(function(jsonData){
          //handle json data processing here
          //this.setState({leaders:leaders});
        }

      );   */


  }

  componentDidMount() {
    console.log("in didmount")
    this.fetchResults();

  }

  render() {

    //const {leaders:leaders}=this.state;
    //const {leaders} = this.state;
    const leaders = [{"username":"Smootimus","img":"https://avatars3.githubusercontent.com/u/6472304?v=4","alltime":95,"recent":81,"lastUpdate":"2018-03-19T19:24:02.627Z"},{"username":"sjames1958gm","img":"https://avatars1.githubusercontent.com/u/4639625?v=4","alltime":8892,"recent":75,"lastUpdate":"2018-05-01T23:55:49.944Z"},{"username":"khaduch","img":"https://avatars2.githubusercontent.com/u/1930584?v=4","alltime":3589,"recent":59,"lastUpdate":"2018-05-01T23:56:03.667Z"}];

    console.log("leaders" + leaders);
    return (
    <div className="container">
      <LeaderHeader />
      {leaders.map((leader, index) => (
         <LeaderItem username={leader.username} recent={leader.recent} alltime={leader.alltime} index={index} imgScr={leader.img} />
      ))}
    </div>
    )

  }



}




export default Leaderboard;
