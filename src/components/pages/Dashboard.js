import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "../../styles/Dashboard.scss";
import ListCardImage from "../ListCardImage";
import SearchTerm from "../SearchTerm";
import { addPhoto } from "../../features/myPhotos/myPhotosSlice";

function Dashboard() {

    const [fetchedPhotos, setFetchedPhotos] = useState();
    const dispatch = useDispatch();

    function fetchPhotos(searchTerm){
        try {
            fetch("https://api.unsplash.com/search/photos?page=1&per_page=12&query="+searchTerm+
            "&client_id=cIj9hrpBUtJzOGe3k-Yuio1scBRcLIHAQFgv0ebotVE")
            .then(response => response.json())
            .then(data => {
                setFetchedPhotos(data.results);
            });
            
        } catch (error) {
            console.log(error);
        }
        return "";
    }

    function addToMyPhotos(photo) {
        dispatch(addPhoto(photo));
    }

    return (
        <main>
            <SearchTerm 
                getPhotos={fetchPhotos}
                searchPlaceholder="Search" />
            <ListCardImage 
                photos={fetchedPhotos} 
                local={false} 
                addToMyPhotos={addToMyPhotos} />      
        </main>
    );
}

export default Dashboard;