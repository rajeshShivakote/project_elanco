import { getValue } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
const baseURL = "https://engineering-task.elancoapps.com/api/resources/";
const ResourceFlex = (props) => {
  const [data, setData] = useState([]);

  const getIndivisualResource = (value) => {
    axios.get(baseURL + value).then((response) => {
      setData(response.data);
      props.getIndResource(response.data);
    });
  };
  return (
    <button
      className="resource-list"
      onClick={() => getIndivisualResource(props.value)}
    >
      {props.value}
    </button>
  );
};
export default ResourceFlex;
