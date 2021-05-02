import React from 'react';
import  {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About'
import Header from './components/Header'
import News from './components/News'
function App() {
    return (<>
        <BrowserRouter>
        <Header/>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About} exact/>
          <Route path='/contact' component={Form} exact/>
          <Route path='/news' component={News} exact/>
        </BrowserRouter>
        </>
    )
}
export default App;
