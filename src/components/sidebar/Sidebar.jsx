import React from "react";
import "./sidebar.css";
import TimelineIcon from "@mui/icons-material/Timeline";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  AttachMoney,
  BarChartOutlined,
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  WorkOutline,
} from "@mui/icons-material";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="siderbarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
           <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              {/* Analytics */}Coming..
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              {/* Sales */}Coming..
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu </h3>
          <ul className="sidebarList">
            <Link to="/users" className="link" >
            <li className="sidebarListItem active">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            </Link>
          
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              {/* Transactions */}Coming..
            </li>
            
            <Link to="/products"  className="link" >
            <li className="sidebarListItem active">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            </Link>

            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon" />
              {/* Reports */}Coming..
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              {/* Mail */}Coming..
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              {/* Feedback */}Coming..
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              {/* Messages */}Coming..
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              {/* Manage */} Coming..
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              {/* Analytics */} Coming..
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              {/* Reports */} Coming..
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
