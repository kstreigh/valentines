import "./home.css"
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'


const Home = () => {
    return (
      <div>
        <div className="homeContainer">
          <h1 className="homeTitle">Happy Valentine's Day Loggan!</h1>
          <div class ="container">
          </div>

          </div>
          <h1 className="homeTitle">Pictures of Us!!!! </h1>

          <div className="imageContainer">
          <img src={img1} alt="img1" className="resized-image"/>
          <img src={img2}alt="img2"  className="resized-image" />
          <img src={img3} alt="img3" className="resized-image" />
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