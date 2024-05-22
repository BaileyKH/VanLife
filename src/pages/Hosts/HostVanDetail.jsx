import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

export const HostVanDetail = () => {
    const { id } = useParams();
    const [currentVan, setCurrentVan] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setCurrentVan(data.vans));
    }, []);

    const vanDetailStlyes = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    if (!currentVan) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${currentVan.type}`}>
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink end style={({ isActive }) => isActive ? vanDetailStlyes : null} to=".">Details</NavLink>
                    <NavLink style={({ isActive }) => isActive ? vanDetailStlyes : null} to="pricing">Pricing</NavLink>
                    <NavLink style={({ isActive }) => isActive ? vanDetailStlyes : null} to="photos">Photos</NavLink>
                </nav>
                <Outlet context={{ currentVan }}/>
            </div>
        </section>
    );
};
