// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
;

function destructivelyAppendCat(name){
    // const allCats = [...cats]
    const allCats = cats.push(name)
    return allCats;
}

function destructivelyPrependCat(name){
    const allCats = cats.unshift(name)
    return allCats;
}

function destructivelyRemoveLastCat(){
    const allCats = cats.pop();
    return allCats;
}

function destructivelyRemoveFirstCat(){
    const allCats = cats.shift();
    return allCats;
    
}

function appendCat(name){
    const allCats = [...cats]
    allCats.push(name);
    return allCats;
}

function prependCat(name){
    const allCats = [...cats];
    allCats.unshift(name);
    return allCats;
}

function removeLastCat(){
    const allCats = [...cats];
    allCats.pop();
    return allCats;
}

function removeFirstCat(){
    const allCats = [...cats];
    allCats.shift();
    return allCats;
}