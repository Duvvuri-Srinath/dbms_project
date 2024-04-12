import React from "react";
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

function TableList({ data, fields, heading, apply = false }) {
  // const data = [
  //   {
  //     SROLL: '2019001',
  //     SNAME: 'Alice',
  //     CGPA: 8.5,
  //     EMAIL: 'alice@example.com',
  //     GENDER: 'f',
  //     ANY_ARREARS: 'n',
  //     PR_ID: 1,
  //     BR_ID: 1,
  //     Pass: 'password123',
  //     OFFER_ID: 1,
  //     OFFER_LOC: 'New York'
  //   },
  //   {
  //     SROLL: '2019002',
  //     SNAME: 'Bob',
  //     CGPA: 8,
  //     EMAIL: 'bob@example.com',
  //     GENDER: 'm',
  //     ANY_ARREARS: 'n',
  //     PR_ID: 1,
  //     BR_ID: 1,
  //     Pass: 'password456',
  //     OFFER_ID: 2,
  //     OFFER_LOC: 'London'
  //   },
  //   {
  //     SROLL: '2019003',
  //     SNAME: 'Charlie',
  //     CGPA: 7.5,
  //     EMAIL: 'charlie@example.com',
  //     GENDER: 'm',
  //     ANY_ARREARS: 'y',
  //     PR_ID: 2,
  //     BR_ID: 2,
  //     Pass: 'password789',
  //     OFFER_ID: 3,
  //     OFFER_LOC: 'Tokyo'
  //   },
  //   {
  //     SROLL: '2019004',
  //     SNAME: 'David',
  //     CGPA: 7,
  //     EMAIL: 'david@example.com',
  //     GENDER: 'm',
  //     ANY_ARREARS: 'n',
  //     PR_ID: 2,
  //     BR_ID: 2,
  //     Pass: 'password101112',
  //     OFFER_ID: 4,
  //     OFFER_LOC: 'Paris'
  //   },
  //   {
  //     SROLL: '2019005',
  //     SNAME: 'Eve',
  //     CGPA: 6.5,
  //     EMAIL: 'eve@example.com',
  //     GENDER: 'f',
  //     ANY_ARREARS: 'y',
  //     PR_ID: 3,
  //     BR_ID: 3,
  //     Pass: 'password131415',
  //     OFFER_ID: 5,
  //     OFFER_LOC: 'Sydney'
  //   }
  // ]
  console.log(fields);
  console.log(data);
  console.log(heading);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("http://localhost:3000/s/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({jid : formData.get('user_id')}),
      });

      if (!response.ok) {
        throw new Error("Failed to Apply");
      }
      event.target.reset();
      // Optionally, you can fetch data again after updating
      fetchData();
    } catch (error) {
      console.error("Error Applying", error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">{heading}</Card.Title>
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
                    {data && (data.map((item) => (
                      <tr key={item.id}>
                        {Object.values(item).map((value, index) => (
                          <td key={index}>{value}</td>
                        ))}
                        {apply && (
                          <td>
                            <form onSubmit={handleFormSubmit}>
                              <input type="hidden" name="user_id" value={item}></input>
                              <input type="submit" value="Apply" style={{
                                  width: "100%",
                                  padding: "8px 12px",
                                  fontSize: "16px",
                                  backgroundColor: "#007bff",
                                  color: "#ffffff",
                                  border: "none", 
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                }}/>
                            </form>
                          </td>
                        )}
                      </tr>
                    )))}
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

TableList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableList;
