import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";
const Profile = ({ login }) => {
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);
  
const {path, url}=useRouteMatch()
return (
  <div className="Profile">
    <h1>Profile page</h1>
    <ul className="Profile">
      <li>
        <Link to={`${url}/viewprofile`}>View Profile</Link>
      </li>
      <li>
        <Link to={`${url}/editprofile`}>Edit Profile </Link>
      </li>
    </ul>
    <Switch>
      <Route path={`${path}/viewprofile`}>
        <ViewProfile />
      </Route>
      <Route path={`${path}/editprofile`}>
        <EditProfile />
      </Route>
    </Switch>
  </div>
);
};

export default Profile;
