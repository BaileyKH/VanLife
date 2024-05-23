import React, { useState, useEffect } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { getVans } from "../../api"

export const VanDetail = () => {

    const [vanDetails, setVanDetails] = useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVanDetails(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    },[id])

    if (loading) {
        return <h1>Loading...</h1>
    }
    
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const  search = location.state?.search || ""
    const type = location.state?.type || "all"

    return(
        <div className="van-detail-container">
            <Link to={`..${search}`} relative="path" className="back-button">
                &larr; <span>Back to {type} vans</span>
            </Link>
            {vanDetails && (
                <div className="van-detail">
                    <img src={vanDetails.imageUrl} />
                    <i className={`van-type ${vanDetails.type} selected`}>{vanDetails.type}</i>
                    <h2>{vanDetails.name}</h2>
                    <p className="van-price"><span>${vanDetails.price}</span>/day</p>
                    <p>{vanDetails.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            )}
        </div>
    );
}