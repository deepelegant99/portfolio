import { Link } from "react-router-dom";

const Header = () => {
    return (
      <>
        <h1> My Portfolio Site </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <ul>
            <li>
              <Link to='profile'>Profile</Link>
            </li>
          </ul>
        </ul>
      </>
    );
}

export default Header
