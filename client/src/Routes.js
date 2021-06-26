import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import App from './pages/App'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  );
}

export default Routes