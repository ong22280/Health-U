// const foodList = [
//     { name: "Egg" ,foods: ["friedEgg", "omlete", "friedRice"] },
//     { name: "Pork" ,foods: ["kaprow", "KT", "friedRice"] },
//     { name: "Rice" ,foods: ["omlete", "friedRice", "kaprow"] },
//     { name: "Noodle" ,foods: ["KT", "padthai", "ps"] },

// ]

// let likeFood = ["padthai", "omlete"]
export function RecommendFood(foodList, likeFood){
let likeIn = [], recommend=[]
//get foods

foodList.map(ing=>{
    likeFood.map(food=>{
        if(ing.foods.includes(food)&&likeIn.indexOf(ing.name)===-1)
        likeIn = likeIn.concat(ing.name)
    })
})
console.log(likeIn)

likeIn.map( ing =>{
    foodList.map(r=>{
        if(ing===r.name) 
        recommend = recommend.concat(r.foods)
    })
})
console.log("\nBefore unique :\n",recommend)
let recommendation =  [...new Set(recommend)];
console.log("\nafter filter\n", recommendation)

}