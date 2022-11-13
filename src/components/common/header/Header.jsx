import React, { useState,useContext } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link} from "react-router-dom"
import { StateContext } from "../../../StateProvider";
const Header = () => {
  const [navList, setNavList] = useState(false)
   const [{ basket }, ] = useContext(StateContext);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
       
            <h1>
              <Link to={"/"}>Estatery</Link>
            </h1>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>{basket.length}</span> <Link to={'/favourites'}>Favourites</Link>
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
