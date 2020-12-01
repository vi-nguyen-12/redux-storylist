import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../actions/storyActions";
import { Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "../Styles/StyledPage";

const Pages = () => {
  const { numberOfPages } = useSelector(state => state.story);
  const dispatch = useDispatch();

  const handleChange = (_, data) => {
    dispatch(changePage(data.activePage));
  };

  return (
    <Container>
      <Pagination
        defaultActivePage={1}
        totalPages={numberOfPages}
        onPageChange={handleChange}
      />
    </Container>
  );
};

export default Pages;
