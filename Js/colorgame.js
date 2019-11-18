/* eslint-env browser */
/* math */

var squareNum = 6;
var colors = randomColorsArray(squareNum);
var squares = document.querySelectorAll(".square");
var rightColor = pickColor();   
var colorDis = document.querySelector("#colorDisplay");
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");


//select easy mode, randmoize 3 colos & hide 3 squares
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    squareNum = 3
    colors = randomColorsArray(squareNum);
    rightColor = pickColor();
    colorDis.textContent = rightColor;
    for(var i = 0; i < squares.length; i++){ 
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];}
        else {squares[i].style.display = "none";}
    }
    result.textContent = "";
});

//select hard mode, randmoize 6 colos
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    squareNum = 6;
    colors = randomColorsArray(squareNum);
    rightColor = pickColor();
    colorDis.textContent = rightColor;
    for(var i = 0; i < squares.length; i++){ 
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";}
    result.textContent = "";
});

reset.addEventListener("click", function(){
    resetFn();
});

colorDis.textContent = rightColor;


function resetFn(){
    colors = randomColorsArray(squareNum);  
    rightColor = pickColor();
    colorDis.textContent = rightColor;
    for(var i = 0; i < squares.length; i++){ 
        squares[i].style.backgroundColor = colors[i];
        
    }
    reset.textContent = "New Colors";
    h1.style.backgroundColor = "lightsteelblue";
    result.textContent = "";
}

//loop through squares and get their colors
for (var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor===rightColor){
            result.textContent = "you won!";
            changeColor(rightColor);
            h1.style.backgroundColor = rightColor; 
            reset.textContent = "Play Again?"}
        else {this.style.backgroundColor = "#232323"}
    });
    squares[i].style.backgroundColor = colors[i];
}

// changing color after winning
var changeColor = function(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//choose a random color from the color array
function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

//push random colors to colors array
function randomColorsArray(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

//create random color
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
