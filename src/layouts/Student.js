import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import StudentNavbar from "components/Navbars/StudentNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import TableList from "views/TableList";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function Student() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/s") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const needRoutes = routes.filter((item) => {
    return item.layout === "/s";
  })
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={needRoutes} />
        <div className="main-panel" ref={mainPanel}>
          <StudentNavbar />
          {/* {<TableList/>} */}
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          
        </div>
      </div>
     
    </>
  );
}

export default Student;