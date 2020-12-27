import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditNote from "./components/contacts/EditNote";
import Header from "./components/layout/Header";
import NotFound from "./components/pages/NotFound";

const Routes = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/notes/add" component={AddContact} />
            <Route exact path="/notes/edit/:id" component={EditNote} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    </Router >
  );
};

export default Routes;
