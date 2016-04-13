import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import UserProfile from './components/users/UserProfile.js';
import EventPage from './components/events/EventPage.js';
import AddEventForm from './components/users/addEventForm.js';
import $ from 'jquery';

require('./styles/styles.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Megan',
      events: [this.state.event],
      event: {
        url: '/api/events/abc',
        name: 'PARTY',
        itinerary: [
          {
            time: '1:45 pm',
            location: 'here'
          },
          {
            time: '2:00 pm',
            location: 'a little bit away from here'
          },
          {
            time: '3:00 pm',
            location: 'super far away'
          }
        ],
        location: {lat: -34.397, lng: 150.644},
        chats: []
      }
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/api/events',
      dataType: 'json',
      success: function(data) {
        console.log('HI');
        this.setState({
          username: data.local.username
        });
      }.bind(this)
    });
  }

  render() {
    const {
      events,
      event,
      username
    } = this.state;
    return (
      <div className="container">
        <div id="sidebar">
          <UserProfile username={username} events={events} />
        </div>
        <div id="header">
          <h1>Evently.io</h1>
        </div>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AddEventForm} />
      <Route path='events/:eventname' component={EventPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);


/*

    // <Route path='/' component={App}>
*/

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       events: [
//         {
//           title: 'Bonfire Partys',
//           date: new Date(),
//           time: '1:00pm',
//           Coordinator: 'Megan'
//         },
//         {
//           title: 'Christmas Party',
//           date: new Date(),
//           time: '1:00pm',
//           Coordinator: 'Allison'
//         }
//       ],
//       event: {
//         url: '/api/events/abc',
//         itinerary: [
//           {
//             time: '1:45 pm',
//             location: 'here'
//           },
//           {
//             time: '2:00 pm',
//             location: 'a little bit away from here'
//           },
//           {
//             time: '3:00 pm',
//             location: 'super far away'
//           }
//         ],
//         location: {lat: -34.397, lng: 150.644},
//         chats: []
//       }
//     };
//   }


