const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const dialogflow = require('@google-cloud/dialogflow');


//projectId
const projectId = "demoagent-bftc";


//intent
const intentClient = new dialogflow.IntentsClient();

//app
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//app use
app.use("/", async (req, res) => {
    // res.send("Server is working...!!!");
    try {
        const projectAgentPath = intentClient.projectAgentPath(projectId);
        const request = {
            parent: projectAgentPath,
        }
        const [response] = await intentClient.listIntents(request);
        res.send(response);
    } catch (error) {
        console.log(error);
        res.sendStatus(424);
    }
});


//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}.`));