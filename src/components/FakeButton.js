import classes from "./styles/FakeButton.module.css";

function FakeButton(props) {
  return (
    <div className={classes.fake} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default FakeButton;
