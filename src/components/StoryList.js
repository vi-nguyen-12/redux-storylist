import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch } from "../actions/storyActions";
import { Segment, Header, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import StoryItem from "./StoryItem";

const StoryList = () => {
  const { loading, stories, pageNumber } = useSelector(state => state.story);
  const storiesPerPage = 5;
  // console.log(stories); // sai cho nay ne, tai sao k co gis
  // console.log();
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetch(storiesPerPage)), []);

  const lastIndexStory = pageNumber * storiesPerPage;
  const firstIndexStory = lastIndexStory - storiesPerPage;
  const currentStories = stories.slice(firstIndexStory, lastIndexStory);
  if (loading) {
    return (
      <Segment>
        <Header as="h2">Loading...</Header>
      </Segment>
    );
  }
  return (
    <Segment>
      <Header as="h2">List of Stories</Header>
      <List>
        {currentStories.map(story => (
          <StoryItem story={story} key={story.id} />
        ))}
      </List>
    </Segment>
  );
};

export default StoryList;
