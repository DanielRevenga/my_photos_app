import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "../../styles/Dashboard.scss";
import ListCardImage from "../ListCardImage";
import SearchTerm from "../SearchTerm";
import { addPhoto } from "../../features/myPhotos/myPhotosSlice";
import { Container, Pagination } from "@mui/material";
import { selectSearchDashboardTerm, setSearchDashboardTerm } from "../../features/searchTerm/searchTermSlice";

function Dashboard() {
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [fetchedPhotos, setFetchedPhotos] = useState();
    const dispatch = useDispatch();
    const term = useSelector(selectSearchDashboardTerm);


    function fetchPhotos(term, page = 1){
        try {
            fetch("https://api.unsplash.com/search/photos?page="+page+"&per_page=12&query="+term+
            "&client_id=cIj9hrpBUtJzOGe3k-Yuio1scBRcLIHAQFgv0ebotVE")
            .then(response => response.json())
            .then(data => {
                setFetchedPhotos(data.results);
                setTotalPages(data.total_pages);           
            });
            
        } catch (error) {
            console.log(error);
        }
        return "";
    }

    useEffect(() => {
        // console.log(term);
        if(term) fetchPhotos(term, pageNumber);
    }, [term, pageNumber]);

    function addToMyPhotos(photo) {
        toastConfirmHandler();
        // console.log("ADD PHOTO");
        // console.log(term);
        // console.log("-----------------");
        dispatch(addPhoto({photo: photo, term: term}));
    }

    function toastConfirmHandler() {
        toast.success("Photo added successfully!");
    }

    function setSearchTermHandler(term) {
        dispatch(setSearchDashboardTerm(term));
    }

    function paginationHandler(e, value) {
        const page = e.target.textContent;
        setPageNumber(page);
        fetchPhotos(term, page);
    }

    return (
        <main>
            <Container>
                <SearchTerm
                    setSearchTerm={setSearchTermHandler}
                    getPhotos={fetchPhotos}
                    searchPlaceholder="Search" />
                {term ? (<>
                <Container>
                    <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={paginationHandler}
                        hideNextButton  hidePrevButton />
                </Container>
                
                <ListCardImage
                    photos={fetchedPhotos} 
                    local={false}              
                    addPhotoToast={toastConfirmHandler}
                    addToMyPhotos={addToMyPhotos} />  
                
                <Container>
                    <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={paginationHandler} 
                        hideNextButton  hidePrevButton/>
                </Container>
                </>)
                : ""
            }
                <ToastContainer
                    position="bottom-left"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Container>
        </main>
    );
}

export default Dashboard;