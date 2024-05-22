import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const Vans = () => {

    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    
    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter): vans

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return(
        <div className="van-list-container">
            <h1>Explore our Van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>simple</button>
                <button onClick={() => handleFilterChange("type", "luxury")} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>luxury</button>
                <button onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>rugged</button>
                {typeFilter ? (<button onClick={() => handleFilterChange("type", null)} className="van-type clear-filters">clear filter</button>) : null}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}