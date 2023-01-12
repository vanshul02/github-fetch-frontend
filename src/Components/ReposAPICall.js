import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import '../Styles/ReposAPIStyle.css';
import RepositoryDetailsComponent from './RepositoryDetailsComponent';


const ReposAPICall = () => {
  const [data, setData] = useState([])
  const {user_id} = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(`https://githubfetch.onrender.com/user/${user_id}/repos`)
      setData(res.data)
    } catch (error) {
      console.log(error, "err")
    }
  }

  useEffect(() => {
    getData()
  }, [user_id])


  return (
    <>
      <div className='repo-box-conatiner'>
        {(data.length >= 1) && data?.map(ele => {
          return <RepositoryDetailsComponent data={ele} key={ele.id} />
        })}
      </div>
    </>
  )
}

export default ReposAPICall