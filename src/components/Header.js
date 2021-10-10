import { Link } from "react-router-dom";

const Header = ({login, setLogin}) => {
  

  return (
    <>
      <h1> My Portfolio Site </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
      </ul>
      <button onClick={()=>{setLogin(!login)}}>{login? "Log Out": "Login"}</button>
    </>
  );
};

export default Header;
