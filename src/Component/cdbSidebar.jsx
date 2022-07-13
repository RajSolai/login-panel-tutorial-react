import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const SideBar = () => {
  return (
    <CDBSidebar className="side-bar-full">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Contrast
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large">
            <Link to={"/"}>Home</Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">
            <Link to={"/contact"}>Contact</Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Metrics
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};
