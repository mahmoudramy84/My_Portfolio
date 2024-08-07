import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";

import "./navigation.scss";
import {
  faBlog,
  faCircleCheck,
  faCircleInfo,
  faClipboard,
  faComment,
  faEnvelope,
  faHouse,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const links = [
    { tooltip: "Home", id: "header", icon: faHouse },
    { tooltip: "About", id: "about", icon: faCircleInfo },
    { tooltip: "Skills", id: "skills", icon: faClipboard },
    { tooltip: "Projects", id: "projects", icon: faCircleCheck },
    { tooltip: "Blogs", id: "blogs", icon: faBlog },
    // { tooltip: "Testimonials", id: "testimonials", icon: faComment },
    { tooltip: "Services", id: "services", icon: faScrewdriverWrench },
    { tooltip: "Contact", id: "contact", icon: faEnvelope },
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navigation">
      {links.map((link, index) => (
        <OverlayTrigger
          key={index}
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => (
            <Tooltip className="tooltip" id={link.id} {...props}>
              {link.tooltip}
            </Tooltip>
          )}
        >
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.id);
            }}
            className="navigation-icon"
          >
            <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
          </Link>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Navigation;
