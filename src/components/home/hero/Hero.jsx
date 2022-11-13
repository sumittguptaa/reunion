import React, { useState ,useContext} from "react"
import {  useHistory } from "react-router-dom"
import { StateContext } from "../../../StateProvider"
import "./hero.css"

const Hero = () => {
  const history = useHistory();
  const[location,setLocation] = useState(null);
   const [ { } ,dispatch] = useContext(StateContext);
  const[date,setDate]= useState(null);
  const[price,setPrice]= useState(null);
  const[type,setType]= useState(null);
  const handleSearch =(e)=>{
    e.preventDefault();
    if(location==null || date==null || price==null || type==null){
      alert("Kindly fill all the details")
    }else{
 dispatch({
   type: "SEARCH",
   item: {
     location,
     date,
     price,
     type,
   },
 });
 history.push("/search");
    }
   
   
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Search properties to rent</h1>
          <form className="flex">
            <div className="box">
              <span>Location</span>
              <input
                type="text"
                required
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div>
            <div className="box">
              <span>When</span>
              <input
                type="date"
                required
                onChange={(e) => setDate(e.target.value)}
                placeholder="Property Type"
              />
            </div>
            <div className="box">
              <span>Price</span>

              <select
                id="price-range"
                onChange={(e) => setPrice(e.target.value)}
                required
                name="Price"
              >
                <option value="<0-1000">Below 1000 ₹</option>
                <option value="1000-3000">1000 ₹ - 3000 ₹</option>
                <option value="3000-5000">3000 ₹ - 5000 ₹</option>
                <option value="5000-10000">5000 ₹ - 10000 ₹</option>
                <option value="10000-20000">10000 ₹ - 20000 ₹ </option>
              </select>
            </div>
            <div className="box">
              <span>Property Type</span>

              <select
                id="property-type"
                required
                onChange={(e) => setType(e.target.value)}
                name="Property Type"
              >
                <option value="Flats">Flats</option>
                <option value="Homes & Villas">Homes & Villas</option>
                <option value="Rooms">Rooms</option>
                <option value="Offices">Offices</option>
                <option value="Apartment">Apartment</option>

                <option value="commercial">Commercial</option>
              </select>
            </div>

            <button onClick={handleSearch} className="btn1">
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Hero
