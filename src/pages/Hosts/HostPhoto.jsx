import React from "react";
import { useOutletContext } from "react-router-dom";

export const HostPhoto = () => {

    const { currentVan } = useOutletContext();

    return(
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    );
}