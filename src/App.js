import './App.css';
import 'bootstrap'
import Routes from './Routes'
import Navbar from './Navbar'
import React, { Component } from 'react';
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import  'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  static defaultProps={ dogs: [
    {
      name: "Whiskey",
      age: 2,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    },
    {
      name: "Biscuit",
      age: 3,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]};
  render(){
    console.log(this.props.dogs)

     return(
       <div>
        <Navbar dogs={this.props.dogs}/>
        <div className='container'>
        <Routes dogs={this.props.dogs}/>
        </div>
       
      </div>)
  }
}
export default App;
