import React from "react";
import Search from "../Search";
import { Menu, Header } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import { Wrapper} from "./styled";
import { useHistory } from "react-router-dom";

const Heading = () => {
  const history= useHistory();
  const handleClick=(params)=>()=>{
    history.push(`/${params}`)
  }
  return (
    <Wrapper>
      <Header>Library</Header>
      <Menu secondary>
        <Menu.Item name="Home" onClick={handleClick('')}>
        </Menu.Item>
        <Menu.Item name="About Us" onClick={handleClick('about')}/>
        <Menu.Item name="Contact" onClick={handleClick('contact')}/>
        <Menu.Menu position="right">
          <Menu.Item>
            <Search />
          </Menu.Item>
          <Menu.Item name="login" onClick={handleClick('login')}/>
        </Menu.Menu>
      </Menu>
    </Wrapper>
  );
};

export default Heading;
