import Grid from "./Grid";

const ApplicationGrid = ({ data }) => {
  return data.map((mydata) => (
    <div>
      <Grid key={mydata} grid={mydata} />
    </div>
  ));
};
export default ApplicationGrid;
