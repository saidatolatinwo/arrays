let trainees = ["rofiaht","agba","usman"];
let scores = [0,5,3];
let mixed = [true,0,"this is a mixed array"]
console.log(scores)


let colors = ["red","green","blue"];
console.log(colors.length)

colors.push("yellow");
console.log(colors)

colors.pop("brown");
console.log(colors)

colors.shift("white");
console.log(colors)

colors.unshift("black");
console.log(colors)

//concat()
let name = ["saidat","rofihat","barakat"];
let age = [10,20,30];
let all = name.concat(age)
console.log(all)
//creates a new array by merging existing arrays

//includes()
let country = ["nigeria","ghana","kenya"]
console.log(country.includes("ghana"));
//it allows us to check if an element is present in an arrays

//indexOf()
const food = ["rice","beans","yam"];
let index = food.indexOf("beans");
console.log(index);
//array element are accessed using their index number

//join()
const fruit = ["orange","mango","apple"];
let text = fruit.join();
console.log(text);
//it joins all array elements into a string

//reverse()
const score = [1,2,3,4];
score.reverse();
console.log(score);
//it reverse the elements in an array

//slice()
const state = ["kwara","lagos","osun","abia"];
const town = state.slice(1,3);
console.log(town);
//it slice out a piece of an array

//splice()
const place = ["kwara","lagos","osun","abia"];
place.splice(2, 0, "kaduna", "kano");
console.log(place); 
//it add new items to an array

//sort()
const item = ["table","chair","stool","bench"]
item.sort();
console.log(item);
//it sorts an array alphabetically