import React from 'react';
import './RouletteGun.css'


class RouletteGun extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            spinningTheChamber: false,
            chamber: null
        }
    }

//need to write a function that changes spinning the chamber to true for two seconds
//after that two seconds runs a function the randomly generates a number between 1 and 8

// after the two seconds runs a function that updates <p> with the cor
    
    rouletteStart = () => {
        
        this.setState({spinningTheChamber : true})
        let timeout = setTimeout(this.didIDie, 2000)
        //run an if statement that updates message in p. 
        //if Spinning the Chamber = true message1
        //if bulletInChamber !== chamber message2
        //if bulletInChamber === chamber message3
    }

    didIDie = () =>{
        console.log('it ran')
        
        this.setState({spinningTheChamber : false})
        this.setState({chamber: Math.floor((Math.random() *8) +1)})
        

    }

    amISafe = () => {
        if(this.state.chamber === this.props.bulletInChamber){
            return 'BANG!!!'
        } else {
            return "You're Safe" 
        }
    }




    render(){
        //this component needs to pass in chamber and spinningTheChamber to the button component
        return(
            <div>
                <p>
                    {this.amISafe()}
                </p>
                <button onClick = {this.rouletteStart}>Pull The Trigger!</button>
            </div>
        )
    }
    static defaultProps = {
        bulletInChamber : 8
    }
}

export default RouletteGun