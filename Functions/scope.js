
Global sccope
let a=10
const b =20
var c = 30

block scope
if (true){
    let a=10
    const b =20
    var c = 30
}

function one(){
    const username ="sritham"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
}