/*
JSON - JavaScript Object Notation, used for exchange data between server and web app
json files {key:value} or [value1,value2,value3] 
json.stringify():- js to json
json.parse():- json to js
[1,2,3],{key:value,key:value},[{},{},{}]
array of sting, object, arrat of objects
*/
const person = {
    name: "Sreekesh",
    age: 22,
    hobbies: ["Gym","Coding","Gaming"]
}
const jsonString = JSON.stringify(person)
console.log(jsonString)

const jsonPerson = `{
    "name": "Sreekesh",
    "age": 22,
    "hobbies": ["Gym","Coding","Gaming"]
}`
const parsedData = JSON.parse(jsonPerson)
console.log(parsedData)


fetch("sample.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))