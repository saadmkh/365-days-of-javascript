let generateBtn = document.getElementById("generateBtn")
let colorPalette = document.querySelectorAll(".colorPalette")
let colorCode = document.querySelectorAll(".colorCode")
let wholeContainer = document.querySelector("section")

let colors = [1,2,3,4,5,6,7,8,9 , 'a', 'b', 'c' ,'d', 'e', 'f']

function generateColor(color){
  let storedColor = '#';

  for (let i = 0; i<6; i++){
    let random = Math.floor(Math.random()*color.length)
    storedColor += color[random]

  }
  wholeContainer.style.boxShadow=`0 0 10px ${storedColor}`
 
  
return storedColor;
  

}

generateBtn.addEventListener("click", () => {
  colorPalette.forEach((p, index) => {
    let finalColor = generateColor(colors); 
    p.style.backgroundColor = finalColor;
    colorCode[index].textContent = finalColor;
  
  });

});

  



