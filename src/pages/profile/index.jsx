import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts";

import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/4218704/pexels-photo-4218704.jpeg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://twitter.com/login?lang=pt">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://br.linkedin.com/">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Vulquimar Silva</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>BR</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>vulks</span>
              </div>
            </div>
            <button>Seguir</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
