const products = [{
    productId:1,
    productName:"apple",
    description:"The hightech featured mobile",
    price:700000,
    stock:25000,
    category:"electronic",
    tags:['mobile','laptops','Ipad'],
    discount:{value:25,type:"percentage"}
},
{
    productId:2,
    productName:"samsung",
    description:"The hightech featured mobile",
    price:800000,
    stock:5000,
    category:"electronic",
    tags:['mobile','laptops','Ipad'],
    discount:{value:50,type:"percentage"}
}

]
const displayproduct = (product)=>{
    console.log("the products")
for(const key in product){
    if(key!=="tags"){
        console.log(`${key}:${product[key]}`)
    }
    else{
        console.log(`${product.tags.join(',')}`)
    }
}
}
const filterproducts = (category) =>{
    return products.filter((product) =>product.category===(category))
}
const findproduct = (productId) =>{
    return products.find((product) => (product.productId)===productId)
}
const discountmodule = (()=>{
    const applydiscount = (product,discount )=>{
        if(product.discount && discount.type=="percentage"){
   return product.price -= product.price*(discount.value/100)
        }
        else{
 return product.price - discount.value
        }
    }
return{
    applydiscount:applydiscount
}
})();
const updateStack = (productId,quantity) =>{
const productIdtostack = findproduct(productId)
productIdtostack.stock=quantity
if(productIdtostack){
    console.log(`the productid ${productId} stack is update as ${quantity}`)
}
else{
    console.log("the product is missing")
}
}
const addtag = (productId , tag) =>{
    const product =findproduct(productId)
    if(product){
        if(!product.tags.includes(tag)){
            console.log(`in ${productId} the ${tag} added`)
        }
        else{
            console.log(`tag is already in ${productId}`)
        }
    }
}
const removeProduct = (productId) => {
    const index = products.findIndex((Id) => Id.productId === productId);
    if (index !== -1) {
      products.splice(index, 1);
      console.log(`Product with ID ${productId} removed.`);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  };
  const calculateTotalValue = () => {
    let totalValue = 0;
    for (const product of products) {
      totalValue += product.price * product.stock;
    }
    console.log(`Total value (var): ${totalValue}`);
  };
  

console.log("----product display---")
products.forEach((product)=>displayproduct(product))

console.log("----filter--")
const electronicproduct = filterproducts("electronic")
electronicproduct.forEach((product) => displayproduct(product))

console.log("--find product---")
const product2 = findproduct(2)
if(product2){
displayproduct(product2)
}else{
    console.log("the product ID is not found")
}
console.log("---apply discount--")
const discount1 = findproduct(1)
discountmodule.applydiscount(discount1,{value:25 , type:"percentage"})
displayproduct(discount1)

console.log("---update stack--")
updateStack(2,120)
displayproduct(findproduct(2))

console.log("---add tag--")
addtag(1, 'drone')
addtag(1, 'adopter')
displayproduct(findproduct(1))
console.log("\n--- Remove Product ---");
removeProduct(1);
console.log("--- Products after deletion ---");
products.forEach((product) => displayproduct(product));
console.log("\n--- Total Value ---");
calculateTotalValue();