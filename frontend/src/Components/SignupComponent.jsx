import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from "./LoginComponent.module.css"

export const SignupComponent = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        username: "",
        useremail: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.className]: e.target.value
        })
    }

    const handleSignIn = async () => {
        let result = await fetch('http://localhost:9008/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
        result = await result.json()
        alert(result.message);
        navigate('/login')
    }

    return (
        <div className={styles.LoginDiv}>
            <span>Sign up to Covid Tracker Dashboard</span>
            <input type="text" placeholder='User Name' onChange={handleChange} className="username" />
            <input type="text" placeholder='Email Address' onChange={handleChange} className="useremail" />
            <input type="text" placeholder="Password" onChange={handleChange} className="password" />
            <input type="button" placeholder='Log in' className={styles.LoginBtn} value="Log in" onClick={handleSignIn} />
            <p>Do you have have an account on Covid Tracker Dashboard then go to <span onClick={() => navigate("/login")}>Loin in</span> page</p>
        </div>
    )
}
