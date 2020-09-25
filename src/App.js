
import React from 'react';
import './App.css';
import './index.css';
import Axios from 'axios';
/* 
const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
 */
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
)

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        
        <img src={profile.avatar_url} alt="img" />
        <div className="info">
        <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = {useName: ''};
  handleSubmit = async (event) => {
    event.preventDefault();
    //const resp = await Axios.get(`http://dummy.restapiexample.com/api/v1/employees/data?employee_name=${this.state.userName}`); 
    const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`); 
    console.log(resp);
    this.props.onSubmit(resp.data);
    this.setState({userName: ''});
    //console.log(this.state.userName);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.userName}
          onChange={event =>
          this.setState({userName: event.target.value})}
          placeholder="Github usernmae" 
          required
        />
        <button >Add Card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles,profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;

