import React, { Component } from 'react';
import './game.css';
import boy from './image/boy.jpg'
import girl from './image/girl.jpg'

class HelloTitle extends Component{
    render(){
        let photo
        if(this.props.title == "帥哥我想要你"){
            return <div>
            <h1 className="boy">帥哥對吧</h1>
            <img className="photo" src={boy} alt="NO!!!!oops" /></div>
        }else{
            return <div>
            <h1 className="girl">美女對吧</h1>
            <img className="photo" src={girl} alt="NO!!!!oops" /></div>
        }
    }
}

class InputGender extends Component{
    constructor(props){
        super(props)
        this.state = {gender : 'M'}
        this.changeGender = this.changeGender.bind(this)
    }
    
    changeGender(event){
        this.setState({gender:event.target.value})
    }
    
    render(){
        let title;
        if(this.state.gender == "M")
            title = <HelloTitle title="帥哥我想要你" />
        else
            title = <HelloTitle title="小姐當我女朋友" />

        return (
        <div>
            {title}
            <select className="select" onChange={this.changeGender.bind(this)}>
                <option value="M">男</option>
                <option value="W">女</option>
            </select>
        </div>)
    }
}

export default InputGender