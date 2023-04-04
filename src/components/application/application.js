import axios from "axios";
import React, { useEffect, useState } from "react";
import ApplicationGrid from "./applicationGrid";
const baseURL = "https://engineering-task.elancoapps.com/api/applications";

const MyApplication = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="grid-container">
      <ApplicationGrid data={data} />
    </div>
  );
};

export default MyApplication;
