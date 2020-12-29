import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../actions/storyActions";
import { Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Wrapper } from "./styled";

const PagedList = () => {
  const dispatch = useDispatch();
  const handleChange = (_, data) => {
    dispatch(changePage(data.activePage));
  }

  return (
    <Wrapper>
      <Pagination
        defaultActivePage={1}
        totalPages={50}
        onPageChange={handleChange}
      />
    </Wrapper>
  );
};

export default PagedList;
