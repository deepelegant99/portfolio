import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import PageNotFound from "./pages/PageNotFound";
import LuckyNumber from "./pages/LuckyNumber";
import { useState } from "react";
import Projects from "./pages/Projects";
function App() {

  useEffect(() => {
    window.scroll(0,0)
  }, [])

  const [login, setLogin] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Header login={login} setLogin={setLogin} />
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/profile">
          <Profile login={login} />
        </Route>
        <Route path='/LuckyNumber/:num'>
          <LuckyNumber />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
