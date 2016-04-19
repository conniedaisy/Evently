import { Link } from 'react-router';
import React from 'react';

const Event = (props) => (
  <li>
    <div>
      <Link to={`/events/${props.event.url}`}
        onClick={() => {
          props.socket.emit('join room', props.event.url);
          $(".button-collapse").sideNav('hide')
        }}
        className="collection-item"
        activeClassName="active">
        {props.event.title}
      </Link>
    </div>
  </li>
);

export default Event;