let boxes = document.getElementsByClassName("box");
let container = document.getElementById("container");

// Default size of the randomizer
let size = 5;

// Creeate single block element with color and random value
function createBox(value){
    let element = document.createElement('div');
    element.classList.add('box');
    element.innerText = value;
    if (value % 2 === 0){ 
        element.style.backgroundColor = "aqua";
    }else {
        element.style.backgroundColor = "white";
    }
    return element;
}

// Randomize the blocks when switch is clicked
function handleSwitch(){
    fillContainer(size);
}

// Create a list of randomized box blocks list
function randomList(size){
    let list = [];
    for (let i = 0; i < size*size; i++){
        var value = Math.floor(Math.random() * size*size) + 1;
        list.push(createBox(value));
    }
    return list;
}

// Fills the container with elements
function fillContainer(size){
    container.style.gridTemplateColumns = `repeat(${size}, 50px)`;
    container.style.gridTemplateRows = `repeat(${size}, 50px)`;

    var items = randomList(size);
    container.innerHTML = "";
    for (let i = 0; i < items.length; i++){
        container.appendChild(items[i])
    }
}

// Increases the size of randomizer
function handleIncrement(){
    if (size < 10){
        size++;
        fillContainer(size);
    }
}

// Decreases the size of randomizer
function handleDecrement(){
    if (size > 2){
        size--;
        fillContainer(size);
    }
}

// Optional auto randomizer for specific interval.
setInterval(()=>{
    fillContainer(size)
}, 100)

fillContainer(size);