import React, {Component} from "react";

const App = React.createClass({
    getInitialState: function () {
        return {
            name: ''
        }
    },
    getName: function (name) {
        this.setState({name: name});
    },
    render() {
        return (
            <div>
                hello
                {this.props.children && React.cloneElement(this.props.children, {
                    onName: this.getName,
                    name: this.state.name
                })
                }
            </div>
        )
    }
});

export default App;
