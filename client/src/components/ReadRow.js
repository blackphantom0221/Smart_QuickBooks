import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { IoReloadSharp } from "react-icons/io5";
import EditRow from "./EditRow";

const ReadRow = ({
  val,
  deleteContact,
  updateContact,
  contactList,
  setContactList,
}) => {
  const [editView, setEditView] = useState(false);

  const ReadOnlyRow = () => {
    return (
      <tr className="table-body">
        <td id="table-item">{val.id}</td>
        <td id="table-item">{val.firstName}</td>
        <td id="table-item">{val.lastName}</td>
        <td id="table-item">{val.phoneNumber}</td>
        <td id="table-item">{val.emailAddress}</td>
        <td id="table-item text-center">
          <IoReloadSharp
            onClick={() => {
              setEditView(true);
            }}
            style={{ cursor: "pointer", fill: "yellow" }}
          />
        </td>
        <td className="text-center">
          <AiFillDelete
            onClick={() => {
              deleteContact(val.id);
            }}
            style={{ cursor: "pointer" }}
          ></AiFillDelete>
        </td>
      </tr>
    );
  };

  return editView ? (
    <EditRow
      val={val}
      updateContact={updateContact}
      setEditView={setEditView}
      contactList={contactList}
      setContactList={setContactList}
    />
  ) : (
    <ReadOnlyRow />
  );
};

export default ReadRow;
