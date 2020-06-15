import React from 'react'
import Steak from '../image/cooking-grilled-steak.jpg'


class Jumbotron extends React.Component{

    render(){
        return(
    <div className="jumbotron jumbotron-fluid">
        <div className="container-jum">
        <img src={Steak} style={{width:"100%"}} />
        <div className="jum-text-block">
            STEAK HOUSE
        </div>
        </div>
    </div>
        )
    }
}
export default Jumbotron;