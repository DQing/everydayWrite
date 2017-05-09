import React, {Component} from "react";
import style from "../../../style/recentTimeDaily.css";

const RecentTimeDaily = React.createClass({


    calDate: function () {
        let dateArray = [];
        let date = new Date();
        for (let i = 0; i < 7; i++) {

            let currentDate = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString() + '-' + (date.getDate() - i).toString();
            dateArray.push(currentDate);
        }

        return dateArray;


    },
    componentWillMount: function () {
        $.ajax({
            url: '/lookRecent',
            type: 'GET',
            contentType: 'application/json',
            success: function (data, status) {
                let dailyList = '';
                if (status === 'success') {
                    for (var i = 0; i < data.length; i++) {
                        for (var j = 0; j < data[i].allNotes.length; j++) {

                            if ((this.calDate().indexOf((data[i].allNotes)[j].date).toString()) != -1) {

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
        return (
            <div className={style.content} id="form">

            </div>
        )
    }
});

export default RecentTimeDaily;
