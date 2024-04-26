function parallelogramButton(){
   const paraBase = document.getElementById('para-b');
   const paraBaseButton = paraBase.value;
    const base = parseFloat(paraBaseButton)
    console.log(base)

    const paraHeight = document.getElementById('para-h');
    const paraHeightButton = paraHeight.value;
    const height = parseFloat(paraHeightButton)
    console.log(height)

    const paraArea = base * height;
    console.log('Area is:', paraArea)

    const paraButton = document.getElementById('para-text');
    paraButton.innerText = paraArea;

}