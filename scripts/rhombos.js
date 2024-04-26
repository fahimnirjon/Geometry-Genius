function rhombhosButton(){
    const rhombhosPeri = document.getElementById('r-d1');
    const rhombhosPeriButton = rhombhosPeri.value;
    const perimetre = parseFloat(rhombhosPeriButton)
    console.log(perimetre)

    const rhombhosBase = document.getElementById('r-d2');
    const rhombhosBaseButton = rhombhosBase.value;
    const base = parseFloat(rhombhosBaseButton)
    console.log(base)

    const rhombhosArea = 0.5 * perimetre * base;
    console.log('Area is:', rhombhosArea)

    const area = document.getElementById('rhom-text');
    area.innerText= rhombhosArea;
}