import React from 'react'
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            <Link to="/beers">Beers</Link>
            <Link to="/random-beer">Find random beer !</Link>
            <Link to="/new-beer">Add a beer</Link>
        </div>
    )
}
export default Home