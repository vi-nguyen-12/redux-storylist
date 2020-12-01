import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "actions/storyActions";
import { Input, Form } from "semantic-ui-react";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (_, data) => {
    setInput(data.value);
  };
  const handleSubmit = () => {
    dispatch(getSearch(input));
    setInput("");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={input}
          placeholder="Search..."
          icon="search"
          onChange={handleChange}
        />
      </Form>
    </>
  );
};

export default Search;
