import React from "react";
import { Icon } from "semantic-ui-react";
import {
  Container,
  StyledLink,
  Image,
  Content,
  Header,
  Subheader
} from "../Styles/StyledItem";
const StoryItem = ({ story }) => {
  return (
    <Container>
      <Image src="https://picsum.photos/200/300" />
      <Content>
        <Header as="h5">
          <StyledLink primary to={`/detail/${story.id}`}>
            {story.title}
          </StyledLink>
        </Header>
        <Subheader>
          <div>
            by:{" "}
            <StyledLink to={`/author/${story.author}`}>
              {story.author}
            </StyledLink>
          </div>
          <Icon name="comments" />
        </Subheader>
      </Content>
    </Container>
  );
};

export default StoryItem;
