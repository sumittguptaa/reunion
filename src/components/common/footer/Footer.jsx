import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              
              <h1>Estatery</h1>
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val,idx) => (
            <div className='box' key={idx}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items,index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 EStatery</span>
      </div>
    </>
  )
}

export default Footer
