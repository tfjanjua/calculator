import {Response} from 'express'

class baseResponse {
    static error = (res: Response,message: string) => {
        res.status(400).send({
            error: true,
            message
        });
    }

    static success = (res: Response, result: any) => {
        res.status(400).send({
            error: false,
            result
        });
    }
}

export default baseResponse;