import React, {Component} from "react";
import style from '../../style/home.css';
var Link = require('react-router').Link;

const Home = React.createClass({

    logout: function () {
        location.href = '/'
    },
    render() {
        let info = '';
        if (this.props.name) {
            info = this.props.name + '你好!';
        }
        else {
            info = '登陆/注册'
        }
        return (
            <div className={style.contain}>
                <div className={style.title}>
                    每日记
                </div>
                <div className={style.btn}>
                    <Link to='LoginAndRegister'>{info}</Link>
                </div>
                <div>
                    <img src="../../image/1.jpg" className={style.image} alt="1.jpg"/>
                </div>
            </div>


        )
    }
});
module.exports = Home;
