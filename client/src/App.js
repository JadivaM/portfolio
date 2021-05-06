import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import ProjectPage from './Pages/ProjectPage';
import AllProjects from './Pages/AllProjects';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project/:id" component={ProjectPage} />
      <Route exact path="/projects" component={AllProjects} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
