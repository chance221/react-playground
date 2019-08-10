import React from 'react'

//Is there a way to do this without creating three different functions?
//create a helloworld component
class HelloWorld extends React.Component{
    constructor(props){
        super(props)
        this.state = {who: "world"} 
    }

    handleWorldClick = () => {
        console.log("world button clicked")
        this.setState({ who: "world"})
    }

    handleFriendClick = () => {
        console.log("friend button clicked")
        this.setState({ who: "friend"})
    }

    handleReactClick = () => {
        console.log("react button clicked")
        this.setState({ who: "react"})
    }

    render(){
        return(
            <div>
                <p> Hello, {this.state.who}!</p>
                <button
                  onClick={this.handleWorldClick}
                >
                    World
                </button>
                <button
                  onClick={this.handleFriendClick}
                >
                    Friend
                </button>
                <button
                  onClick={this.handleReactClick}
                >
                    React
                </button>
            </div>
        )
    }
    static defaultProps ={
        who: "world"
    }

}

export default HelloWorld;
//should render out a div with a p inside containing hello world. (done)

//the word "world" should come from state in a peoperty named who (done)

//the component should display three buttons one for "World" friend and react (done)

//When someone clicks on the button the p tag should display hello friend ()

//When react is clicked should say hello react

//when world button is clicked should show hello world