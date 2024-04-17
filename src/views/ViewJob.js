import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col
  } from "react-bootstrap";
import TableList from "./TableList";

function StudentsList() {
 
  const location = useLocation();
  const data = location.state;
  console.log(data.JID);
  const [formData, setFormData] = useState({
    INTERVIEW_DATA: "",
    INTERVIEW_TIME: ""
  });

  
const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:3000/c/applicants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({JID:data.JID}),
        });
  
        if (!response.ok) {
          throw new Error("Failed to update profile");
        }
  
        const jsonData = await response.json();
        console.log(jsonData);
        history.push({
            pathname: '/c/studentslist',
            state: {fields: jsonData.fields, data: jsonData.rows},
          });
      } catch (error) {
        console.error("Error updating profile:", error);
      }
}
  // Function to fetch data from the API
  const fetchData = async () => {
    
    try {
      const response = await fetch("http://localhost:3000/c/time", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
            
      // Parse the JSON response
      const data = await response.json();

      // Update the form data state with the fetched data
      setFormData({
        INTERVIEW_DATA: data.INTERVIEW_DATA||"",
        INTERVIEW_TIME: data.INTERVIEW_TIME||"",
      });

      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission and send POST request to API
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/s/updatedetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      // Optionally, you can fetch data again after updating
      fetchData();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">My Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Interview date</label>
                        <Form.Control
                          name="CGPA"
                          value={formData.INTERVIEW_DATA}
                          placeholder="CGPA"
                          type="date"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Interview time</label>
                        <Form.Control
                          name="EMAIL"
                          value={formData.INTERVIEW_TIME}
                          placeholder="Email"
                          type="time"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update details
                  </Button>
                  <div className="clearfix"></div>
                </Form>
                <br></br>
                <div>
                <td>
                <form onSubmit={handleSubmit}>
                    <input
                    type="hidden"
                    name="user_id"
                    value={data.JID}
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
                <form onSubmit={handleSubmit}>
                    <input
                    type="hidden"
                    name="user_id"
                    value={data.JID}
                    />
                    <input
                    type="submit"
                    value="Interview Students"
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
                <form onSubmit={handleSubmit}>
                    <input
                    type="hidden"
                    name="user_id"
                    value={data.JID}
                    />
                    <input
                    type="submit"
                    value="Offer Students"
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
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}


export default StudentsList;