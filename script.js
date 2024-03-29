
let cartIcon = document.querySelector(".cart");
let sidebar  = document.querySelector('.sideBar');
let crossBtn = document.querySelector('.closeBtn')
let listCart  = document.querySelector('.test');
let cartTotal  = document.querySelector('.cart-total');
let iconsCartSpan = document.querySelector('.cartSpan');

cartIcon.addEventListener("click" , (event) =>{
  sidebar.classList.toggle('toggle-cart');
})

crossBtn.addEventListener('click' ,(event)=>{
  sidebar.classList.toggle('toggle-cart');
})


var allProducts=[];
var element = "";
let carts = [];



const  addDataToHtml =()=>{
  for (var i = 0; i < allProducts.length; i++) {
    element = element + `
      <div id="cards "  style=' background-image: linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% );  text-align: center; margin: 10px 20px; height: 390px; border: 1px solid black; width: 250px; color:white; border-radius: 10px;'>
      <div style='  height:45%; margin:5px'><img class="imgSize" src=${allProducts[i].src1} alt=""></div>
      <h3 style="font-family:serif; font-size:22px;">${allProducts[i].name}</h3>
      <h4 style='padding-top:10px;margin-top:10px; font-family:serif; font-size:22px;'>Price : ${allProducts[i].price}</h4>
      <h4 style='padding-top:10px; font-family:serif; font-size:22px;'>Free Delivery</h4>
      <div class="buttons">
      <button>Buy Now</button>
      <button class="add-cart" id="${allProducts[i].id}">Add to cart</button>
      </div>
      </div> </div>`;
    document.getElementById("Brandcards").innerHTML = element;
  }
  
}

const initApp=()=>{
  fetch('products.json').then(response => response.json())
  .then(data => {
    allProducts = data;
    addDataToHtml();
  })
}
initApp();


// cart

Brandcards.addEventListener("click" , (event) => {
  let positionClick = event.target;
  if(positionClick.classList.contains('add-cart')){
    let ProductId = positionClick.id;
    addToCart(ProductId);
    // console.log(allProducts[ProductId].name);

  }
})

const addToCart =(ProductId)=> {
  let positionOfCartProduct = carts.findIndex((value) => value.product_id == ProductId)
  if (carts.length <= 0){
    carts = [{
      product_id : ProductId,
      product_src : allProducts[ProductId].src1,
      name: allProducts[ProductId].name,
      src: allProducts[ProductId].src1,
      price: allProducts[ProductId].price,
      quantity :1 
    }]
  }else if (positionOfCartProduct < 0){
    carts.push({
      product_id : ProductId,
      product_src : allProducts[ProductId].src1,
      name: allProducts[ProductId].name,
      src: allProducts[ProductId].src1,
      price: allProducts[ProductId].price,
      quantity :1 
    })
  }else{
    carts[positionOfCartProduct].quantity = carts[positionOfCartProduct].quantity + 1;
   
  }

 addCartToHtml(ProductId);
}
// const store =[];
const addCartToHtml = (ProductId) => {
  
  // store.push(allProducts[ProductId])

  // listCart.innerHTML = '';
  //  if(carts.length > 0){
  //   carts.forEach ( cart => {
  //     let newCart = document.createElement('div');
  //     var cartsTotal = cartsTotal + cart.price ;
  //     console.log(cartsTotal);
  //     newCart.innerHTML= `
  //     <div class="cartDiv">
  //       <div class="cont2Div1 "><div class="fontSize"></div><img class="cartImg" src="${cart.product_src}"></div>      
  //       <div class="cont2Div1"><div class="fontSize"></div><div class="fontSize"><b>Quantity</b> ${cart.quantity}</div></div>      
  //       <div class="cont2Div1"><div class="fontSize"></div><div class="fontSize">${cart.name}</div></div>      
  //       <div class="cont2Div1"><div class="fontSize"></div><div class="fontSize">${cart.price}</div></div>      
  //     </div>`
  //     listCart.appendChild(newCart);

  //   })
  // }

  listCart.innerHTML = '';
  let cartsTotal = 0; // Initialize total price variable
  
  if (carts.length > 0) {
    carts.forEach(cart => {
      // Increment total price by price of each item multiplied by its quantity
      cartsTotal += (cart.price * cart.quantity);

      let newCart = document.createElement('div');
      newCart.innerHTML = `
        <div class="cartDiv">
          <div class="cont2Div1"><div class="fontSize"></div><img class="cartImg" src="${cart.product_src}"></div>      
          <div class="cont2Div1"><div class="fontSize"></div><div class="fontSize"><b>Quantity</b> ${cart.quantity}</div></div>      
          <div class="cont2Div1"><div class="fontSize"></div><div class="fontSize">${cart.name}</div></div>      
          <div class="cont2Div1"><div class="fontSize"></div><div class="fontSize">${cart.price}</div></div>      
        </div>`;
      listCart.appendChild(newCart);
    });
  }
  
  // Display total price
  cartTotal.innerHTML = `${cartsTotal}`;
}











