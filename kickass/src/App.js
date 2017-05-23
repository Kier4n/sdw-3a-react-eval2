import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Users from './Users';
import Projects from './Projects';
class App extends Component {

   constructor(props) {
     super(props);

     this.state = {
       users: [],
       projects: [],
       currentUser: null
     };
   }

   componentDidMount() {
     this.UserList();
     this.ProjectList();
   }


   UserList(){
     return $.getJSON('/api/users')
     .then((data) => {
       let state = this.state;
       state.users = data
       this.setState(state)
     });
   }


   ProjectList(){
     if (this.state.currentUser){
       return $.getJSON('/api/user/'+this.state.currentUser._id+'/projects')
       .then((data) => {
         let state = this.state;
         state.projects = data
         this.setState(state)
       });
     } else {
       return $.getJSON('/api/projects')
       .then((data) => {
         let state = this.state;
         state.projects = data
         this.setState(state)
       });
     }
   }


   addUser(fd){
     let formData = {
         name: $('#name').val(),
         age: $('#age').val(),
         type: $('type').val()
       }

     fetch('/api/user', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData)
     }).then(() => {
       this.UserList()
     })
   }


   deleteUser(id){
     fetch('/api/user/' + id, {
       method: 'DELETE'
     }).then(() => {
       this.UserList()
     })
   }


   editUser(id){
     let formData = {
         _id: id,
         name: $('#'+id+'name').val(),
         age: $('#'+id+'age').val(),
         type: $('#'+id+'type').val()
       }

     fetch('/api/user/' + id, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData)
     }).then(() => {
       this.UserList()
    })
   }


   editProject(id){
     let formData = {
         title: $('#'+id+'title').val(),
         description: $('#'+id+'description').val()
       }

     fetch('/api/project/' + id, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
      },
       body: JSON.stringify(formData)
     }).then(() => {
       this.ProjectList()
     })
   }


  deleteProject(id){
    fetch('/api/project/' + id, {
       method: 'DELETE'
     }).then(() => {
       this.ProjectList()
     })
   }

   addProject(){
       let formData = {
         creator: this.state.currentUser,
         title: $('#title').val(),
         description: $('#description').val()
       }

       fetch('/api/project', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData)
     }).then(() => {
       this.ProjectList()
     })
   }

   render() {
     return (
       <div className="App">
           <Users users={this.state.users} editUser={this.editUser.bind(this)} deleteUser={this.deleteUser.bind(this)}  addUser={this.addUser.bind(this)}/>

           <Projects currentUser={this.state.currentUser} projects={this.state.projects} addProject={this.addProject.bind(this)}  editProject={this.editProject.bind(this)} deleteProject={this.deleteProject.bind(this)}/>
       </div>
     );
   }
 }

 export default App;
