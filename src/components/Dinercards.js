import React from 'react'
import Steakfries from '../image/steak-fries.jpg'
import Steakmushroom from '../image/steak-mushroom.jpg'
import Steakasp from '../image/steak-asp.jpg'


class Dinercard extends React.Component {

    render() {

        return (
            <div className="layout-diner-card">
                <div className="card card-diner" style={{width:"20rem"}}>
                <img src={Steakfries} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card card-diner" style={{width: "20rem"}}>
                <img src={Steakmushroom} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card card-diner" style={{width: "20rem"}}>
                <img src={Steakasp} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Dinercard;