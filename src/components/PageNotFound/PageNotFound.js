import React from 'react';
import './PageNotFound.css'
import {useNavigate} from "react-router-dom";

function PageNotFound(props) {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <h1>PageNotFound</h1>
            <button onClick={goBack}>Назад</button>
        </>
    );
}

export default PageNotFound;



