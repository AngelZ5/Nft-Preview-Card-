import imageEquilibrium from "../assets/images/image-equilibrium.jpg";
import profilePic from "../assets/images/image-avatar.png";

function Card() {
  return (
    <div className="card">
      <img
        className="image-equilibrium"
        src={imageEquilibrium}
        alt="Equilibrium"
      />
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <ul>
        <li className="price">0.041 ETH</li>
        <li className="time">3 days left</li>
      </ul>
      <hr />
      <div className="profile">
        <img className="profile-picture" src={profilePic} alt="Profile" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
