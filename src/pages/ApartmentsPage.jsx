// src/pages/ApartmentsPage.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ApartmentsPage() {
    const [apartments, setApartments] = useState([]);
    const location = useLocation()
    console.log(location);

    useEffect(() => {
        axios.get("https://ironbnb-m3.herokuapp.com/apartments/")
            .then((response) => setApartments(response.data))
    }, [location]) // solucion temporal para hacer el fetch después del submit

    return (
        <div>
            <h3>List of apartments</h3>
            <ul>
                {
                    apartments.map((apartment)=>{
                        return(
                            <li className="card" key={apartment._id}>
                                <h4>{apartment.title}</h4>
                                <img src={apartment.img} alt={apartment.title} />
                                <p>Price: {apartment.pricePerDay}€</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ApartmentsPage;
