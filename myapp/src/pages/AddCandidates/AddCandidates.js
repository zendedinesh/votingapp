import React, { useState, useEffect } from 'react'
import './AddCandidates.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../Context/AuthContext'
const AddCandidates = () => {
    const { auth } = useAuth();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleAddCandidate = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.post("http://localhost:8050/addCandidate", { name: name });
            if (res.status === 201) {
                setName("");
                alert("Candiate Created Successfully")
                navigate("/admin/votes")
            }
        } catch (error) {
            alert("Error Adding Candidate")
        }

    }
    useEffect(() => {
        if (auth?.ROLE !== "ADMIN") {
            navigate("/login")
        }
    }, [auth])

    return (
        <div className="adding">
            <div className='goback'>
                <Link to="/admin/votes">Go Back</Link>
            </div>
            <div className="formcontainer" onSubmit={handleAddCandidate}>
                <form action="" className="form">
                    <div className='div'>
                        <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />

                        <div className='addbutton'><button type='submit'>Add Candidate</button>
                            <button type='reset'>Clear</button></div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCandidates
