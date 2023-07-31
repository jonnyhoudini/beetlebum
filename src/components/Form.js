import React, { useState, useEffect } from 'react';
import { postDinosaur } from '../services/services';
// import L from 'leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

const Form = () => {

    const [position, setPosition] = React.useState([55.93583221125592, -4.027169238635295]); // Set initial position to Brodens

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        location: "",
        email: "",
        address: "",
        map: ""
    })

    // function handleMapClick(e) {
    //     setPosition([e.latlng.lat, e.latlng.lng]);
    // }

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const tempFormData = formData;
        console.log(tempFormData);
        postDinosaur(tempFormData).then((data) => {
            console.log('dinosaur added', data);
        });

        // Reset the form input values   
        setFormData({
            name: "",
            category: "",
            description: "",
            location: "",
            email: "",
            address: "",
            map: ""
        });
    }

    return (
        <form onSubmit={onSubmit} id="flashcard-form" >
            <h2 className="formheader">Jim'll Fix It</h2>

            <div className="formWrap">
                <select name="category" id="category" value={formData.category} onChange={onChange}>
                    <option value="">--Please choose a category--</option>
                    <option value="bins">Bins</option>
                    <option value="grass">Grass</option>
                    <option value="roads">Roads</option>
                    <option value="lights">Street lights</option>
                    <option value="schools">Schools</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="formWrap">
                <label htmlFor="name">Your name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} />
            </div>

            <div className="formWrap">
                <label htmlFor="description">Description:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description} />
            </div>
            <div className="formWrap">
                <label htmlFor="location">Location:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location} />
            </div>

            {/* <MapContainer center={position} zoom={16} style={{ height: '400px', width: '100%' }} onClick={handleMapClick} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Your selected location</Popup>
                </Marker>
            </MapContainer> */}

            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input
                    onChange={onChange}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email} />
            </div>
            <div className="formWrap">
                <label htmlFor="address">Address:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address} />
            </div>

            <input type="submit" value="Tell Cllr Jim" id="save" className="formheader" />
        </form>
    )
}

export default Form