import React from 'react'





// 操作Props
export default function Hoc(LoginForm) {
    return class Hoc extends LoginForm {


         styel = {
         backgroundColor: '#0088EE'
        }

        componentWillMount() {
            super.componentWillMount();
            console.log("the components will  mounted")
        }


        proc(componentInstance) {
            componentInstance.testRef();
        }

        render() {
            const newProps = Object.assign({}, this.props, { newPassword: "random passwors", ref: this.proc.bind(this) })
            return (
                <div>
                    <p>这段文字是使用来包裹组建</p>
                    <LoginForm {...newProps} />
                </div>
            )
        }
    }
} 
