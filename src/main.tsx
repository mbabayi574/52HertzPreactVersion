import App from "./app.tsx";
import { render } from "preact";

const rootElement = document.getElementById("app");

if (rootElement !== null) {
  render(<App />, rootElement);
} else {
  console.error("Couldn't find root element to mount the app");
}
