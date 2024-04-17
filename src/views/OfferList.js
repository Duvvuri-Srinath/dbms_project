import React from "react";
import {useLocation, useHistory} from "react-router-dom";
import TableList from "./TableList";

function StudentsList() {
 
  const location = useLocation();
  const data = location.state;
  console.log(data.data);

  return (
    <div>
        <TableList fields={data.fields} data={data.data} heading="students list"/>
    </div>
  );
}

export default StudentsList;