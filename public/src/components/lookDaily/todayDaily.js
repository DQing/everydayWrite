import React, {Component} from "react";

const App = React.createClass({

    getInitialState(){

        return {}
    },
    componentWillMount: function () {

        $.ajax({
            url: '/look',
            type: 'GET',
            contentType: 'application/json',
            success: function (data, status) {
                if (status === 'success') {
                    for (var i = 0; i < data.length; i++) {
                        for (var j = 0; j < data[i].allNotes.length; j++) {

                            let dailyList = data[i].userName + (data[i].allNotes)[j].date + (data[i].allNotes)[j].daily;
                            document.writeln(dailyList);
                        }
                    }
                }
                console.log("finish");
            }
        });

    },
    render() {
        return (
            <div>
                hello
            </div>
        )
    }
});

export default App;
