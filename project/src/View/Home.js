import React, { Component } from 'react';
import './Home.css';
import Time from './Time';
import Game from './game';
import Temperature from './temperature';
class Home extends Component {
    

    render() {
        return (
            <div className="body">
                <div className="header">
                    <h1 className="h1_text">Life &amp; coding</h1>
                    <span className="span_text"><Time /></span>
                </div>
                <div className="center">
                    <div>
                        <Game />
                        <Temperature />
                    </div>
                </div>
                <div className="footer">
                </div>
            </div>
        )
    }
}

export default Home