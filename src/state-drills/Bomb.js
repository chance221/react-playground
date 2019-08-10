import React from 'react'


class Bomb extends React.Component{
    constructor(props){
        super(props)
        this.state = { count : 0 }
        
    }
    componentDidMount = () =>{
        this.interval = setInterval(()=>{
            console.log('interval set')
            this.setState({count :this.state.count + 1})
        },  1000)
    }
    tickOrTock(){
        const { count } = this.state
        if(count >= 8 ){
            clearInterval(this.interval)
            return 'boom!!'
        }
        else if(count % 2 === 0){
            return 'tick'
        }
        else {
            return 'tock'
        }
    }
    
    
    
    //function goes here
     componentWillUnmount(){
             clearInterval(this.interval)
        }
    render(){
        return(
            <div>
                <p id='pp'>{this.tickOrTock()}</p>
            </div>
        )
    }
}

export default Bomb;
//Make a component called Bomb 

//component should render a div element Inside the div there should be a p that contains either tick or tock or BOOM

//the component will have an initial state with a property count of 0

//When the component mounts register an interval that adds ont to the count in the state every second

//when the component unmounts clear the interval.

//When the count is divisible by 2 display the word tick

//when the count is not divisible by 2 display the word "tock"

//When the count is >= 8 display boom AND clear the interval

