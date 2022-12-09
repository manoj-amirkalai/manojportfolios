import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import "./Contacts.css";

const contacts = () => {
  return (
    <Element className="contacts" id="contact">
      <div className="contact">
        <h1>Contacts</h1>
      </div>
      <div className="contacts1">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmXxjFvMRjHJZKNptvFLJDQJWrDFSWfcKSHVmKDWvBvTHzhxcGlpnHHpMgFFZjLJCmrZg">
          <IconButton>
            <MailOutlineRoundedIcon htmlColor="rgba(240, 241, 176, 0.777)" />
          </IconButton>
          <span>manojamir2911@gmail.com</span>
        </a>
        <p>
          {" "}
          <IconButton>
            <CallTwoToneIcon htmlColor="rgba(240, 241, 176, 0.777)" />
          </IconButton>{" "}
          <span>+91-9597388699 , 8667791397</span>
        </p>

        <div className="icons">
          <a href="https://www.linkedin.com/in/manoj-amirthalingam-6a5394220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5wGv0J8%2FTHS%2FNg7QIfSlpQ%3D%3D">
            <IconButton className="iconbutton">
              {" "}
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/am__rare_one/">
            <IconButton>
              {" "}
              <InstagramIcon />{" "}
            </IconButton>
          </a>
          <a href="https://wa.me/qr/CWYH77IQQSYQK1">
            <IconButton>
              {" "}
              <WhatsAppIcon />{" "}
            </IconButton>
          </a>{" "}
          <a href="https://github.com/ManojAmirKalai">
            <IconButton>
              {" "}
              <GitHubIcon />{" "}
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default contacts;
