class ListOfEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  goToEvent() {
    console.log(axios)
  }

  // set events = this.props.events
  render() {
    const {
      events,
    } = this.props;
    return (
      <div>
        <ul>
          { events.map(event => <Event onCLick={this.goToEvent.bind(this)} event={event} />) }
        </ul>
      </div>
    )
  }
};

window.ListOfEvents = ListOfEvents;