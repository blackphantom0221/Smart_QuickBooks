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
    Axios.get("https://smart-phonebook.herokuapp.com/view").then((response) => {
      setContactList(response.data);
    });
  }, []);

  const deleteContact = (id) => {
    //Update URL according to deployment.
    Axios.delete(`https://smart-phonebook.herokuapp.com/delete/${id}`).then(
      () => {
        setContactList(
          contactList.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  const clearAll = () => {
    Axios.delete("https://smart-phonebook.herokuapp.com/deleteAll").then(() => {
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
          <tr>
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

      <Row>
        <Col>
          <Button variant="outline-primary" size="lg" className="export-csv-btn">
            <CSVLink {...csvReport} className="export-text">
              Export CSV
            </CSVLink>
          </Button>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="outline-danger" size="lg" onClick={clearAll}>
            Clear All
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default View;
