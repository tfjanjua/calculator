
export const calc = async (expression: string) => {
    console.log(expression);
    let expArray = expression.split('');
    let startIndex, endIndex, subExp;
    
    for (let i = 0; i < expArray.length; i++) {
        
        if(!expArray.includes("(") && !expArray.includes(")")) {
            console.log("without (): "+ expArray);
            return await evaluate(expArray.join(''));
        }

        if (expArray[i] === "(") startIndex = i;
        
        if (expArray[i] === ")") { 
            endIndex = i; 
            subExp = expArray.splice(startIndex, (endIndex - startIndex) + 1, "?").join(''); 
            console.log("result: "+expArray.join(''))
            let result = await evaluate(subExp);
            console.log("eval: " + result);
            expArray.splice(startIndex, 1, result);
            console.log("result: "+expArray.join(''))
            if(!expArray.includes("(") && !expArray.includes(")")) {
                console.log("Final array: "+ expArray);
                return await evaluate(expArray.join(''));
            }
            i=0;
        }
        
    }
    
};

const evaluate = async (expression: string) => { 
    let expArray = expression.replace("(","").replace(")","").split('');
    console.log("exp: " + expArray.join(''));
    for (let i = expArray.length - 1; i >= 0; i--) {
        if(expArray[i] === "/") {
            console.log("op: "+ expArray[i])
            console.log("num1: "+ expArray[i-1])
            console.log("num2: "+ expArray[i+1])
            expArray[i] = (parseInt(expArray[i-1]) / parseInt(expArray[i+1])).toString();
            console.log("calc: "+ expArray.join(''))
            expArray.splice(i+1,1);
            console.log("remove 1: "+ expArray.join(''))
            expArray.splice(i-1,1);
            console.log("remove 2: "+ expArray.join(''))
        }
    }
    for (let i = expArray.length - 1; i >= 0; i--) {
        if(expArray[i] === "*") {
            console.log("op: "+ expArray[i])
            expArray[i] = (parseInt(expArray[i-1]) * parseInt(expArray[i+1])).toString();
            console.log("maths: "+ expArray.join(''))
            expArray.splice(i+1,1);
            console.log("remove 1: "+ expArray.join(''))
            expArray.splice(i-1,1);
            console.log("remove 2: "+ expArray.join(''))
        }
    }
    for (let i = expArray.length - 1; i >= 0; i--) {
        if(expArray[i] === "+") {
            console.log("op: "+ expArray[i])
            expArray[i] = (parseInt(expArray[i-1]) + parseInt(expArray[i+1])).toString();
            console.log("maths: "+ expArray.join(''))
            expArray.splice(i+1,1);
            console.log("remove 1: "+ expArray.join(''))
            expArray.splice(i-1,1);
            console.log("remove 2: "+ expArray.join(''))
        }
    }
    for (let i = expArray.length - 1; i >= 0; i--) {
        if(expArray[i] === "-") {
            console.log("op: "+ expArray[i])
            expArray[i] = (parseInt(expArray[i-1]) - parseInt(expArray[i+1])).toString();
            console.log("maths: "+ expArray.join(''))
            expArray.splice(i+1,1);
            console.log("remove 1: "+ expArray.join(''))
            expArray.splice(i-1,1);
            console.log("remove 2: "+ expArray.join(''))
        }
    }
    return expArray[0];
}