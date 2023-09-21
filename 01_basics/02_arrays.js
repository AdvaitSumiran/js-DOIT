const marvel_heroes = ["Ironman","Thor","Spiderman"]
const dc_heroes = ["Superman","flash","batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)


const new_heroes = marvel_heroes.concat(dc_heroes)
console.log(new_heroes)

const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)


const another_array = [1,2,3,[4,5,6],7]

const real_another_array =  another_array.flat(Infinity)
console.log(real_another_array)

const askarr = "Advait"
console.log(Array.isArray(askarr))
console.log(Array.from("Hitesh"))


console.log(Array.from({name:"Advait"}))// something new

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

console.log(Array.of(score1,score2,score3))
console.log(Array.of("Advait Sumiran"))