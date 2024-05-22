import React, { useState, useEffect } from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export const VanDetail = () => {

    const [vanDetails, setVanDetails] = useState(null)
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    },[params.id])

    const  search = location.state?.search || ""
    const type = location.state?.type || "all"

    return(
        <div className="van-detail-container">
            <Link to={`..${search}`} relative="path" className="back-button">
                &larr; <span>Back to {type} vans</span>
            </Link>
            {vanDetails ? (
                <div className="van-detail">
                    <img src={vanDetails.imageUrl} />
                    <i className={`van-type ${vanDetails.type} selected`}>{vanDetails.type}</i>
                    <h2>{vanDetails.name}</h2>
                    <p className="van-price"><span>${vanDetails.price}</span>/day</p>
                    <p>{vanDetails.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
}