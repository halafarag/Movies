import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import Movies from "./component/Movies";
import Details from "./component/Details";
import Pagination from "./component/Pagination";
import Favouraties from "./component/Favouraties";
import { useSelector } from "react-redux";
import ThunkMovies from "./component/ThunkMovies";

//
function App() {
  // const color = useSelector((state) => state.color.color);
  return (
    <>
      <Router>
        <Header />

        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Movies">
          <Movies />
        </Route>
        {/* <Route exact path="/Movies">
          <ThunkMovies />
        </Route> */}
        <Route exact path="/Details/:id">
          <Details />
        </Route>
        <Route exact path="/Pagination">
          <Pagination />
        </Route>
        <Route exact path="/Favouraties">
          <Favouraties />
        </Route>
      </Router>
    </>
  );
}

export default App;
