import React from 'react'
import '../Styles/UserDetailsStyle.css';
const UserDetailsComponent = (props) => {
  return (
    <>
      <div className='user'>
        <div className='user-image'>
          <img className='avatar' src={props.data.avatar_url} alt='User' />
        </div>
        <div className='user-details'>
          <div><h2>{props.data.name}</h2></div>
          <div>{props.data.bio}<br/></div>
          {props.data.location && <div><i className="uil uil-location-point"></i>{props.data.location}<br/></div>}
          {props.data.twitter_username && <div>Twitter: https://www.twitter.com/{props.data.twitter_username}</div>}
        </div>
      </div>
      <div className='user-link'>
      <i className="uil uil-link-h"></i> &nbsp; <a href={props.data.html_url}>{props.data.html_url}</a>
      </div>
    </>
  )
}

export default UserDetailsComponent