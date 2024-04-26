function rectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-w');
    const rectangleValue = rectangleWidth.value;
    const rectangleInput = parseFloat(rectangleValue);
    console.log(rectangleInput)

    const rectangleLength = document.getElementById('rectangle-l');
    const rectangleLengthInput = rectangleLength.value;
    const rectangleLengthValue = parseFloat(rectangleLengthInput);
    console.log(rectangleLengthValue)

    const rectangleAreaInput = rectangleInput * rectangleLengthInput;
    console.log('Area of Rectangle:',rectangleAreaInput)

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleAreaInput;
}