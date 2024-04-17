import React from "react";
import {useLocation, useHistory} from "react-router-dom";
import TableList from "./TableList";

function StudentsList() {
 
  const location = useLocation();
  const data = location.state;
  console.log(data.data);

  return (
    <div>
        <TableList fields={data.fields} data={data.data} approve={true} reject={true} val="accept" val1 ="reject" heading="students list"/>
    </div>
  );
}

export default StudentsList;

//
{/* <>
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
</> */}