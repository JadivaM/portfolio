import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import AllProjects from './Pages/AllProjects';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={AllProjects} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
