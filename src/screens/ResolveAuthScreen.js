import React, { useEffect, useContext } from "react";
import { Constext as AuthContext, Context } from '../context/AuthContext'

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin()
    }, [])
    return null
}

export default ResolveAuthScreen