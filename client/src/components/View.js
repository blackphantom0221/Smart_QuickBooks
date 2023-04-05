import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import Axios from "axios";
import EditableRow from "./ReadRow";
import "../styles/view.css";

const View = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    //Update URL according to deployment.
    Axios.get("http://localhost:8000/view")
      .then((response) => {
        setContactList(response.data);
      })
      .catch((err) => {
        console.log("Request failed:", err);
      });
  }, []);

  const deleteContact = (id) => {
    //Update URL according to deployment.
    Axios.delete(`http://localhost:8000/delete/${id}`).then(() => {
      setContactList(
        contactList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  const clearAll = () => {
    Axios.delete("http://localhost:8000/deleteAll").then(() => {
      setContactList([]);
    });
  };

  const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Email Address", key: "emailAddress" },
  ];

  const csvReport = {
    filename: "Contacts.csv",
    headers: headers,
    data: contactList,
  };

  return (
    <Container>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr className="table-header">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((val, index) => (
            <EditableRow
              key={index}
              val={val}
              deleteContact={deleteContact}
              contactList={contactList}
              setContactList={setContactList}
            />
          ))}
        </tbody>
      </Table>

      <div className="">
        <Row>
          <Col>
            <Button variant="outline-primary" size="lg" id="export-csv-btn">
              <CSVLink {...csvReport} className="export-text">
                Export CSV
              </CSVLink>
            </Button>
          </Col>
          <Button variant="outline-primary" size="lg" id="export-csv-btn">
            <CSVLink {...csvReport} className="export-text">
              Sync with Phone
            </CSVLink>
          </Button>
          <Col className="d-flex justify-content-end">
            <Button
              variant="outline-danger"
              id="clear-btn"
              size="lg"
              onClick={clearAll}
            >
              Clear All
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default View;
