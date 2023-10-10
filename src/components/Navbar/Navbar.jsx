import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import ProfileImage from "../../assets/pexels-filipp-romanovski-18022350.jpg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_LeftSide">
        <div className="Navbar_Logo">Logo</div>
        <div className="Navbar_Search">
          <input type="Seach" placeholder="Search" />
        </div>
      </div>

      <div className="Navbar_RightSide">
        <div className="Navbar_Icons">
          <AiFillHome />
          <BsFillPeopleFill />
          <BsFillBellFill />
        </div>
        <div className="Navbar_ProfileBubble">
          <img src={ProfileImage} alt="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
