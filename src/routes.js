import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotesList from "./components/contacts/NotesList";
import AddNote from "./components/contacts/AddNote";
import EditNote from "./components/contacts/EditNote";
import Header from "./components/layout/Header";
import NotFound from "./components/pages/NotFound";

const Routes = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className="container">
          <h1 className="display-4 mb-2">
            <span className="text-danger">My</span> Notes
          </h1>
          <Switch>
            <Route exact path="/" component={NotesList} />
            <Route exact path="/add" component={AddNote} />
            <Route exact path="/edit/:id" component={EditNote} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default Routes;
