import { Request, Response } from "express";
import * as calcService from '../service/calcService'
import baseResponse from '../core/baseResponse'


class calcController {

    static calc = async (req: Request, res: Response) => {
        const exp: any = req.query.query;
        let expArray = exp.split('');

        if(!exp){
            console.log("error")
            baseResponse.error(res,"expression not found ");
            return;
        }
        if(expArray.includes("?")){
            console.log("error")
            baseResponse.error(res,"expression cannot contain charecter '?' ");
            return;
        }
        if(expArray.includes("(") && !expArray.includes(")")){
            console.log("error")
            baseResponse.error(res,"you missed the ')' ");
            return;
        }
        if(expArray.includes(")") && !expArray.includes("(")){
            console.log("error")
            baseResponse.error(res,"you missed the '(' ");
            return;
        }

        // and so on....
        
        var result = await calcService.calc(exp);
        baseResponse.success(res, result);
    };
};

export default calcController;