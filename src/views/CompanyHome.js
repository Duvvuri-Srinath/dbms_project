import React, { useEffect, useState } from "react";
import {Route} from 'react-router-dom'
import PropTypes from "prop-types";
import {
  // react-bootstrap components
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentsList from "./StudentsList";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CompanyHome() {

  const history = useHistory();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fields, setFields] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/c/jobs", {
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
      setData(jsonData.rows);
      setFields(jsonData.fields);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleFormSubmit = async (event) => {

    event.preventDefault(); // Prevent default form submission behavior
    console.log(event.target[0].value);
    try {
      const response = await fetch("http://localhost:3000/c/applicants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({JID:event.target[0].value}),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const jsonData = await response.json();
      history.push({
        pathname: '/c/studentslist',
        state: {data:jsonData.rows,fields:jsonData.fields},
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }

    // const data = {
    //   fields: ["AID", "ANAME", "AROLE", "PASS"],
    //   rows: [
    //     {AID: 1, ANAME: 'John Doe', AROLE: 'Admin', Pass: 'adminpass123'},
    //     {AID: 2, ANAME: 'Jane Smith', AROLE: 'Super Admin', Pass: 'superadminpass456'},
    //     {AID: 3, ANAME: 'Alice Johnson', AROLE: 'Admin', Pass: 'adminpass789'},
    //   ],
    // }

    // Navigate to the new route with the props as state

  };

  
  return (
    <>

      <Container fluid>
        {console.log("home lo unna ra bai")}
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Profile</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      {fields.map((value, index) => (
                        <th className="border-0" key={index}>
                          {value}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item) => (
                        <tr key={item.id}>
                          {Object.values(item).map((value, index) => (
                            <td key={index}>{value}</td>
                          ))}
                          {item.JSTATUS == "approved" && (
                              <>
                              <td>
                              <form onSubmit={handleFormSubmit}>
                                <input
                                  type="hidden"
                                  name="user_id"
                                  value={item.JID}
                                />
                                <input
                                  type="submit"
                                  value="Applied students"
                                  style={{
                                    width: "100%",
                                    padding: "8px 12px",
                                    fontSize: "16px",
                                    backgroundColor: "#007bff",
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                  }}
                                />
                              </form>
                            </td>
                            <td>
                            <form onSubmit={handleFormSubmit}>
                              <input
                                type="hidden"
                                name="user_id"
                                value={item.JID}
                              />
                              <input
                                type="submit"
                                value="Interviewed students"
                                style={{
                                  width: "100%",
                                  padding: "8px 12px",
                                  fontSize: "16px",
                                  backgroundColor: "#007bff",
                                  color: "#ffffff",
                                  border: "none",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                }}
                              />
                            </form>
                          </td>
                          <td>
                          <form onSubmit={handleFormSubmit}>
                            <input
                              type="hidden"
                              name="user_id"
                              value={item.JID}
                            />
                            <input
                              type="submit"
                              value="offered students"
                              style={{
                                width: "100%",
                                padding: "8px 12px",
                                fontSize: "16px",
                                backgroundColor: "#007bff",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                            />
                          </form>
                        </td>
                              </>
                          )}
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
  
}
