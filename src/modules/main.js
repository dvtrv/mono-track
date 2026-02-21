import "../css/style.css";
import { MainScreen } from "../components/MainScreen";
import * as actions from "./actions";
import * as render from "./render";
import { store } from "./store";

const init = () => {
  window.addEventListener("load", () => {
    store.loadState();
    render.renderScreen(MainScreen());
    render.renderTasks();
    actions.getEventTarget();
  });
};

init();
