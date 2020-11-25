import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../actions/storyActions";
import { Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Pages = () => {
  const { numberOfPages } = useSelector(state => state.story);
  const dispatch = useDispatch();

  const handleChange = (e, data) => {
    console.log(data.activePage);
    dispatch(changePage(data.activePage));
  };

  return (
    <Pagination
      defaultActivePage={1}
      totalPages={numberOfPages}
      onPageChange={handleChange}
    />
  );
};

export default Pages;
