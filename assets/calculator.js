function plusFunction() 
{
    let first = prompt (`первое число`);
    let second = prompt (`второе число`);
    let result = plusFunctionplus (first, second);
    alert (result);
}

function plusFunctionplus (first, second)
{
    return (+first + +second);
}


function minusFunction() 
{
    let first = prompt (`первое число`);
    let second = prompt (`второе число`);
    let result = minusFunctionminus (first, second);
    alert (result);
}

function minusFunctionminus (first, second)
{
    return (first - second);
}

function multiplyFunction() 
{
    let first = prompt (`первое число`);
    let second = prompt (`второе число`);
    let result = multiplyFunctionmultiply (first, second);
    alert (result);
}

function multiplyFunctionmultiply (first, second)
{
    return (first * second);
}

function divideFunction() 
{
    let first = prompt (`первое число`);
    let second = prompt (`второе число`);
    let result = divideFunctiondivide (first, second);
    alert (result);
}

function divideFunctiondivide (first, second)
{
    return (first / second);
}