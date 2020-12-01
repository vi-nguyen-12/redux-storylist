import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Info, StyledLink } from "../Styles/StyledDetail";
import { Container } from "../Styles/StyledAuthor";
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
    <div>
      <h3>Author: {props.match.params.name}</h3>
      {list.map(x => (
        <Container>
          <Link to={`/detail/${x.objectID}`}> {x.title}</Link>
          <Info>
            <Icon name="calendar alternate outline" />
            <StyledLink>{formatDate(x.created_at)}</StyledLink>
          </Info>
        </Container>
      ))}
    </div>
  );
};

export default Author;
