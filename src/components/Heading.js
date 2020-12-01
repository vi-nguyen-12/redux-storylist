import React from "react";
import Search from "components/Search";
import { Grid, Segment } from "semantic-ui-react";
import { StyledHeader, StyledMenu } from "../Styles/StyledHeading";

const Heading = () => {
  return (
    <Segment>
      <Grid verticalAlign="middle">
        <Grid.Column width={5}>
          <StyledHeader>Pompom</StyledHeader>
        </Grid.Column>
        <Grid.Column width={10}>
          <StyledMenu secondary>
            <StyledMenu.Item name="Home" />
            <StyledMenu.Item name="About Us" />
            <StyledMenu.Item name="Contact" />
            <StyledMenu.Menu position="right">
              <StyledMenu.Item>
                <Search />
              </StyledMenu.Item>
              <StyledMenu.Item name="login" />
            </StyledMenu.Menu>
          </StyledMenu>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Heading;
