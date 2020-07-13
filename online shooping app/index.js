const json = `[
  { "name": "Men Jacket",       "price": 229, "cat": "Clothes",     "img":"./images/jacket1.webp" },
  { "name": "Men Jacket", "price": 499, "cat": "Clothes",    "img":"./images/jacket2.webp" },
  { "name": "Women Jacket",             "price": 200, "cat": "Clothes",    "img":"./images/jacket3.webp" },
  { "name": "Women Jacket",    "price": 399, "cat": "Clothes",  "img":"./images/womenjacket.webp" },
  { "name": "Women Bags",                "price": 522, "cat": "Bag", "img":"./images/bagset.jpg" },
  { "name": "Women Bag",                "price": 821, "cat": "Bag",    "img":"./images/women-bag.webp" },
  { "name": "laptop-backpack",                 "price": 150, "cat": "Bag",    "img":"./images/laptop-backpack.webp" },
  { "name": "Slippers",           "price":10, "cat": "shoes",   "img":"./images/slippers.jpg" },
  { "name": "Wrist Bands ",            "price": 281, "cat": "gifts",   "img":"./images/wristband.jpg" },
  { "name": "WifiExtender",                "price": 8781, "cat": "gifts",    "img":"./images/wifiExtender.jpg" }

]`
let items = 0;
let loginvalue = 0;
let main = document.querySelector('main')
let products = JSON.parse(json)

products.forEach(product => {
  main.innerHTML += `
  <div class="product">
      <img src='${product.img}' class="displayimage"      alt='${product.name}'>
      <h1>${product.name}</h1>
      <span>${product.cat}</span>
      <h4>$${product.price}</h4>
      <button class="cartbutton" onclick="addtocart(this)" >Add To Cart</button>
      
  </div>`


});




// home button display all content
function home() {
  products.forEach(product => {
    main.innerHTML += `
    <div class="product">
        <img src='${product.img}' class="displayimage"      alt='${product.name}'>
        <h1>${product.name}</h1>
        <span>${product.cat}</span>
        <h4>$${product.price}</h4>
        <button class="cartbutton" onclick="addtocart(this)" >Add To Cart</button>
        
    </div>`
  });
}



// filter on buttons
function searchfn(ele) {
  let products = document.querySelectorAll('.product');

  products.forEach(product => {
    let cat = product.querySelector('span').innerText.toUpperCase();
    if (cat.includes(ele.value.toUpperCase())) {
      product.style.display = 'inline-block'
    } else {
      product.style.display = 'none'
    }
  });
}



// search function
const search = (input) => {
  let userInput = input.value;
  let products = document.querySelectorAll('.product')

  products.forEach(product => {
    let name = product.querySelector('h1').innerText;
    let cat = product.querySelector('span').innerText;
    let price = product.querySelector('h4').innerText;

    if ((name + " " + cat + "" + price).toUpperCase().includes(userInput.toUpperCase())) {
      product.style.display = 'inline-block'
    } else {
      product.style.display = 'none'
    }
  })
}

// display the items in the cart text form

const cart = () => {
  let cartform = document.querySelector(`#cartitems`)

  if (loginvalue == 0) {
    alert("log in to see your cart details");
    console.log(loginvalue)
  
  } else if (loginvalue == 1) {
    console.log(loginvalue)


  
    if (items > 0) {
      alert("you have" + (items) + " items in your cart");
      cartform.style.display = "none"

      let carttextname = document.querySelector(`#itemname`)
    } else {
      alert("you have" + (items) + " items in your cart");
      cartform.style.display = "block"
    }
  }
}

// adding items in the cart

const addtocart = (ele) => {
  items += 1;
  if (items == 0) {
    alert("you have " + (items) + " in your cart")
  } else if (items > 0) {
    alert("you have " + (items) + "in your cart")
  }
}

// login form 
function enter() {
  document.getElementById("myform").style.display = "block"
}


function loginform() {
  let username = document.getElementById(`name`).value
  let password = document.getElementById(`password`).value

  if (username == "root" && password == "1234") {
    document.getElementById("myform").style.display = "none"
    alert("you are login")
     
    var enter=document.getElementById("enter");
    console.log(enter);

    loginvalue = 1;
    cart();
  } else {
    loginvalue = 0;
    alert("you have wrong inputs")
  }
}

var myform = document.getElementById(`myform`)

function closeform() {
  document.getElementById("myform").style.display = "none"
}
