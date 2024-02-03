// src/pages/AddApartmentPage.jsx
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";


function AddApartmentPage() {
    const [title, setTitle] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0);
    const [img, setImg] = useState("");
    const [images, setImages] = useState([])
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);

    const handleSubmit = (event) => {
        event.preventDefault()
        const body = {
            title,
            pricePerDay,
            img: images[0]
        }

        axios.post("https://ironbnb-m3.herokuapp.com/apartments/", body)

        // Reiniciar el formulario con todos los campos vacíos
        setImg("")
        setTitle("")
        setPricePerDay("")
        navigate("/")
    }

    const handleImages = (e, imageURL) => {
        e.preventDefault()
        setImg("")
        setImages([...images, imageURL])
    }


    return (
        <div className="AddApartmentPage">
            <form className="AddApartmentForm" onSubmit={(event) => handleSubmit(event)}>
            <h3>Add New Apartment</h3>
                <label htmlFor="title">Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" />
                {/* <label htmlFor="img">Image URL</label>
                <input value={img} onChange={(e) => setImg(e.target.value)} type="text" name="img" /> */}
                <label htmlFor="img">Image URL</label>
                <input value={img} onChange={(e) => setImg(e.target.value)} type="text" name="img" />
                <button onClick={(e) => handleImages(e, img)}>Add image</button>
                <label htmlFor="pricePerDay">Price per day</label>
                <input value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} type="number" name="pricePerDay" />
                <button type="submit">Add apartment</button>
            </form>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Images</strong>
                </Toast.Header>
                <Toast.Body>
                    <p>{title}</p>
                    {
                        images.map((img,index) => {
                            return <img key={img+index} className="apartmentThumbnail" src={img} alt="" />
                        })
                    }
                </Toast.Body>
            </Toast>
        </div>

    );
}

export default AddApartmentPage;
