import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// No main.tsx, após as outras importações:

createRoot(document.getElementById("root")!).render(<App />);
