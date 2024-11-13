let head = document.createElement("h1")
head.textContent="LUXURY CARS"

head.style.textAlign="center"
head.style.backgroundColor="hotpink"
head.style.color="white"
head.style.textShadow="2px 2px 5px black"



let container=document.createElement("div")
container.style.display="flex";

//card1
let card=document.createElement("div")
card.style.width="300px"
card.style.height="300px"
card.style.backgroundColor="khaki"
card.style.border="2px solid black";
card.style.borderRadius="20px"
card.style.boxSizing="border-box"

let photo1=document.createElement("img")
photo1.setAttribute("src", "https://parkplus-bkt-img.parkplus.io/5_BMW_M8_Coupe_284aed6741.webp")
photo1.setAttribute("width", "275")
photo1.style.padding="10px"
photo1.style.borderRadius="20px"


let carName=document.createElement("h3")
carName.textContent="BMW CAR";
carName.style.textAlign="center"

card.append(photo1,carName)




//card2

let card2=document.createElement("div")
card2.style.width="300px"
card2.style.height="300px"
card2.style.backgroundColor="khaki"
card2.style.border="2px solid black";
card2.style.borderRadius="20px"
card2.style.boxSizing="border-box"

let photo2=document.createElement("img")
photo2.setAttribute("src", "https://cdni.autocarindia.com/utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-8-Series-Coupe-271220221219.jpg&w=872&h=578&q=75&c=1")
photo2.setAttribute("width", "275")
photo2.style.padding="10px"
photo2.style.borderRadius="20px"


let carName2=document.createElement("h3")
carName2.textContent="BMW CAR";
carName2.style.textAlign="center"

card2.append(photo2,carName2)


//replace
let images=document.createElement("img")
images.setAttribute("src", "https://carwow-uk-wp-3.imgix.net/front-1-RS6-Etron-2-e1674560152374.png?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600")
images.style.width="350px"
images.style.height="300px"
let images1=document.createElement("img")
images1.src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/911/11757/1717680690776/front-left-side-47.jpg"
images1.style.width="350px"
images1.style.height="300px"


//cloneNode
const cloneElemt=images.cloneNode(true)

document.body.append(head, card,card2, images,images1,cloneElemt)


//attributes

console.log(photo1.getAttribute("width"))  //275
console.log(photo1.hasAttribute("width"))  //true

//classes
let divTag=document.createElement("div")
divTag.className="container1"  
divTag.classList.add("anil")                //<div class=container anil></div>
divTag.classList.add("ezas")                //<div class=container anil ezas></div>
divTag.classList.remove("anil")             //<div class=container ezas></div>
console.log(divTag)



