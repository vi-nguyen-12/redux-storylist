import React, { useState, useEffect } from "react";
import { Segment, Icon, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import storiesApi from '../../axios/storiesApi';
import axios from 'axios'
// import isEmpty from 'lodash/isEmpty';

import { format } from "date-fns";
import {useParams} from 'react-router-dom';

const Story = () => {
  const {id}=useParams(); 
  console.log(id)
  const fetchStory=async()=>{
    try{
      const res1=await storiesApi.get({tags:`story_${id}`})
  
      const res2=await storiesApi.get({tags:`comment,story_${id}`})
      console.log(res1);
      console.log(res2)
    }
    catch(err){
      console.log(err)
    }
  }
  fetchStory()

  // const {title,author,created_at,num_comments,comment_text}=story
  // const formatDate=(date)=>{
  //   console.log(date)
  // }
  // const onComments=()=>{}
  return (
    <Segment>
      {/* <Header>{title}</Header>
      <Container>
        <Icon name="calendar alternate outline" />
        <Link href="#"> */}
          {/* {created_at && formatDate(created_at)} */}
        {/* </Link>
        <Icon name="user" />
        <Link to={`/author/${author}`}>{author}</Link>{" "}
        <Icon name="comments" />
        <Link href="#" onClick={onComments}>
          Comments
        </Link>
      </Container>
      <Container></Container>  */}
    </Segment>
  );
};

export default Story;
