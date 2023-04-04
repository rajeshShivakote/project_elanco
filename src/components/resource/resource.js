import axios from "axios";
import { useEffect, useState } from "react";
import ResourceFlex from "./resourceFlex";
const baseURL = "https://engineering-task.elancoapps.com/api/resources";

const MyResource = () => {
  const [resource, setResource] = useState([]);
  const [indiResource, setIndiResource] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setResource(response.data);
    });
  }, []);
  const getIndivisualResource = (data) => {
    setIndiResource(data);
  };
  return (
    <>
      <div className="flex-container column">
        {resource.map((values) => {
          return (
            <ResourceFlex
              value={values}
              getIndResource={getIndivisualResource}
            />
          );
        })}
      </div>
      <section
        className="intro"
        style={{ position: "absolute", marginLeft: "11%" }}
      >
        <div className="gradient-custom-2 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-dark table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">ConsumedQuantity</th>
                          <th scope="col">Cost</th>
                          <th scope="col">Date</th>
                          <th scope="col">InstanceId</th>
                          <th scope="col">MeterCategory</th>
                          <th scope="col">ResourceGroup</th>
                          <th scope="col">ResourceLocation</th>
                          <th scope="col">Tags</th>
                          <th scope="col">UnitOfMeasure</th>
                          <th scope="col">Location</th>
                          <th scope="col">ServiceName</th>
                        </tr>
                      </thead>
                      <tbody>
                        {indiResource.map((obj, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{obj.ConsumedQuantity}</th>
                              <td>{obj.Cost}</td>
                              <td>{obj.Date}</td>
                              <td>{obj.InstanceId}</td>
                              <td>{obj.MeterCategory}</td>
                              <td>{obj.ResourceGroup}</td>
                              <td>{obj.ResourceLocation}</td>
                              <td>
                                {Object.values(obj.Tags).map((obj2) => {
                                  console.log(obj2);
                                  return (
                                    <ul>
                                      <li>{obj2}</li>
                                    </ul>
                                  );
                                })}
                              </td>
                              <td>{obj.UnitOfMeasure}</td>
                              <td>{obj.Location}</td>
                              <td>{obj.ServiceName}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MyResource;
