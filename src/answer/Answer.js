import classes from "../components/styles/FakeButton.module.css";

function Answer(props) {
  function keyboardHandler(event) {
    if (event.key === "Enter" && event.key === " ") {
      props.onClick();
    }
  }

  return (
    <div
      className={classes.fake}
      onClick={props.onClick}
      onKeyUp={keyboardHandler}
      role="button"
      tabIndex={0}
    >
      {props.children}
    </div>
  );
}

export default Answer;
