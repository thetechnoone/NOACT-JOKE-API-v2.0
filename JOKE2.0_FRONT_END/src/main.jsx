import{createroot} from "react-dom/client"
import{StrictMode} from "react-dom"
import "./main.css"
import App from "App.jsx"

const domNode = document.getElementById("root")
const root = createroot(domNode)

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
  
)