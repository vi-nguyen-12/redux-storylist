import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom'
import { listStories } from "../../actions/storyActions";
import { Grid } from "semantic-ui-react";
import StoryItem from "../../components/StoryItem/index";
import Paginate from "../../components/Paginate";
import Loading from "../../components/Loading";


const Home = () => {
  const { loading, stories, totalPages,pageNumber} = useSelector(state => state.storyList);
  const dispatch = useDispatch();
  const {query, page}=useParams();

  useEffect(() => {
    dispatch(listStories(query, page));}
    , [page,query]);

  if (loading) {
    return (
      <Loading/>
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
      <Paginate totalPages={totalPages} pageNumber={pageNumber} query={query}/>
    </>
  );
};

export default Home;
