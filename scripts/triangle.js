function triangleArea(){
    const triangleBase = document.getElementById('b-triangle');
    const triangleBaseInput = triangleBase.value;
    const base = parseFloat(triangleBaseInput)
    console.log(base)
    const triangleHeight = document.getElementById('h-triangle');
    const triangleHeightInput = triangleHeight.value;
    const height = parseFloat(triangleHeightInput);
    console.log(height)
    const area = 0.5*base*height;
    console.log('Area is:', area)

    const triangleAreaSpan = document.getElementById('area-text');
    triangleAreaSpan.innerText = area;
}