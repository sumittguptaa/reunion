import React,{useContext} from 'react'
import { StateContext } from '../../StateProvider';
import './SearchComponent.css'
import {list} from '../data/Data.js'
import Hero from '../home/hero/Hero';
function SearchComponent() {
   const [{ searchFilter}, dispatch] = useContext(StateContext);
     function numberWithCommas(x) {
       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }
     const handleClick = (
       id,
       cover,
       category,
       location,
       name,
       price,
       type,
       beds,
       bathrooms,
       area
     ) => {
       dispatch({
         type: "ADD_TO_BASKET",
         item: {
           id: id,
           cover: cover,
           category: category,
           location: location,
           name: name,
           price: price,
           type: type,
           beds: beds,
           bathrooms: bathrooms,
           area: area,
         },
       });
     };
   let result = list.filter((l) => {
    
     if (
       searchFilter.price != null &&
       searchFilter.location != null &&
       searchFilter.type != null
       && searchFilter.date!=null
     ) {
        let x1 = parseInt(searchFilter.price.split("-")[0]);
        let x2 =  parseInt(searchFilter.price.split("-")[1]);
       return (
         l.location.toLowerCase() === searchFilter.location.toLowerCase() &&
         l.type === searchFilter.type &&
         l.date === searchFilter.date && (x1<=parseInt(l.price) && parseInt(l.price)<=x2)
       );
     }
    //  return []; 
   }) ;
  return (
    <div>
      <Hero />
      {result.length === 0 ? (
        <div className="container">
          <h4 style={{ marginTop: "30px" }}> No result found</h4>
        </div>
      ) : (
        <div className="recent padding">
          <div className="container">
            <div style={{ marginTop: "30px" }}>
              Search Results {result.length}
            </div>
            <div className="content grid3 mtop">
              {result.map((val, index) => {
                const {
                  id,
                  cover,
                  category,
                  location,
                  name,
                  price,
                  type,
                  beds,
                  bathrooms,
                  area,
                } = val;
                return (
                  <div className="box shadow" key={index}>
                    <div className="img">
                      <img src={cover} alt="" />
                    </div>
                    <div style={{ display: "inline-block" }}>
                      <button className="btn2">
                        ₹{numberWithCommas(price)}
                      </button>{" "}
                      <label htmlFor="">/month</label>
                    </div>
                    <span style={{ padding: "0 0 0 65px" }}>{type}</span>
                    <div className="text">
                      <div className="category flex">
                        <span
                          style={{
                            background:
                              category === "For Sale"
                                ? "#25b5791a"
                                : "#ff98001a",
                            color:
                              category === "For Sale" ? "#25b579" : "#ff9800",
                          }}
                        >
                          {category}
                        </span>
                        <i
                          onClick={() =>
                            handleClick(
                              id,
                              cover,
                              category,
                              location,
                              name,
                              price,
                              type,
                              beds,
                              bathrooms,
                              area
                            )
                          }
                          className="heart fa fa-heart"
                        ></i>
                      </div>
                      <h4>{name}</h4>
                      <p>
                        <i className="fa fa-location-dot"></i> {location}
                      </p>
                    </div>
                    <div className="button flex">
                      <div>
                        <i
                          className="fa-solid fa-bed"
                          style={{ padding: "0 3px" }}
                        ></i>
                        <span style={{ padding: "0 3px" }}>{beds} Beds</span>
                        <i
                          className="fa-sharp fa-solid fa-bath"
                          style={{ padding: "0 3px" }}
                        ></i>
                        <span style={{ padding: "0 3px" }}>
                          {bathrooms} Bathrooms
                        </span>
                        <i
                          className="fa-solid fa-chart-area"
                          style={{ padding: "0 10px" }}
                        ></i>
                        <span style={{ padding: "0 2px" }}>{area}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchComponent