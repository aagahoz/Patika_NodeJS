const parameter = process.argv.slice(2)[0];
const pi = 3.1;

const areaOfCircle = (parameter) => {
    const result = 2 * pi * parameter;
    console.log("Area of Circle: ", result);
}

areaOfCircle(parameter)