import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Favourites from "../favourites/Favourites"
import SearchComponent from "../search/SearchComponent"
import Rent from "../rent/Rent"
import Resources from "../resources/Resources"
import ManageProperty from "../manage/ManageProperty"
import Sell from "../sell/Sell"
import Buy from "../buy/Buy"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rent" component={Rent} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/manage-property" component={ManageProperty} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/search" component={SearchComponent} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Pages
