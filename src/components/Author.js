import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
        <>
          Title: <Link to={`/detail/${x.objectID}`}> {x.title}</Link>
          <p>Created: {formatDate(x.created_at)}</p>
        </>
      ))}
    </div>
  );
};

export default Author;

//cái chỗ search  h hết search đc r.
//làm thêm cái pagination cho stories (của 1 author) xổ ra; và cho bao nhiêu comments đc thể hiện.
//dùng styled-component: style cho đẹp nè.
