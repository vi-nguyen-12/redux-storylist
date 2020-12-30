import React, { useState, useEffect } from "react";
import { Header, List, Placeholder, Container, Label} from "semantic-ui-react";
import {Wrapper} from './styled'
import { Link } from "react-router-dom";
import storiesApi from '../../axios/storiesApi';
import Comments from '../../components/Comments'
import {formatDate} from '../../util'
// import isEmpty from 'lodash/isEmpty';
import {useParams} from 'react-router-dom';

const Story = () => {
  const {id}=useParams(); 
  const [story, setStory]=useState({});
  const [comments,setComments]=useState([])
  useEffect(() => {
    const fetchStory=async()=>{
      try{
        const res1=await storiesApi.get({tags:`story_${id}`})
        const res2=await storiesApi.get({tags:`comment,story_${id}`})
        setStory(res1.hits[0])
        setComments(res2.hits)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchStory();
  },[])
 
  const {title,author,created_at,num_comments, points,url}=story;
  console.log(created_at);

  const onComments=()=>{}
  return (
    <Wrapper>
      <Header>{title}</Header>
      <List horizontal divided>
        <List.Item>
          by <Link to={`/author/${author}`}>{author}</Link>
        </List.Item>
        <List.Item>
          <Link href="#" onClick={onComments}>
            {num_comments} Comments
          </Link>
        </List.Item>
      </List>
      <Container>
        -{formatDate(created_at)}-
      </Container>
      {/* <List>
       
        <List.Item>Link: <a href={`${url}`}>url</a></List.Item>
      </List> */}
      <Placeholder>
        <Label ribbon>
        {points} points
        </Label>
        <Placeholder.Paragraph >
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
      <Comments comments={comments}/>
    </Wrapper>
  );
};

export default Story;
