import React from 'react';
import {Letter} from './Letter'
import './App.css';

/*export class Word extends React.Component {
    render() {
        const letter1 = this.props.word[0];
        return(
            <div className = 'word-container'>
                <Letter value={letter1}/>
                <Letter value={this.props.word[1]}/>
                <Letter value={this.props.word[2]}/>
                <Letter value={this.props.word[3]}/>
                <Letter value={this.props.word[4]}/>
            </div>
        );
    }
}*/

export function Word({word, color}) {
    return(
        <div className = 'word-container'>
        <Letter value={word[0]} color={color[0]} />
        <Letter value={word[1]} color={color[1]}/>
        <Letter value={word[2]} color={color[2]}/>
        <Letter value={word[3]} color={color[3]}/>
        <Letter value={word[4]} color={color[4]}/>
        </div>
    );
}