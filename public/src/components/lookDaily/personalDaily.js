import React, {Component} from "react";
import style from "../../../style/personalDaily.css";

const PersonalDaily = React.createClass({

    componentWillMount: function () {
        $.ajax({
            url: '/lookPersonal',
            type: 'GET',
            contentType: 'application/json',
            success: function (data, status) {
                let dailyList = '';
                if (status === 'success') {
                    for (var i = 0; i < data.length; i++) {
                        for (var j = 0; j < data[i].allNotes.length; j++) {

                            if (data[i].userName=='111') {

                                dailyList += data[i]._id + " &nbsp;&nbsp;&nbsp;&nbsp;" + data[i].userName + " &nbsp;&nbsp;&nbsp;&nbsp;" + (data[i].allNotes)[j].date + "&nbsp;&nbsp;&nbsp;&nbsp;" + (data[i].allNotes)[j].daily + "<hr/>";
                            }
                        }
                    }

                }
                document.getElementById("form").innerHTML = dailyList;
            }.bind(this)
        });
    },

    render(){
        return <div className={style.content} id="form">


        </div>
    }
});

export default PersonalDaily;