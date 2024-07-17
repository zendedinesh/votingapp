import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext'
import '../Candidates/Candidates.css'
const Candidates = () => {
  const { auth } = useAuth();
  const [data, setData] = useState([])

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8050/candidates")
      const { data } = res;
      setData(data.data);
    } catch (error) {

      alert("error getting cadidate Data")
    }
  }

  useEffect(() => {
    if (auth?.ROLE === "ADMIN") {

      getData();
    }
    else {
      navigate("/login")
    }
  }, [auth])
  return (
    <div>
      <div>
        <p className='addedcandidate'>
          Candidates And theire Votes
        </p>
        {
          auth
          &&
          <div>
            {
              data.map((candidate) => {
                return (
                  <div className='candidateCards'>


                    <div className='candidateCard' >

                      <h4 >

                        Name:  {candidate.name}
                      </h4>
                    </div>
                    <hr />
                    <div className='candidateCard'>

                      <h4 >

                        Votes: {candidate.totalVotes}
                      </h4>
                    </div>

                  </div>


                )
              })
            }

          </div>
        }
      </div>

      <div className='addcandidatesforvote'>
        <Link to={"/admin/addCandidate"}>Add Candidates</Link>
      </div>
    </div>
  )
}

export default Candidates
