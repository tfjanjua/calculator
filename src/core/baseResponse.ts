import { Response } from 'express'
import { DaprClient } from "dapr-client"; 

const daprHost = "127.0.0.1"; // Dapr Sidecar Host
const daprPort = "14853"; // Dapr Sidecar Port of this Example Server
const serviceStoreName = "statestore";

// HTTP
const client = new DaprClient(daprHost, daprPort);

class baseResponse {
    static error = async (res: Response, message: string, exp: any) => {
        let resObj = {
            error: true,
            message,
            exp
        };

        await client.state.save(serviceStoreName, [{key: exp, value: resObj}]);
        res.status(400).send(resObj);
    }

    static success = async (res: Response, result: any, exp: any) => {
        let resObj = {
            error: false,
            result,
            exp
        };

        await client.state.save(serviceStoreName, [{key: exp, value: resObj}]);
        res.status(400).send(resObj);
    }
}

export default baseResponse;