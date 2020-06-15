import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Quickpicker from './components/Quickpicker'
import Storehours from './components/Storehours'
import Dinercards from './components/Dinercards'
import Chickencard from './components/Chickencard'
import Seafoodcard from './components/Seafoodcard'
import Footer from './components/Footer'
import './App.css'


class App extends React.Component{

  render(){

    return(
      <>
        <Navbar />
        <Jumbotron />
        <Storehours />
        <Quickpicker />
        <Dinercards />
        <Chickencard />
        <Seafoodcard />
        <Footer />
      </>

    )
  }
}

export default App;
