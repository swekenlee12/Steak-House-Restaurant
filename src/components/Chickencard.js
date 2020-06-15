import React from 'react'
import Chickensalad from '../image/chicken-salad.jpg'
import Wholechicken from '../image/whole-grilled-chicken.jpg'
import Wings from '../image/buf-wing.jpg'


class Chickencard extends React.Component {

    render() {

        return (
            <div className="layout-diner-card">
               
                <div className="card card-diner" style={{width:"20rem"}}>
                <img src={Chickensalad} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card card-diner" style={{width: "20rem"}}>
                <img src={Wholechicken} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card card-diner" style={{width: "20rem"}}>
                <img src={Wings} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Chickencard;