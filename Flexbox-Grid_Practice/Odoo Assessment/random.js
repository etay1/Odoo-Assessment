let randomNumber = Math.random() * 100;
let randomString = randomNumber.toString();
let randomInt = parseInt(randomString);

function height() {
    let randomNumber1 = Math.floor(Math.random() * 150 + 32);
    let randomNumber2 = Math.floor(Math.random() * 150 + 32);
    let randomNumber3 = Math.floor(Math.random() * 150 + 32);

    let randomString1 = randomNumber1.toString();
    let randomString2 = randomNumber2.toString();
    let randomString3 = randomNumber3.toString();

    //concat px for style.height to receieve a 
    //string with pixels as a parameter
    randomString1 =  randomString1.concat("px")
    randomString2 =  randomString2.concat("px")
    randomString3 =  randomString3.concat("px")


    //verifying pixels are being randomized
    console.log(randomString)
    document.getElementById("box1").style.height = randomString1 
    document.getElementById("box2").style.height = randomString2
    document.getElementById("box3").style.height = randomString3
}