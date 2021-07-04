function hello () {
    console.log("Hello World!");
    alert("Hi there!");
};

let number = 5;

function between2num (yourNum, num1, num2) {
    let result = num1 <= yourNum && yourNum < num2
    console.log(result);
    return result;
};

between2num(2, 1, 6);

function getSwitchy(input) {
    let val = input;
    
    if (typeof(val) != "string") 
    {
        console.log(`Your input was a ${typeof(val)}, and NOT a string!!`)
        console.log("Did you know that switch case doesn't do type coercion?");
        return
    };

    switch (val.toLowerCase()) {
        case "nintendo": val = "nintendo switch"; break;
        case "light": val = input; break;        
        case "foot": val = input; break;        
        case "power": val = input; break;        
        case "xor": val = input; break;
        case 1: val = input; break;
        default: console.log(`A "${val}" switch...? Not sure I've heard of that one.`); return;
        };
    
    console.log(`Oh, yup, a ${val} switch is a switch alright.`);
}

getSwitchy("liGht");
getSwitchy("xor");
getSwitchy("booty");
getSwitchy("1");
getSwitchy(1);

var myObj = {
    thing : "thing",
}

console.log(myObj.thing);

myObj.twentyOne = 21;

console.log(myObj.twentyOne)

myObj["thingus"] = "dingus";

console.log(myObj.thingus)

const arr = {
    item1: "one",
    item2: "two",
    item3: "three",
    item4: "four",
};

const just2thanks = function ({item5, item1}) {
    return (item5 + item1);
};

console.log(arr);
console.log(just2thanks(arr));