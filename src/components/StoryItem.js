import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const StoryItem = ({ story }) => {
  return (
    <Container>
      <Header as="h4">{story.title}</Header>
      <Icon name="comment" link />
      <span>
        Author: <a href="##">{story.author}</a>
      </span>
    </Container>
  );
};

export default StoryItem;
