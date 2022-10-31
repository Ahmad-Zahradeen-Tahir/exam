import { Route, Switch, Redirect } from 'react-router-dom'
import { useState } from 'react'
import Layout from './layout/Layout'
import Home from './Pages/Home';
import './App.css'
import NotFound from './Pages/NotFound';
import Repos from './Pages/Repos';
import RepoDetail from './Components/RepoDetail';

const App = () => {
  const [repos, setRepos] = useState([])

  const getRepos = (repos) => {
    setRepos(repos)
  }

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
          <Repos getData={getRepos}/>
        </Route>
        <Route path='/Repos/:key'>
          <RepoDetail repos={repos}/>
      </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
