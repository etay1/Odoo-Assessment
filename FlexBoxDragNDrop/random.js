let randomNumber = Math.random() * 100;
let randomString = randomNumber.toString();
let randomInt = parseInt(randomString);

function height() {
    let randomNumber
    let randomString

    //create three sets of numbers each randomized 
    //and floored at 32 (height of h1)
    //concat px for style.height to receieve a 
    //string with pixels as a parameter

    for (let i = 1; i <= 9; i++) {
        randomNumber = Math.floor(Math.random() * 150 + 32)
        randomString = randomNumber.toString().concat("px")
        document.getElementById("box".concat(i)).style.height = randomString
    }
}

    
