import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import DogList from './Doglist';
import DogDetails from './DogDetails'

export default class Routes extends Component {

    render() {
        // console.log(this.props.dogs)

        const getDog = (props)=>{
            let name=props.match.params.name;
            let currentDog=this.props.dogs.find(
                dog => dog.name.toLowerCase()===name.toLowerCase()
            );
            console.log(currentDog)
            return <DogDetails {...props} dog={currentDog}/>;
        }
        return (
        <Switch>
          <Route exact path='/dogs' render={()=> <DogList dogs={this.props.dogs}/>}/>
          <Route exact path='/dogs/:name' render={getDog}/>
            <Redirect to='/dogs'/>
        </Switch>
        )
    }
}
