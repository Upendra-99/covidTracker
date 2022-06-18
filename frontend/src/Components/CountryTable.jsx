import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import styles from "./CountryTable.module.css"

export const CountryTable = () => {
    const [countryData, setCountryData] = useState([])
    const [inputString, setInputString] = useState("")

    const getCountriesData = async () => {
        let result = await fetch("https://api.covid19api.com/summary")
        result = await result.json();
        setCountryData(result.Countries);
    }

    const navigate = useNavigate();

    const verifyToken = async (token) => {
        let result = await fetch('https://localhost:9008/verifyToken', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        })
        result = await result.json();
        if (!result.status) {
            navigate("/login")
            return;
        }
    }

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("token"))
        if (!token) {
            navigate("/login")
        }
        verifyToken(token);
        getCountriesData();
    }, [])

    return (
        <div>

            <div className={styles.CountryTableDiv}>
                <div className={styles.TableHeading} onScroll={{ position: "sticky" }}>
                    <div>Country</div>
                    <div>Confirmed (total confirmed cases)</div>
                    <div>Recovered (total number of recovered cases)</div>
                    <div>Deceased (total number of deceased cases)</div>
                </div>
                {countryData.map(item => (
                    <div key={item.ID}>
                        <div>{item.Country}</div>
                        <div>{item.TotalConfirmed}</div>
                        <div>{item.TotalRecovered}</div>
                        <div>{item.TotalDeaths}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}
