// CHALLENGE: uncomment the code below and see the car stats rendered
import React from 'react'
import ReactDOM from 'react-dom'

import cars from './practice.js'

const [honda, tesla] = cars

const {
    speedStats: { topSpeed: teslaTopSpeed }
} = tesla

const {
    speedStats: { topSpeed: hondaTopSpeed }
} = honda

const {
    coloursByPopularity: [teslaTopColour]
} = tesla
const {
    coloursByPopularity: [hondaTopColour]
} = honda

ReactDOM.render(
    <tbody>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </tbody>,
    document.getElementById('root')
)
