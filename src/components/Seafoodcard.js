import React from 'react'
import Salem from '../image/salem-butter.jpg'
import Lobster from '../image/lobster.jpg'
import Crab from '../image/crab.jpg'


class Chickencard extends React.Component {

    render() {

        return (
            <div className="layout-diner-card">
               
                <div className="card card-diner" style={{width:"20rem"}}>
                <img src={Salem} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card card-diner" style={{width: "20rem"}}>
                <img src={Lobster} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card card-diner" style={{width: "20rem"}}>
                <img src={Crab} class="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Chickencard;