import React from 'react'
import '../Styles/TopicStyle.css';

const TopicComponent = (props) => {
  return (
    <div className='topic'>{props.topic}</div>
  )
}

export default TopicComponent