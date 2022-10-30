import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './Pages/Home';
import './App.css'
import NotFound from './Pages/NotFound';
import Repos from './Pages/Repos';
import RepoDetail from './Components/RepoDetail';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/Home'/>
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/Repos' exact>
          <Repos />
        </Route>
        <Route path='/Repos/:key'>
          <RepoDetail/>
      </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
