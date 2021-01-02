import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Header, List, Placeholder, Container, Label} from "semantic-ui-react";
import {Wrapper} from './styled'
import { Link } from "react-router-dom";

import Comments from '../../components/Comments'
import Loading from '../../components/Loading';
import {formatDate} from '../../util'
// import isEmpty from 'lodash/isEmpty';
import {useParams} from 'react-router-dom';
import {listStoryDetails} from '../../actions/storyActions'

const Story = () => {
  const {id}=useParams();
  const dispatch= useDispatch();
  const {loading,error,story,comments}=useSelector(state=>state.storyDetails)

  const {title,author,created_at,num_comments, points}=story;
  const onComments=()=>{}
  
  useEffect(()=>{
    dispatch(listStoryDetails(id))
  },[])
  if (loading) return <Loading/>
  if(error) return (<>Error !!!</>)
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
