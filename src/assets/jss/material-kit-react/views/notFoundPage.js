import { container} from "assets/jss/material-kit-react.js";

//@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,500'),


const notFoundPage = {

html, body : {
    width: "100%",
    height: "100%"
},
body : {
    backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/257418/andy-holmes-698828-unsplash.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100vw",
    fontFamily: "Roboto Mono, Liberation Mono, Consolas, monospace",
    color: "rgba(255,255,255,.87)",
},
".mx-auto":{
    marginLeft: "auto",
    marginRight: "auto",
},

/* .container,
.container > .row,
.container > .row > div {
    height: 100%,
}, */

"#countUp": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    
    ".number" :{
        fontSize: "4rem",
        fontWeight: "500",
        
        "+ .text" :{
            margin: "0 0 1rem",
        }
    },
    
    ".text" :{
        fontWeight: "300",
        textAlign: "center",
    }
}
}
export default notFoundPage;