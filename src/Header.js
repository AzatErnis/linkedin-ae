import React from "react";
import HeaderOption from "./HeaderOption";

import "./Header.css";
import {
  BusinessCenter,
  Search,
  Home,
  SupervisorAccount,
  Chat,
  Notifications,
} from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedin-logo"
        />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://scontent.ffru7-1.fna.fbcdn.net/v/t1.0-9/133102860_1512938145577361_3173798068978983859_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=tEubXoFZAqEAX9vqklD&_nc_ht=scontent.ffru7-1.fna&oh=25e981959f1ea9b80ad5c88cd408af66&oe=60142FA7"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
