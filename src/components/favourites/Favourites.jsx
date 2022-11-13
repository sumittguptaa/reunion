import React,{useContext} from 'react'
import { StateContext } from '../../StateProvider';
import './Favourites.css'

function Favourites() {
     const [{ basket }] = useContext(StateContext);
  return (
    <div className='recent padding' >
      <div className="container">
        <div className="content grid3 mtop">
          {basket.map((val, index) => {
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
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">/month</label>
                </div>
                <span style={{ padding: "0 0 0 65px" }}>{type}</span>
                <div className="text">
                  <div className="category flex">
                    <span
                      style={{
                        background:
                          category === "For Sale" ? "#25b5791a" : "#ff98001a",
                        color: category === "For Sale" ? "#25b579" : "#ff9800",
                      }}
                    >
                      {category}
                    </span>
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
  );
}

export default Favourites