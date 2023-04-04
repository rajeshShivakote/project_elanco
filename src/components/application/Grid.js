import { Link } from "react-router-dom";

const Grid = (props) => {
  return (
    <div className="grid-item">
      <Link
        to={{
          pathname: `./${props.grid}`,
        }}
        style={{ textDecoration: "none" }}
      >
        {" "}
        {props.grid}
      </Link>
    </div>
  );
};
export default Grid;
