import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home, List, ListItem} from './components';

class App extends Component {

  state = {
    persos: null
  }

  componentDidMount() {
    fetch('https://kickass-sdw-3a.herokuapp.com/api/users')
    .then((response) => response.json())
    .then( json => {
      this.setState({persos: json});
    });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <Link to='/'>Home</Link>
          <Link to="/list">List</Link>
          <Link to="/add">Add</Link>
          <Link to="/projets">Projects</Link>
          <Link to="/addProject">Add Project</Link>
        </div>
        <div className="App-content">
          {
            this.state.persos ?
            <Switch>
              <Route exact path="/" component={Home}/>

              <Route exact path="/list" render={() =>
                <List persos={this.state.persos} />
              }/>

              <Route path="/list/:index(\d+)" render={({match}) =>
                 (match.params.index < this.state.persos.length) ?
                 <ListItem perso={this.state.persos[match.params.index]} /> :
                 <h1>This character does not exists</h1>
              }/>

              <Route exact path="/add" render={() =>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <label>
                    Name:
                    <input type="text" value={this.state.persos.name} name="name" />
                    <br />
                    Age:
                    <input type="number" value={this.state.persos.age} name="age" />
                    <br />
                    Type:
                    <input type="text" value={this.state.persos.type} name="type" />
                  </label>
                    <br />

                  <input type="submit" value="Save" />
                </form>

              }/>

              <Route render={() => <h1>Page not found</h1>} />
              <Route exact path="/list" render={() =>
                <List projects={this.state.projets} />
              }/>
              <Route exact path="/addProject" render={() =>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <label>
                    Name:
                    <input type="text" value={this.state.persos.name} name="title" />
                    <br />
                    Age:
                    <input type="number" value={this.state.persos.age} name="description" />
                    <br />
                    Type:
                    <input type="text" value={this.state.persos.type} name="creator" />
                  </label>
                    <br />

                  <input type="submit" value="Save" />
                </form>

              }/>

              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
            : <h1>Loading...</h1>
          }
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
