import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const EmptyDashboard = () => {
  const history = useHistory();
  return (
    <Segment placeholder style={{ marginTop: 20 }}>
      <Header icon>
        <Icon name="sticky note outline" />
        <br />
        No Notes are present!
      </Header>
      <Button primary onClick={() => history.push("/add")}>
        Add Notes
      </Button>
    </Segment>
  );
};

export default EmptyDashboard;
