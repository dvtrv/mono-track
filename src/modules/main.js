import "../css/style.css";
import { MainScreen } from "../components/MainScreen";
import * as actions from "./actions";
import * as render from "./render";

const init = () => {
  window.addEventListener("load", () => {
    render.renderScreen(MainScreen());
    render.renderTasks();
    actions.getEventTarget();
  });
};

init();
