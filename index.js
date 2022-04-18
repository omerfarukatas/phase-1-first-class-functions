// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }

// function Monday() {
//     runFiveMiles();
//     liftWeights();
//   }

function Monday(){
    exerciseRoutine(liftWeights);
}
  
function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function runFiveMiles(){
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) { //postRunActivity is a callback
    runFiveMiles();
    postRunActivity();
}

// We can create an anonymous function if we want something to be done just once

// exerciseRoutine(function(){
//     console.log("Stretch! Work that core!");
// });

//=> Go for a five-mile run
//=> Stretch! Work that core!

// Can be written more concisely with an arrow function
// exerciseRoutine(()=> console.log("Stretch! Work that core!"));

function morningRoutine(exercise){
    let breakfast;

    if (exercise === liftWeights){
        breakfast = "protein bar";
    } else if (exercise === swimFortyLaps){
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }

    exerciseRoutine(exercise); // WHY IS THIS HERE?? AND NOT ABOVE THE IF STATEMENT

    return function(){
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
}

const afterExercise = morningRoutine(liftWeights);

afterExercise();

//////////////////////////////

function receivesAFunction(callbackFunction){
    console.log(`I just called a callback function!`)
    callbackFunction();
}

function returnsANamedFunction (){
    const namedFunction = function(){};
    return namedFunction
}

function returnsAnAnonymousFunction () {
    return function(){};
}