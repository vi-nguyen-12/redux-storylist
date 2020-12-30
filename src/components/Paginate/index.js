import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetch } from "../../actions/storyActions";
import { Pagination } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Wrapper } from "./styled";

const Paginate = () => {
  const {totalPages}=useSelector(state=>state.story)
  const dispatch = useDispatch();
  const handleChange = (_, data) => {
    dispatch(fetch(data.activePage));
  }

  return (
    <Wrapper>
      <Pagination
        defaultActivePage={1}
        totalPages={totalPages}
        onPageChange={handleChange}
      />
    </Wrapper>
  );
};

export default Paginate;
