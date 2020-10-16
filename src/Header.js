import React from 'react';
import "./Header.css";
import AddIcon from "@material-ui/icons/Add"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import FacebookIcon from "@material-ui/icons/Facebook"
import FlagIcon from "@material-ui/icons/Flag"
import ForumIcon from "@material-ui/icons/Forum"
import HomeIcon from "@material-ui/icons/Home"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import SearchIcon from "@material-ui/icons/Search"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"

import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider"

function Header() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <FacebookIcon />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
      </div>

      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>
    </div>
  )
}

export default Header
