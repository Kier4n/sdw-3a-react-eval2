import React, { Component } from 'react';

 class Users extends Component {

   constructor(props) {
     super(props);
   }

   render() {
     const users = this.props.users.map((item, i) => {
       return (
       <div>
         <input defaultValue={item.name} id={item._id + "name"}/>
         <input defaultValue={item.age} id={item._id + "age"}/>
       </div>)
     });

     return (
       <div className="Users">
           <br />
           <h3>Users</h3>
           <br />
           {users}
          <br />
           <form id="userForm">
            <input type="text" name="name" placeholder="Name" id="name"/>
             <input type="number" name="age" placeholder="Age" id="age"/>
             <input type="text" name="type" placeholder="Type" id="type"/>
            <a onClick={() => this.props.addUser()}>Ajouter</a>
          </form>
      </div>
     );
   }
 }

export default Users;
