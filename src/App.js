// import React from "react";
import './style.css';
import UserProfile from './pages/profile.js';
function FirstHeading(){
  return (
    <h1 className='heading-one'>Hello React !</h1>
  )
}
function SmallFooter(){
  return (
    <p> This is sub footer of the table component ! </p>
  )
}
function UsersTable(){
  return(
    <>
        <table>
      <thead>
        <th>#</th> <th>Fname</th> <th>LName</th> <th>Role</th> <th>Phone</th> <th>Email</th>
      </thead>
      <tbody>
        <tr> <td>1</td> <td>IGIHOZO</td> <td>Didier</td> <td>SysAdmin</td> <td>0788940718</td> <td>ddrigihozo@gmail.com</td> </tr>
        <tr> <td>2</td> <td>MUHORE</td> <td>Innocent</td> <td>IT Manager</td> <td>0788958865</td> <td>manager@gmail.com</td> </tr>
        <tr> <td>3</td> <td>MBANZA</td> <td>Aime</td> <td>Developer</td> <td>0784256322</td> <td>dev@gmail.com</td> </tr>
        <tr> <td>4</td> <td>NSHUTI</td> <td>Piere</td> <td>NetAdmin</td> <td>078502147</td> <td>net@gmail.com</td> </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6}>
            <center>
            <SmallFooter />
            </center>
          </td>
        </tr>
      </tfoot>
    </table>
    <small>New under component </small>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <FirstHeading />
      <UsersTable />
    </div>
  );
}

export default UserProfile;
