import React from 'react';
import CreateEventButton from './createEventButton.js';
import AddEventForm from './addEventForm.js';
import ListOfEvents from './listOfEvents.js';
import EventPage from './../events/EventPage.js';
import { Link } from 'react-router';


export default class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return (
      <div>
        <div>
          UserProfile
          <h3>{this.props.username}</h3>
          <a href='/logout'>logout</a>
        </div>
        <div>
          <ul>
          </ul>

        </div>
      </div>
    )
  }

  /*render() {
            <li showForm={this.showForm.bind(this)}>
              <Link to="/eventform">Create An Event</Link>
              {this.state.showForm ? <AddEventForm showForm={this.showForm.bind(this)}/> : null}
            </li>
    return (
      <div>
      HWLLO
        <CreateEventButton showForm={this.showForm.bind(this)}/>
        {this.state.showForm ? <AddEventForm showForm={this.showForm.bind(this)}/> : null}
        <ListOfEvents events={this.props.events} />
      </div>

      <Links />

      
    )
  }
  */



};