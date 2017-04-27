var React = require('react');

var Register = React.createClass({

    commit: function () {
        const username = $('#user').val();
        const password = $('#password').val();
        const repeatPassword = $('#repeatPassword').val();
        const telephone = $('telephone').val();
        if (password === repeatPassword) {
            $.ajax({
                url: '/register',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({"name": username, "pwd": password, "tel": telephone}),
                success: function (data, status) {
                    if (status === 'success') {
                        if (data === '1') {
                            alert('注册成功啦,请登陆哦');
                        }
                        else {
                            alert("亲,您的账户已存在,不能再进行注册哦");
                        }
                    }
                }

            });
        } else {
            alert("哎呀,两次密码不同啦,请重新输入吧");
        }

    }.bind(this),

    render: function () {
        return (
            <div>
                <div className="user">
                    <input type="text" className="form-control"
                           id="user" placeholder="Username"/>
                </div>
                <br/>
                <div className="password form-group">
                    <input type="password" className="form-control"
                           id="password" placeholder="Password"/>
                </div>
                <br/>
                <div className="repeatPassword form-group">
                    <input type="password" className="form-control"
                           id="repeatPassword"
                           placeholder="Repeat Password"/>
                </div>
                <div className="telephone form-group">
                    <input type="text" className="form-control"
                           id="telephone"
                           placeholder="telephone"/>
                </div>
                <hr/>
                <div className="buttonCenter">
                    <button type="submit"
                            onClick={this.commit}
                            className="btn btn-default">Sign Up
                    </button>
                </div>

            </div>
        )
    }
});

export default Register;