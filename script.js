const btn1= document.getElementById("b1");
const main1 = document.getElementById("main");
const p1 = document.getElementById("p1");

btn1.addEventListener("click", generateColor);
function generateColor (){
    const clrNum = Math.floor(Math.random()*16777215);
    const clrCode = "#" + clrNum.toString(16);
    p1.textContent = clrCode;
    main1.style.backgroundColor = clrCode;


    navigator.clipboard.writeText(clrCode);
}

generateColor();
