import React, { Component } from 'react';
import './temperature.css';

class Title extends Component {
    render(){
        return <h1 className="tenoerature_text">{(this.props.temperature>=100 ? '達到沸點!!!':'未到沸點...')}</h1>
    }
}

class InputTemperature extends Component{
    render(){
        return(
            <div className="temperature">
                <span className="span_temparture">目前輸入溫度是：{this.props.temperature}度{this.props.type}</span><br/>
                <input className="input" name="temperature" 
                        value={this.props.temperature} 
                        onChange={this.props.changeState} /><br/>度{this.props.type}
            </div>
        )
    }
}


class EasyForm extends Component {
    constructor(props) {
        super(props)
        this.state = ({ temperature : 0,type : '' })
        this.changeState = this.changeState.bind(this)
    }

    toConvert(temperature,type){
        if (type == 'C')
            return (temperature-32)*5/9
        else
            return (temperature*9/5)+32

    }

    changeState(type){
        let temperature = window.event.target.value
        this.setState({ 'temperature' : temperature,'type' : type })
    }

    render() {
        let temperature_C = this.state.type=='F' ? this.toConvert(this.state.temperature,'C') : this.state.temperature
        let temperature_F = this.state.type=='C' ? this.toConvert(this.state.temperature,'F') : this.state.temperature

        return(
            <div>
                <Title temperature={temperature_C} />

                <InputTemperature type="C" 
                temperature={temperature_C} 
                changeState={this.changeState.bind(this,'C')} />

                <InputTemperature type="F" 
                temperature={temperature_F} 
                changeState={this.changeState.bind(this,'F')} />
            </div>
        )
    }
}

export default EasyForm