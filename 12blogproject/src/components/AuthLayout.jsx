import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")

        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])




    return loader ? <h1>Loading...</h1> : <>{children}</>

}






/*
ALTERNATE WAY FOR UNDERSTANDING:-

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        // If route requires authentication but user is not authenticated
        if (authentication && !authStatus) {
            navigate("/login");
        } 
        // If route is for non-authenticated users but user is authenticated
        else if (!authentication && authStatus) {
            navigate('/');
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}


*/