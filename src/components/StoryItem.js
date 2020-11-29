import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
const StoryItem = ({ story }) => {
  return (
    <Container>
      <Header as="h4">
        <Link to={`/detail/${story.id}`}>{story.title}</Link>
      </Header>
      <Icon name="comment" />
      <span>
        Author: <Link to={`/author/${story.author}`}>{story.author}</Link>
      </span>
    </Container>
  );
};

export default StoryItem;
