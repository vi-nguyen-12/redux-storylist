import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStories } from "../actions/storyActions";
import { Segment, Header, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import StoryItem from "./StoryItem";

const StoryList = () => {
  const { loading, stories, pageNumber } = useSelector(state => state.story);
  const storiesPerPage = 5;
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchStories(storiesPerPage)), [pageNumber]);

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
    <Grid columns={3} textAlign="center">
      {currentStories.map(story => (
        <Grid.Column key={story.id}>
          <StoryItem story={story} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default StoryList;
