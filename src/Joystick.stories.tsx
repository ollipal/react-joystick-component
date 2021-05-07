import * as React from "react";

import { action } from '@storybook/addon-actions';

import { Joystick } from "./Joystick";



export const StandardComponent = () => <Joystick start={action("Started")} move={action("Moved")} stop={action("Stopped")} />

console.log('steve')
export const Coloured = {
    title: "Colored",
    component:Joystick,
    parameters: {
        start: action("Started"),
        baseColor:  "#FFFF99",
        stickColor: "#FFD300",
        move: action("Moved"),
        stop:action("Stopped")
    }
}

export const Throttled50S = () => <Joystick start={action("Started")} throttle={50} move={action("Moved")} stop={action("Stopped")} />

export const Throttled100S = () => <Joystick start={action("Started")} throttle={100} move={action("Moved")} stop={action("Stopped")} />

export const Throttled200S = () => <Joystick start={action("Started")} throttle={200} move={action("Moved")} stop={action("Stopped")} />


export const Throttled500S = () => <Joystick start={action("Started")} throttle={500} move={action("Moved")} stop={action("Stopped")} />


export const GiantJoystick = () => <Joystick start={action("Started")}move={action("Moved")} stop={action("Stopped")}  size={500}/>
export const SmallJoystick = () => <Joystick start={action("Started")}move={action("Moved")} stop={action("Stopped")}  size={50}/>
export const DisabledJoystic = () => <Joystick start={action("Started")}move={action("Moved")} stop={action("Stopped")}  disabled={true}/>

interface IDirectionComponentState {
    direction:string;
}
interface IDirectionCompnentProps {

}
export class DirectionComponent extends React.Component<IDirectionCompnentProps, IDirectionComponentState> {
    constructor(props:any){
        super(props);
        this.state = {
            direction:"Stopped"
        };
    }
    private _handleMove(data:any){
        this.setState({
            direction: data.direction
        });
    }
    private _handleStop(data:any){
        this.setState({
            direction: "Stopped"
        });
    }
    render(){
        return (<div>
            <Joystick move={this._handleMove.bind(this)} stop={this._handleStop.bind(this)} />
            <p>{this.state.direction}</p>
        </div>);
    }
}

