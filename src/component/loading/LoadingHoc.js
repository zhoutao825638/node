import React from 'react'





export default function LoadingHoc(Loading) {

    return class LoadingHocClass extends Loading {

        render() {

            if(this.state.success){
                return super.render()
            }

            return (
                <div>
                    数据正在加载中.......
                </div>
            )
        }

    }

}