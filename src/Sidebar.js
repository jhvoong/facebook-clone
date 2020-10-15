import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"
import LocalHospitalization from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import {ExpandMoreOutlined} from "@material-ui/icons"
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="google.com"
        title="username"
      />
      <SidebarRow Icon={LocalHospitalization} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  )
}

export default Sidebar