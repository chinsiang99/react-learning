const UserStatus = ({loggedIn, isAdmin}) => {
  return (
    <h1>Welcome {loggedIn && isAdmin ? "Admin" : loggedIn ? "User" : "Guest"}</h1>
  )
}

export default UserStatus