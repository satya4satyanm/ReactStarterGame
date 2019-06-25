import React, { Component } from 'react';

const getDefaultState = () => {

    return {
        score: 0
    };
}

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = getDefaultState()
    }

    increaseScore = () => {
        //alert(this.state.score);
        let newScore = this.state.score + 1;
        this.setState({score:newScore});
    }

    render() {
        return (<div onClick={this.increaseScore} style={{"width":"200px","height":"200px","border":"2px solid red"}}>{this.state.score}</div>);
    }

}