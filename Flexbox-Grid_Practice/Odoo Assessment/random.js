let randomNumber = Math.random() * 100;
let randomString = randomNumber.toString();
let randomInt = parseInt(randomString);

function height() {
    let boxString
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

    
/* ----------------------------------------------------------


    verifying pixels are being randomized
    console.log(randomString1)
    console.log(randomString2)
    console.log(randomString3)
    */

    /*
    let randomNumber1 = Math.floor(Math.random() * 150 + 32);
    let randomNumber2 = Math.floor(Math.random() * 150 + 32);
    let randomNumber3 = Math.floor(Math.random() * 150 + 32);

    let randomString1 = randomNumber1.toString();
    let randomString2 = randomNumber2.toString();
    let randomString3 = randomNumber3.toString();

    randomString1 =  randomString1.concat("px")
    randomString2 =  randomString2.concat("px")
    randomString3 =  randomString3.concat("px")
    
    document.getElementById("box1").style.height = randomString 
    document.getElementById("box2").style.height = randomString
    document.getElementById("box3").style.height = randomString
    

}

function createDropBuffer(beforeElement) {
    var buffer = document.createElement("div");
    buffer.setAttribute("draggable", "true");
    buffer.setAttribute("class", "buffer");
    buffer.setAttribute('id', 'moving-buffer')
    beforeElement.before(buffer);
    buffer.addEventListener('dragenter', (bufferEvent) => {
        bufferEvent.preventDefault();
    });
    buffer.addEventListener('dragover', (bufferEvent) => {
        bufferEvent.preventDefault();
    });
    buffer.addEventListener('dragleave', (bufferEvent) => {
        bufferEvent.preventDefault();
        $('#moving-buffer').remove();
    });
    buffer.addEventListener('drop', (bufferEvent) => {
        bufferEvent.preventDefault();
        let moved = document.getElementById(bufferEvent.dataTransfer.getData('text'));
        bufferEvent.target.parentNode.insertBefore(moved, bufferEvent.target);
        buffer.remove();
    });
}

function setUpDrag(element) {
    element.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        var buffer = document.createElement("div");
        buffer.setAttribute("draggable", "true");
        buffer.setAttribute("class", "bottom-buffer");
        $('.column').each((index, element) => {
            var clonedBuffer = buffer.cloneNode(true);
            clonedBuffer.addEventListener('dragenter', (bufferEvent) => {
                bufferEvent.preventDefault();
                $('#moving-buffer').remove();
                createDropBuffer(bufferEvent.target);
            });
            $(element).append(clonedBuffer);
        });
    });
    element.addEventListener('drag', (event) => {
        $(element).hide();
    });
    element.addEventListener('dragenter', (event) => {
        event.preventDefault();
        $('#moving-buffer').remove();
        createDropBuffer(event.target);
    });
    element.addEventListener('dragend', (event) => {
        $('.buffer, .bottom-buffer').remove();
        $(element).show();
    });
}

$('.cell').each((index, element) => {
    let height = Math.floor(Math.random() * (100) + 100)
    let cell = $(element);
    cell.css('height',  `${height}px`);
    setUpDrag(element)
});*/