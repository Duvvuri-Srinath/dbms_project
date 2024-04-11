import React, { useState, useEffect } from "react";
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
  const [status, setStatus] = useState("invalid");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const mainPanel = React.useRef(null);

  const needRoutes = routes.filter((item) => {
    return item.layout === "/s";
  });

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

  useEffect(() => {
    const is_valid = async () => {
      try {
        const response = await fetch("http://localhost:3000/s", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setStatus(jsonData.status);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    is_valid();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (status === "valid") {
    return (
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
    );
  } else {
    return <h1>Unauthorized</h1>;
  }
}

export default Student;


// import React, { Component, useState, useRef } from "react";
// import { useLocation, Route, Switch } from "react-router-dom";

// import StudentNavbar from "components/Navbars/StudentNavbar";
// import Sidebar from "components/Sidebar/Sidebar";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
// import TableList from "views/TableList";
// import routes from "routes.js";
// import sidebarImage from "assets/img/sidebar-3.jpg";

// async function Student() {
//   const [status, setStatus] = React.useState("valid");
//   const [role, setRole] = React.useState("student");
//   const [error, setError] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);

//   const is_valid = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/s", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const jsonData = await response.json();
//       setStatus(jsonData.status);
//       setRole(jsonData.role);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };

//   React.useEffect(() => {
//     is_valid(); // Call the async function inside useEffect
//   }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (status == "valid") {
//     return (
//       <div className="wrapper">
//       <Sidebar
//         routes={needRoutes}
//       />
//       <div className="main-panel" ref={mainPanel}>
//         <StudentNavbar />
//         {/* {<TableList/>} */}
//         <div className="content">
//           <Switch>{getRoutes(routes)}</Switch>
//         </div>
//       </div>
//     </div>
//     )
//   }
//   else {
//     return (
//       <div>
//       <h1>Unauthorized</h1>
//     </div>
//     )
//   }
// }

// export default Student;

// async function Student() {

//   const [hasImage, setHasImage] = React.useState(true);
//   const [status, setStatus] = React.useState("valid");
//   const [role, setRole] = React.useState("student");
//   const [error, setError] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const location = useLocation();
//   const mainPanel = React.useRef(null);
//   const is_valid = async () => {
//     try {
//       console.log("token : ", localStorage.getItem("token"));
//       const response = await fetch("http://localhost:3000/s", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//         .then((response) => {
//           console.log(response, "here");
//           return response;
//         })
//         .catch((err) => console.log("Fetch Error: ", err));
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const jsonData = await response.json();
//       console.log("jsondatda:", jsonData);
//       setStatus(jsonData.status); // Accessing the 'rows' array in the response
//       setRole(jsonData.role); // Accessing the 'columns' array in
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };
//   const getRoutes = (routes) => {
//     return routes.map((prop, key) => {
//       if (prop.layout === "/s") {
//         return (
//           <Route
//             path={prop.layout + prop.path}
//             render={(props) => <prop.component {...props} />}
//             key={key}
//           />
//         );
//       } else {
//         return null;
//       }
//     });
//   };
//   const needRoutes = routes.filter((item) => {
//     return item.layout === "/s";
//   });
//   React.useEffect(() => {
//     // document.documentElement.scrollTop = 0;
//     // document.scrollingElement.scrollTop = 0;
//     // mainPanel.current.scrollTop = 0;
//     if (
//       window.innerWidth < 993 &&
//       document.documentElement.className.indexOf("nav-open") !== -1
//     ) {
//       document.documentElement.classList.toggle("nav-open");
//       var element = document.getElementById("bodyClick");
//       element.parentNode.removeChild(element);
//     }
//   }, [location]);
//   await is_valid();
//   return (
//     <>
//       {(status === "valid") ? (
//         <div className="wrapper">
//           <Sidebar
//             routes={needRoutes}
//           />
//           <div className="main-panel" ref={mainPanel}>
//             <StudentNavbar />
//             {/* {<TableList/>} */}
//             <div className="content">
//               <Switch>{getRoutes(routes)}</Switch>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h1>Unauthorized</h1>
//         </div>
//       )}
//     </>
//     <div>
//            <h1>Unauthorized</h1>
//     </div>
//   );
// }
