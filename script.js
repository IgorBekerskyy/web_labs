
let planes=[
    {
        "sizeEURstandart": 40,
        "priceInUAH": 650,
        "brand": "Adidas",
        "color": "black",
        "hightfShaftlnSM": 30
    },
    {
        "sizeEURstandart": 39,
        "priceInUAH": 550,
        "brand": "Nike",
        "color": "blue",
        "hightfShaftlnSM": 30 
    },
    {
        "sizeEURstandart": 36,
        "priceInUAH": 1000,
        "brand": "Ecco",
        "color": "red",
        "hightfShaftlnSM": 29 
    },
    {
        "sizeEURstandart": 38,
        "priceInUAH": 670,
        "brand": "Puma",
        "color": "green",
        "hightfShaftlnSM": 24 
    },
    {
        "sizeEURstandart": 38,
        "priceInUAH": 670,
        "brand": "Puma",
        "color": "black",
        "hightfShaftlnSM": 24 
    },
    {
        "sizeEURstandart": 41,
        "priceInUAH": 2089,
        "brand": "New Balance",
        "color": "brown",
        "hightfShaftlnSM": 35 
    },
]

const myPlanes = document.getElementById("myPlanes");
const searchButton = document.getElementById("search");

function addElementToPage({ sizeEURstandart, priceInUAH, brand, color, hightfShaftlnSM }){
    myShoes.insertAdjacentHTML(
        "afterbegin",
        `<div class="planes-pair">
        <div class="planes-pair__image"></div>
        <h1 class="planes-pair__title">These planes</h1>
        <p class="planes-pair__paragraph">There are boots with price $${priceInUAH}, 
        made by ${brand}, the color of these is ${color}, 
        the size of the pair is ${sizeEURstandart} 
        and the hight of shaft - ${hightfShaftlnSM}sm.</p>
        <div class="edit-remove__buttons">
            <button onclick="location.href ='edit_plane.html'" class="edit">Edit</button>
            <button class="remove">Remove</button>
        </div>
    </div>`
      );
}

function displayPlanes(planes){
    myShoes.innerHTML = "";
    for (const item of planes) {
        addElementToPage(item);   
    }
}

displayPlanes(planes);

searchButton.addEventListener("click", (event) =>{
    event.preventDefault();

    let foundItem = document.getElementById("typedPlanes").value;
    let foundList=[];
    shoes.forEach(item => {
        if(foundItem==item.color){
            foundList.push(item)
        }
    });
    displayPlanes(foundList);
})

function cleanPlanes(){
    document.getElementById("typedPlanes").value="";
    displayPlanes(planes);
}

function sortPlanes(){
    shoes.sort(function(obj1, obj2) {
        if(obj1.priceInUAH > obj2.priceInUAH){
            return 1;
        }
        return -1;
    });
    displayPlanes(planes);
}

function countPlanesPrice(){
    let planesPrice=0;
    planes.forEach(item =>{
        planesPrice+=item.priceInUAH;
    });
    document.getElementById("resultPrice").innerHTML=planesPrice + '$';
}
