const form2 = document.querySelector(".submits2");
const loca = form2.querySelector(".loca"),
    locaBtn = form2.querySelector("button")
    inserted = document.querySelector(".js-inserted");
    

const LOCA_LS = 'locations';
let locas =[];

function saveLocations(){
    localStorage.setItem(LOCA_LS,JSON.stringify(locas));
  }

function paintLocation(location){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = locas.length + 1;
    
    //li.id = newId;
    span.innerText = location;
    li.appendChild(span);
    inserted.appendChild(li);
    const locationsObj = {
      locations: location,
      id: newId
    };
    locas.push(locationsObj);
    saveLocations();
  }

function handleSubmit2(event){
    event.preventDefault();
     const currentLoca = loca.value;
     paintLocation(currentLoca);
     loca.value="";
  }

function loadLoca(){
    const loadedLoca = localStorage.getItem(LOCA_LS);
    if(loadedLoca !== null){
      const parseLoca = JSON.parse(loadedLoca);
      parseLoca.forEach(function(locations){
        paintLocation(locations.locations);
        console.log(locations);
      });
    }
  }

function init(){
    loadLoca();    
    locaBtn.addEventListener("click",handleSubmit2);
}
init();