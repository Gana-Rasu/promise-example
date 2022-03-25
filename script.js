let stocks = {
    fruits : ["apple","orange","peach"],
    toppings : ["choclate","peanut"],
    liquids : ["water","ice"]
}

let shop_is_open = true;
let icecream;
// creating a method which returns a promsise which takes two parameters
let order = (time,work)=>{


    // creating a new promise where reject and resolvev are inbuilt conditions
    // if the condition is met then problem is resolved yet the condition is rejected

  icecream =  new Promise((resolve,reject)=>{
        if(shop_is_open){
            setTimeout(()=>{
                // work function is created as a template so it can be manipulated seperatey every time
                resolve(work())
            },time)
            // time is also taken dynamically so it can be manipulated differently every time
         
        }
        else{
            reject(console.log("the shop is closed"));
        }
    })

    return icecream;

}


// calling the function witht the processed parameters
order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
   return order(2000,()=>console.log("production has started") );
})

.then(()=>{
    return order(2000,()=>console.log("cutting fruits") );
 })

 .then(()=>{
    return order(2000,()=>console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} is being added`) );
 })

 .then(()=>{
    return order(2000,()=>console.log("machine has been started") );
 })

 .then(()=>{
    return order(2000,()=>console.log(`${stocks.toppings[0]} was added`) );
 })

 .then(()=>{
    return order(2000,()=>console.log("ICECREAM SERVED") );
 })

 .catch(()=>{
     console.log("customer left");
 })

 .finally(()=>{
     console.log("day ended, shop is closed")
 })