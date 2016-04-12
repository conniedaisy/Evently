class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      events: []
    }
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  // componentDidMount() {
  //   axios.get('/users', {
  //     params: this.state.username
  //   })                                                                                                                                              })
  //   .then(function(response) {
  //     console.log(response);
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  // }

  render() {
    return (
      <div>
        <CreateEventButton showForm={this.showForm.bind(this)} />
        {this.state.showForm ? <AddEventForm showForm={this.showForm.bind(this)} /> : null}
        <ListOfEvents events={this.state.events} />
      </div>
    )
  }
};

window.UserProfile = UserProfile;