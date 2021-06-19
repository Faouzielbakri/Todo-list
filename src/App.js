import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Container, makeStyles, Grid, Typography } from "@material-ui/core";
import store from "./store";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   }
// }));

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Grid container justify="center">
              <Grid item>
                <Typography variant="h3">To do list</Typography>
              </Grid>
            </Grid>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
