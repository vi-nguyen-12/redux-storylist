import React from "react";
import { Icon, Image, Container, Header } from "semantic-ui-react";
import {
  Wrapper,
} from "./styled";
import {Link} from "react-router-dom";

const StoryItem = ({ story }) => {
  return (
    <Wrapper>
      <Image src="https://picsum.photos/200/300" />
      <Header>
        <Link to={`/detail/${story.objectID}`}>
          {story.title}
        </Link>
      </Header>
      <Container>
        <div>
          by:{" "}
          <Link to={`/author/${story.author}`}>
            {story.author}
          </Link>
        </div>
        <Icon name="comments" />
      </Container>
    </Wrapper>
  );
};

export default StoryItem;
