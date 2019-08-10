import React from 'react'
import axios from 'axios'
import LoadingHoc from './LoadingHoc';



class Loading extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            success: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                success: true
            })
        }, 3000)

        const _this = this;

        axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
            .then(function (response) {
                console.log(response)
                _this.setState({
                    users: response.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
        console.log(_this.state.users)
        console.error("数据已更新")
    }

    getDataFromNetwork = () => {
        console.log("数据已更新")
    }

    render() {

        return (
            <div>
                加载完成 {this.state.success}
            </div>
        )
    }
}

export default LoadingHoc(Loading);