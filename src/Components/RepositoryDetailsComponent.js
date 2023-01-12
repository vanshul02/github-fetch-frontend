import React from 'react';
import TopicComponent from './TopicComponent';
import '../Styles/RepositoryDetailsStyle.css';

const RepositoryDetailsComponent = (props) => {
  return (
    <>
      <div className='repo-details'onClick= { () => {window.open(props.data.html_url,'_blank')}} >
        <div><h3>{props.data.name}</h3></div>
        <div>{props.data.description}</div>
        <div className='repo-topics'>
          {props.data.topics?.map(ele => {
            return <TopicComponent topic={ele} />
          })}</div>
      </div>
    </>
  )
}

export default RepositoryDetailsComponent