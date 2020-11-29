import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, stopLoading } from "../actions/storyActions";
import { Segment, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import storiesApi from "../axios/storiesApi";
import axios from "axios";
import Comments from "./Comments";
import { format } from "date-fns";

const StoryDetail = props => {
  const { loading } = useSelector(state => state.story);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    author: "",
    text: "",
    created_at: "",
    comments: false
  });
  useEffect(() => {
    try {
      dispatch(setLoading()); //k ăn
      const fetch = async () => {
        const res = await axios.get(
          `http://hn.algolia.com/api/v1/items/${props.match.params.id}`
        );
        const { title, author, text, created_at } = res.data;
        console.log(created_at);
        setState({ title, author, text, created_at });
      };
      fetch();
    } catch (err) {
    } finally {
      dispatch(stopLoading()); //k ăn
    }
  }, []);
  const onComments = () => {
    setState({ ...state, comments: true });
  };
  const formatDate = date => {
    return format(new Date(date), "MM/dd/yyyy");
  };

  if (loading) {
    return (
      <Segment>
        <Header as="h2">Loading...</Header>
      </Segment>
    );
  }
  return (
    <Segment>
      <Header as="h2">Title: {state.title}</Header>

      <p>
        Created: {state.created_at && formatDate(state.created_at)}
        <br />
        Author: <Link to={`/author/${state.author}`}>{state.author}</Link>{" "}
      </p>
      <p>Content: {state.text}</p>
      <Button onClick={onComments}>Comments</Button>
      {state.comments && <Comments id={props.match.params.id}></Comments>}
    </Segment>
  );
};

export default StoryDetail;
