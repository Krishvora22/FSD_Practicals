import { Component } from "react";
import "./style.css"; // Assuming you have a CSS file for styling
class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
        };
    }
    incr(){
        // this.setState({
        //     count: this.state.count + 1,
        // },() => {console.log("CallBack : ",this.state.count)});
        // console.log(this.state.count);

        this.setState((prevState) => ({
            count: prevState.count + 1,
        }), () => {
            console.log("CallBack : ", this.state.count);
        });
    }

    incrfive(){
        this.incr();
        this.incr();
        this.incr();
        this.incr();
        this.incr();
    }

    decr(){
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }), () => {
            console.log("CallBack - Decremented: ", this.state.count);
        });
    }

    decrfive(){
        this.decr();
        this.decr();
        this.decr();
        this.decr();
        this.decr();
    }

    render() {
        return (
            <div className="counter">
                <h1>Counter: {this.state.count}</h1>
                <div className="button-grid">
                    <button onClick={() => this.incr()}>Increment</button>
                    <button onClick={() => this.incrfive()}>Increment by 5</button>
                    <button onClick={() => this.decr()}>Decrement</button>
                    <button onClick={() => this.decrfive()}>Decrement by 5</button>
                    <button className="reset-button" onClick={() => this.setState({ count: 0 })}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Counter;