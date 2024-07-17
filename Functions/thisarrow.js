const user = {
    username:"sritham",
    price:999,
    
    welcomeMessage: function(){
        console.log('${this.username}welcome to website');

    }

}
user.welcomeMessage()

function chai(){
    let username="sritham"
    console.log(this.username);
}

chai()

const chai = () => {
    let username="sritham"
    console.log(this.username);

}

curly bracers- return keywoard-explicit nretue

(num1 +num2)-no retun keywoard-implicit return