
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './container/Layout';
import Contact from './pages/Contact';
import Press from './pages/Press';
import Blog from './pages/Blog';
import ScrollRestore from './components/ScrollRestore'

function App() {
  return (
    <>
<Router>
<Layout>
<ScrollRestore/>
  <Switch>

    <Route exact={true} path='/' component={Home}/>
    <Route exact={true} path='/contact' component={Contact}/>
    <Route exact={true} path='/press' component={Press}/>
    <Route exact={true} path='/blog' component={Blog}/>
  </Switch>
  </Layout>
</Router>

    </>
  );
}

export default App;
