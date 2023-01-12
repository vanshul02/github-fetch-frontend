import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import UserDetailsComponent from './UserDetailsComponent'
import loadingsvg from '../Assets/loading.svg';
import '../Styles/UserAPIStyle.css';

let errorNF = false;
let errorAPICallsExcedded = false;

const UserAPICall = () => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true);
  const { user_id } = useParams();

  const getData = async () => {
    try {
      setLoader(true);
      await axios
        .get(`https://githubfetch.onrender.com/user/${user_id}`)
        .then(result => {
          setLoader(false)
          setData(result.data)
        });
    } catch (error) {
      setLoader(false)
      if (error.response.status === 404) {
        errorNF = true;
      }
      if (error.response.status === 403) {
        errorAPICallsExcedded = true;
      }
    }
  }

  useEffect(() => {
    getData()
  }, [user_id])


  return (
    <div>
      {
        (loader) ?
          <div className='loading-container'>
            <img src={loadingsvg} alt='loader' />
          </div> : (
            (errorNF) ?
              <div className='error'><h1>404 NOT FOUND</h1></div> :
            (errorAPICallsExcedded) ?
              <div className='error'><h1>403 API CALLS EXCEEDED</h1></div> :
              <UserDetailsComponent data={data} />
          )
      }
    </div>
  )
}

export default UserAPICall