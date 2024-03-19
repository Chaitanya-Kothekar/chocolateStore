
var items = [
  {
    name: "Milk Peanuts Chocolate",
    src1: "./images/item1.png",
    price: 460,
  },
  {
    name: "Pastry Chef Fantasy",
    src1: "./images/item2.png",
    price: 490,
  },
  {
    name: "Truffle With Vanilla",
    src1: "./images/item3.png",
    price: 490,
  },
  {
    name: "Almond Dark Chocolate",
    src1: "./images/item4.png",
    price: 490,
  },
  {
    name: "Fruit Praline",
    src1: "./images/item5.png",
    price: 490,
  },
  {
    name: "Drunken Cherry Choco",
    src1: "./images/item5.png",
    price: 490,
  },
  {
    name: "Peppered Dark Chocolate",
    src1: "./images/item6.png",
    price: 490,
  },
  {
    name: "Dark Souffle Chocolate",
    src1: "./images/item8.png",
    price: 490,
  },
  {
    name: "rocketmania Choco ",
    src1: "./images/item10.png",
    price: 490,
  },
  {
    name: "Blaster 200g",
    src1: "./images/item13.png",
    price: 490,
  },
  {
    name: "choco cake Box 200g",
    src1: "./images/item14.png",
    price: 490,
  },
  {
    name: "Gold Bar Box 200g",
    src1: "./images/item15.png",
    price: 490,
  },
]
var element = "";
for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
  element = element + `
    <div id="cards"  style=' background-image: linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% );  text-align: center; margin: 10px 20px; height: 390px; border: 1px solid black; width: 250px; color:white; border-radius: 10px;'>
    <div style='  height:45%; margin:5px'><img class="imgSize" src=${items[i].src1} alt=""></div>
    <h3 style="font-family:serif; font-size:22px;">${items[i].name}</h3>
    <h4 style='padding-top:10px;margin-top:10px; font-family:serif; font-size:22px;'>Price : ${items[i].price}</h4>
    <h4 style='padding-top:10px; font-family:serif; font-size:22px;'>Free Delivery</h4>
    <div class="buttons">
    <button>Buy Now</button>
    <button>Add to cart</button>
    </div>
    
    
</div>
   
    </div>
    
    
  `;
}
document.getElementById("Brandcards").innerHTML = element;