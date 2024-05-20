import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const VanDetail = () => {

    const [vanDetails, setVanDetails] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    },[params.id])

    return(
        <div className="van-detail-container">
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