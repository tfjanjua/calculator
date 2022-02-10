import { Request, Response } from "express";
import * as calcService from '../service/calcService'
import baseResponse from '../core/baseResponse'


class calcController {

    static calc = async (req: Request, res: Response) => {
        const exp: any = req.query.query;
        let expArray = exp.split('');
        let errMsg: string

        if(!exp)
            errMsg = "expression not found ";
        else if(expArray.includes("?"))    
            errMsg = "expression cannot contain charecter '?' ";
        else if(expArray.includes("(") && !expArray.includes(")"))            
            errMsg = "you missed the ')' ";
        else if(expArray.includes(")") && !expArray.includes("("))
            errMsg = "you missed the '(' ";
        
        // and so on....
        
        // respond the error
        if (errMsg) {
            await baseResponse.error(res, errMsg, exp);
            return;
        }

        var result = await calcService.calc(exp);
        baseResponse.success(res, result, exp);
    };
};

export default calcController;