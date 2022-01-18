import * as bodyParser from "body-parser";
import * as express from "express";
import routes from "./routes";

// Create a new express application instance
const app = express();

// Call midlewares
app.use(bodyParser.json());
app.use("/", routes);

// Setting the port
let port = process.env.PORT || 90;

// Test route
app.get("/", (req, res) => {
    res.send("Server started on port " + port);
});

// Start the server
app.listen(port, () => {    
    console.log("Server started on port " + port);
});


export default app;