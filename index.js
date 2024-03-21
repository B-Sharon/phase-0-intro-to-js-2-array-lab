// assigning cats an initial value
const cats = ["Milo", "Otis", "Garfield"];

// destructivelyAppendCat
let destructivelyAppendCat = (name) => cats.push("Ralph");

// destructivelyPrependCat
const destructivelyPrependCat = (name) => cats.unshift("Bob");

// destructivelyRemoveLastCat
const destructivelyRemoveLastCat = (name) => cats.pop();

// destructivelyRemoveFirstCat
let destructivelyRemoveFirstCat = (name) => cats.shift();

// appends a cat to the cats array and returns a new array
const appendCat = (name) => [...cats, 'Broom'];

// prepends a cat to the cats array and returns a new array
let prependCat = (name) => ["Arnold", ...cats];

//removes the last cat in the cats array and returns a new array
function removeLastCat(name){
    return cats.slice(0, -1);
}

//removes the first cat from the cats array and returns a new arrayy
const removeFirstCat = (name) => cats.slice(1);