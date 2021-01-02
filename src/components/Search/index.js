import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import { Input, Form } from "semantic-ui-react";

const Search = () => {
  const [query, setQuery] = useState("");
  const history=useHistory();

  const handleChange = (_, data) => {
    setQuery(data.value);
  };
  const handleSubmit = () => {
    if(query){history.push(`/search/${query}`)}
    else {history.push('/')}
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={query}
          placeholder="Search..."
          icon="search"
          onChange={handleChange}
        />
      </Form>
    </>
  );
};

export default Search;
