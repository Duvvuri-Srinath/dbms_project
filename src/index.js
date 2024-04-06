<<<<<<< HEAD
/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
=======
>>>>>>> e55202fce0cc405833f535472287fcef1f59d73e
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

<<<<<<< HEAD
import AdminLayout from "layouts/Admin.js";

=======
import StudentLayout from "layouts/Student.js";
import CompanyLayout from "layouts/Company.js";
import AdminLayout from "layouts/Admin.js";


>>>>>>> e55202fce0cc405833f535472287fcef1f59d73e
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
<<<<<<< HEAD
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
=======
      <Route path="/s" render={(props) => <StudentLayout {...props} />} />
      <Route path="/c" render={(props) => <CompanyLayout {...props} />} />
      <Route path="/a" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/s/dashboard" />
>>>>>>> e55202fce0cc405833f535472287fcef1f59d73e
    </Switch>
  </BrowserRouter>
);
