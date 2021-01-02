import React from "react";
import { Pagination } from "semantic-ui-react";
import {useHistory} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import { Wrapper } from "./styled";

const Paginate = ({totalPages, pageNumber,query}) => {
  const history= useHistory();
  const handleChange=(_,data)=>{
    if(query){history.push(`/search/${query}/page/${data.activePage}`)}
    else{history.push(`/page/${data.activePage}`) }
  }
  return (
    <Wrapper>
      <Pagination
        activePage={pageNumber}
        totalPages={totalPages}
        onPageChange={handleChange}
      />
    </Wrapper>
  );
};

export default Paginate;
