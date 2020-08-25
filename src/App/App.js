import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

// LAYOUT
import Header from "../layout/header/Header.layout";
// PAGES
import HomePage from "../pages/home/Home.page";
import AboutPage from "../pages/about/About.page";
import ContactsPage from "../pages/contacts/Contacts.page";

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <div className="container">
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contacts" component={ContactsPage} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </main>
        </div>
    );
};

export default App;
