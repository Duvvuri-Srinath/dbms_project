import React from "react";
import {useLocation} from "react-router-dom";
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
