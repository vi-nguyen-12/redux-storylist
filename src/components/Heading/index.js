import React from "react";
import Search from "../Search";
import { Menu, Header } from "semantic-ui-react";
import { Wrapper} from "./styled";

const Heading = () => {
  return (
    <Wrapper>
      <Header>Library</Header>
      <Menu secondary>
        <Menu.Item name="Home" />
        <Menu.Item name="About Us" />
        <Menu.Item name="Contact" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Search />
          </Menu.Item>
          <Menu.Item name="login" />
        </Menu.Menu>
      </Menu>
    </Wrapper>
  );
};

export default Heading;
