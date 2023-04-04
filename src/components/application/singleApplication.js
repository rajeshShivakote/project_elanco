import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseURL = "https://engineering-task.elancoapps.com/api/applications/";

const SingleApplication = (props) => {
  const [data, setData] = useState([]);
  const params = useParams();
  useLayoutEffect(() => {
    axios.get(baseURL + params.id).then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(params);
  return (
    <div>
      <section className="intro">
        <div className="bg-image h-100" style={{ backgroundColor: "#f5f7fa" }}>
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body p-0">
                      <div
                        className="table-responsive table-scroll"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: "relative", height: "700px" }}
                      >
                        <table className="table table-striped mb-0">
                          <thead style={{ backgroundColor: "#002d72" }}>
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
                            {data.map((obj, index) => {
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
          </div>
        </div>
      </section>
    </div>
  );
};
export default SingleApplication;
