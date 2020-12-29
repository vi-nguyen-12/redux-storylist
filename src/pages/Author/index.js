import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Segment,Header, Container  } from "semantic-ui-react";
import {  Link} from "react-router-dom";
import { Wrapper } from "./styled";
import { format } from "date-fns";

const Author = props => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get(
          `http://hn.algolia.com/api/v1/search?tags=story,author_${props.match.params.name}`
        );
        console.log(res.data.hits);
        setList(res.data.hits);
      };
      fetch();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);

  const formatDate = date => {
    return format(new Date(date), "MM/dd/yyyy");
  };
  if (loading) {
    return <>Loading... </>;
  }
  return (
    <Wrapper>
      <Header>Author: {props.match.params.name}</Header>
      {list.map(x => (
        <Segment>
          <Link to={`/detail/${x.objectID}`}> {x.title}</Link>
          <Container>
            <Icon name="calendar alternate outline" />
            <Link>{formatDate(x.created_at)}</Link>
          </Container>
        </Segment>
      ))}
    </Wrapper>
  );
};

export default Author;
