import React, { Component } from 'react';
class NowTime extends Component {
    constructor(props){
        super(props)
        this.state = {time : new Date().toLocaleTimeString()}
    }

    componentDidMount(){
        const uptime= () =>{
            this.setState({time: new Date().toLocaleTimeString()})
        }
        setInterval(uptime,1000)
    }

    render() {
        return (
            <h1>{this.state.time}</h1>
        )
    }
}

export default NowTime