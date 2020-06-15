import React from 'react'


class Storehours extends React.Component{

    render() {

        return (
            <div className="store-hours">
                <ul className="list-group list-group-horizontal-sm">
                <li className="list-group-item hours">Monday 10AM - 12AM</li>
                <li className="list-group-item hours">Tuesday 10AM - 12AM</li>
                <li className="list-group-item hours">Wednesday 10AM - 12AM</li>
                <li className="list-group-item hours">Thursday 10AM - 12AM</li>
                <li className="list-group-item hours">Friday 10AM - 12AM</li>
                <li className="list-group-item hours">Saturday 10AM - 12AM</li>
                <li className="list-group-item hours">Sunday 10AM - 12AM</li>
                </ul>
            </div>
        )
    }
}
export default Storehours;