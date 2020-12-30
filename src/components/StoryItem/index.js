import React from "react";
import { Image, Header, List, Container } from "semantic-ui-react";
import {
  Wrapper,
} from "./styled";
import {formatDate} from '../../util'
import {Link} from "react-router-dom";

const StoryItem = ({ story }) => {
  const {title, objectID, author,num_comments, created_at}=story
  return (
    <Wrapper>
      <Image src="https://picsum.photos/200/300" />
      <Header>
        <Link to={`/story/${objectID}`}>
        {title}  </Link> 
      </Header>
      <List horizontal divided>
        <List.Item>
          by <Link to={`/author/${author}`}>{author}</Link>
        </List.Item>
        <List.Item>
          <Link to={`/author/${author}`}>
            {num_comments} Comments
          </Link>
        </List.Item>
      </List>
      <Container>
        -{formatDate(created_at)}-
      </Container>
    </Wrapper>
  );
};

export default StoryItem;
