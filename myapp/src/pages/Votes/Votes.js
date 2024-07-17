import React, { useState, useEffect } from 'react'
import './Votes.css'
import axios from 'axios';

import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Votes = () => {

    const { auth,login,logout } = useAuth();
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState({})
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:8050/getUserCandidates")
            const { data } = res.data;
            console.log(data);
            setData(data);
        } catch (error) {
            alert("erorr getting candidates")
        }
    }
    useEffect(() => {
        if (auth) {

            getData();
        }
    }, [auth])



    const addVote = async () => {
        try {
            if (selectedCandidate._id) {

                const res = await axios.post("http://localhost:8050/addVote", { userId: auth._id, candidateId: selectedCandidate._id })
                login(res.data.data.user)
                alert("Vote Added")
            }
            else {
                alert("Please Select Candidate to Vote")
            }
        } catch (error) {
            alert("error Adding Votes")
        }
    }

   
    return (
        <div className='container'>

            {
                auth ?
                auth.hasVoted?
                <>
                <h1>
                    Your Vote has Been Registered
                </h1>
                <button onClick={logout}>
                    Logout
                </button>
                </>
                :
                    <div className='formContainer'>



                        <div>
                            <h1 className='voting'>voting</h1>
                        </div>
                        < form className='mainvoting'>
                            {
                                data.map((candidate) => {
                                    const selected = selectedCandidate._id === candidate._id;
                                    return (
                                        <div className='voteformodi'>
                                            <input type="radio" className='btn' id={`candidate-${candidate._id}`} onChange={() => setSelectedCandidate(candidate)} checked={selected} />
                                            <label htmlFor={`candidate-${candidate._id}`}>{candidate.name}</label>
                                        </div>
                                    )
                                })
                            }




                            <input type="button" className='votedone' value='vote' onClick={addVote} />

                        </form>
                    </div>
                    : <h1>
                        Please Login to Vote <a href="/login">Login</a>
                    </h1>
            }
        </div>
    )
}

export default Votes;