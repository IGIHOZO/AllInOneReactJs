import '../style.css';

const user = {
    userName : 'Mr. IGIHOZO Didier',
    profileUrl : 'https://pbs.twimg.com/profile_images/1379416168788860933/8vhcDhrD_400x400.jpg',
    userPosition : 'System Administrator',
    userEmail : 'ddrigihozo@gmail.com',
}
function UserProfile(){
    return(
        <>
        <h3>{user.userName}</h3><br />
        <img className='profile-photo' src={user.profileUrl} />&nbsp;&nbsp;&nbsp;
        <img style={{ 
            width: 200,
            height:200
         }} src={user.profileUrl} /><br />

        <p className='small-text'>{user.userPosition}  -  {user.userEmail}</p>
        </>
    )
}
export default UserProfile;
