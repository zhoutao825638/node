import React from 'react'



export default class LoginForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }



    valueChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        this.setState({ [key]: value });
    }



    submitForm = (e) => {
        console.log("出发提交事件")
        console.log(e)
        alert("确定提交？")
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <span>{this.state.username}</span>
                    <hr />
                    <span>{this.state.password}</span>
                    <br />
                    <input type="input" value={this.state.user} onChange={(e)=>this.valueChange(e)} name="username" />
                    <br />
                    <input type="input" value={this.state.password} onChange={(e)=>this.valueChange(e)} name="password" />
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

}
