import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

async function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const [status, setStatus] = React.useState("valid");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = React.useState("student");
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const is_valid = async () => {
    try {
      console.log("token : ", localStorage.getItem("token"));
      const response = await fetch("http://localhost:3000/a", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          console.log(response, "here");
          return response;
        })
        .catch((err) => console.log("Fetch Error: ", err));
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log("jsondatda:", jsonData);
      setStatus(jsonData.status); // Accessing the 'rows' array in the response
      setRole(jsonData.role); // Accessing the 'columns' array in
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  await is_valid();
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/a") {
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
    return item.layout === "/a";
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
      {status === "valid" ? (
        <div className="wrapper">
          <Sidebar
            color={color}
            image={hasImage ? image : ""}
            routes={needRoutes}
          />
          <div className="main-panel" ref={mainPanel}>
            <StudentNavbar />
            {/* {<TableList/>} */}
            <div className="content">
              <Switch>{getRoutes(routes)}</Switch>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Unauthorized</h1>
        </div>
      )}
    </>
  );
}

export default Admin;
