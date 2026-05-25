import{createRoot} from "react-dom/client"
import{StrictMode} from "react"
import "./main.css"
import App from "./App.jsx"

const domNode = document.getElementById("root")
const root = createRoot(domNode)

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
  
)