import * as React from 'react';
import { textChangeRangeIsUnchanged } from 'typescript';

interface IIntroProps {
    text?: string,
}

interface IIntroState {
    text: string,
    dato: number,
}

export default class Intro extends React.Component<IIntroProps, IIntroState> {

    public state = {
        text: "Soy un texto del estado",
        dato: 1
    }



    public render() {
        const { text } = this.props
        const t = text ? text : this.state.text
        return (
            <p className="App-intro">
                <span>{t}</span>
            </p>
        )
    }
}