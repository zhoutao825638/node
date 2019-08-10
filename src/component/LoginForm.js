import React from 'react'
import Hoc from './Hoc'


class LoginForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    componentWillMount(){
        console.log("the super class's life cycle")
    }

    testRef = () =>{
        console.log("测试高阶组建的特性")
    }

    valueChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        this.setState({ [key]: value });
    }



    submitForm = (e) => {


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
                    <input type="input" value={this.state.password} onChange={(e)=>this.valueChange(e)} name="password" placeholder={this.props.newPassword} />
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

}

export default Hoc(LoginForm)