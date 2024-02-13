import "./home.css"
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
import React from "react"

const Home = () => {
    return (
      <div>
        <div className="homeContainer">
          <h1 className="homeTitle">Happy Valentines Day Loggan!</h1>
          <div className ="container">
          </div>

          </div>
          <h1 className="homeTitle">Pictures of Us!!!! </h1>

          <div className="imageContainer">
          <div className ="container1">
          </div>
          <div className ="container2">
          </div>
          <div className ="container3">
          </div>
          </div>
          <h1 className="homeTitle">Things I Love About You!</h1>
          <h2 className="card">
            1. You are very handsome. You have a pretty face hehe<br />
            2. You are a big sweetie. I appreciate you always driving to see me <br />
            3. You are the best boyfriend! I love talking to you each and every day<br />
          </h2>
      </div>
    );
  };
  
  export default Home;