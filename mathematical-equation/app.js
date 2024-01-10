
    // Rectangle Area Calculator
    const reclength = document.querySelector("#rec_len");
    const recWidth = document.querySelector("#rec_wid");
    const rectAreaVal = document.querySelector("#rectAreaVal");
    const rectPeriVal = document.querySelector("#rectPeriVal");
    const calBtn = document.querySelector("#calBtn");

    calBtn.addEventListener ('click' , () => {
        let areaValue = reclength.value * recWidth.value;
        let perimeterValue = 2 * (parseInt(reclength.value) + parseInt(recWidth.value));
        rectAreaVal.innerText = `Rectangle Area of ${areaValue}`;
        rectPeriVal.innerText = `Rectangle Perimeter of ${perimeterValue}`;
    })


    // Square Area Calculator
    const sqlength = document.querySelector("#sq_len");
    // const sqWidth = document.querySelector("#sq_wid");
    const sqAreaVal = document.querySelector("#sqAreaVal");
    const sqPeriVal = document.querySelector("#sqPeriVal");
    const sqcalBtn = document.querySelector("#sqcalBtn");

    sqcalBtn.addEventListener ('click' , () => {
        let areaValue = sqlength.value ** 2;
        let perimeterValue = 4 * sqlength.value;
        sqAreaVal.innerText = `Square Area of ${areaValue}`;
        sqPeriVal.innerText = `Square Perimeter of ${perimeterValue}`;
    })


    // Tringle Area Calculator
    const triHeight = document.querySelector("#tri_hei");
    const triBase = document.querySelector("#tri_bs");
    const triSide = document.querySelector("#tri_sd");
    const triAreaVal = document.querySelector("#triAreaVal");
    const triPeriVal = document.querySelector("#triPeriVal");
    const tricalBtn = document.querySelector("#tricalBtn");

    tricalBtn.addEventListener ('click' , () => {
        let areaValue = (triHeight.value * triBase.value) / 2;
        let perimeterValue = parseInt(triHeight.value) + parseInt(triBase.value) + parseInt(triSide.value);
        triAreaVal.innerText = `Tringle Area of = ${areaValue}`;
        triPeriVal.innerText = `Tringle Perimeter of = ${perimeterValue}`;
    })


    // Circle Area Calculator
    const cirRedius = document.querySelector("#cir_R");
    const cirAreaVal = document.querySelector("#cirAreaVal");
    const cirPeriVal = document.querySelector("#cirPeriVal");
    const circalBtn = document.querySelector("#circalBtn");

    circalBtn.addEventListener ('click' , () => {
        // let PI = 3.14;
        let PI = 22/7;
        let areaValue = Math.floor(PI * (cirRedius.value ** 2));
        let perimeterValue = Math.floor(2 * PI * cirRedius.value);
        cirAreaVal.innerText = `Circle Area of = ${areaValue}`;
        cirPeriVal.innerText = `Circle Perimeter of = ${perimeterValue}`;
    })


