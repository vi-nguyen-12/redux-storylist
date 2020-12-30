import React, { useState, useEffect } from "react";
import axios from "axios";
import { Segment,Header, Container, List , Placeholder } from "semantic-ui-react";
import {  Link, useParams} from "react-router-dom";
import { Wrapper } from "./styled";
import { formatDate } from "../../util";
import Loading from '../../components/Loading'

const Author = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {name} =useParams();

  useEffect(() => {
    const fetchAuthor=async()=>{
      try {
          const res = await axios.get(
            `http://hn.algolia.com/api/v1/search?tags=story,author_${name}`
          );
          setList(res.data.hits);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    fetchAuthor();
  }, []);

  if (loading) {
    return <Loading/>
  }
  return (
    <Wrapper>
      <Header>{name}</Header>
      <Container>-Author-</Container>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>

      {list.map(i => {
        const {title, created_at, num_comments, objectID, points}=i
        return(
          <Segment>
            <Link to={`/story/${objectID}`}>
               <Header>{title}</Header>
            </Link>
            <List horizontal divided>
              <List.Item>
                by <Link to={`/author/${name}`}>{name}</Link>
              </List.Item>
              <List.Item>
                <Link to={`/author/${name}`}>
                  {num_comments} Comments
                </Link>
              </List.Item>
            </List>
            <Container>
              -{formatDate(created_at)}-
            </Container>
          </Segment>
        )
      })}
    </Wrapper>
  );
};

export default Author;
