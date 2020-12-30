import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch } from "../../actions/storyActions";
import { Segment, Header, Grid } from "semantic-ui-react";
import StoryItem from "../../components/StoryItem/index";
import Paginate from "../../components/Paginate";
const Home = () => {
  const { loading, stories} = useSelector(state => state.story);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch());}
    , []);

  if (loading) {
    return (
      <Segment>
        <Header as="h2">Loading...</Header>
      </Segment>
    );
  }
  return (
    <>
      <Grid columns={3} textAlign="center">
        {stories.map(story => (
          <Grid.Column key={story.id}>
            <StoryItem story={story} />
          </Grid.Column>
        ))}
      </Grid>
      <Paginate />
    </>
  );
};

export default Home;
