import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProjectsContainer from './containers/ProjectsContainer'
import TitlePage from './components/TitlePage'
import ForumContainer from './containers/ForumContainer'
import SchoolMapContainer from './containers/SchoolMapContainer'



const App = props => {
  return(
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={TitlePage}/>
      <Route exact path='/about' component={ProjectsContainer}/>
      <Route exact path="/school-map" component={SchoolMapContainer}/>
      <Route exact path="/forum" component={ForumContainer}/>
      </Switch>

    </div>
  )
}

export default App
