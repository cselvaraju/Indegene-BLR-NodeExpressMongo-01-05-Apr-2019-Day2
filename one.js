const n = 99;

const myFunction = () => {
    console.log('Hi There!');
}

const coord = {
    x: 35,
    y: 46
};

// console.log(module)

// module.exports.myFunction = myFunction;
// module.exports.coord = coord;

// module.exports = {
//     myFunction: myFunction,
//     coord: coord
// };

// module.exports = {
//     f: myFunction,
//     c: coord
// };

module.exports = {
    myFunction,
    coord
};
