let planes=[];
const submitButton = document.getElementById("submit_button");

const sizeEURstandartInput = document.getElementById("sizeEURstandart_input");
const priceInUAHInput = document.getElementById("priceInUAH_input");
const brandInput = document.getElementById("brand_input");
const colorInput = document.getElementById("color_input");
const hightfShaftlnSMInput = document.getElementById("hightfShaftlnSM_input");

var web = document.getElementById("warning-message");
var span = document.getElementById("close");

span.onclick = function() {
    web.style.display = "none";
  }

submitButton.addEventListener("click", (event) => {
    const { sizeEURstandart, priceInUAH, color, brand, hightfShaftlnSM } = getInputValues();
    
    var re_color = /^[a-z]{3,}$/g;
    if (re_color.test(color) && sizeEURstandart<=45 && sizeEURstandart>=35 && brand!==null && priceInUAH<=3000 && priceInUAH>=20 && hightfShaftlnSM<=40 && hightfShaftlnSM>=5 ){
        
      addElement({
        sizeEURstandart, 
        priceInUAH, 
        brand, 
        color, 
        hightfShaftlnSM
        })
        clearInputs();
        event.preventDefault();
        var message1 = document.getElementById("warning-message");
        message1.style.display = "none";

    } else {

        event.preventDefault();
        var message = document.getElementById("warning-message");
        message.style.display = "block";
    
      }
  });

  function clearInputs(){
    sizeEURstandartInput.value = "";
    priceInUAHInput.value = "";
    brandInput.value = "";
    colorInput.value = "";
    hightfShaftlnSMInput.value = "";
}

  function getInputValues(){
    return {
        sizeEURstandart: sizeEURstandartInput.value,
        priceInUAH: priceInUAHInput.value,
        brand: brandInput.value,
        color: colorInput.value,
        hightfShaftlnSM: hightfShaftlnSMInput.value,
      };
}


function addElement({ sizeEURstandart, priceInUAH, brand, color, hightfShaftlnSM }){

    const newItem = {
        sizeEURstandart, 
        priceInUAH, 
        brand, 
        color, 
        hightfShaftlnSM
    };

    shoes.push(newItem);
}