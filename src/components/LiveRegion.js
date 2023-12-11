import classes from "./styles/LiveRegion.module.css";

function LiveRegion(props) {
  return (
    <div
      className={classes["live-region"]}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {props.children}
    </div>
  );
}

export default LiveRegion;
