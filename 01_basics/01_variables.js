const accountId = 56862 // this will be constance will not be change
let accountEmail = "harshat@accountEmail.com"
var accountPassword = "123456"
accountCity = "Pune"
let accountState;

// accountId = 23  //not allowed

accountEmail = "hb@email.com"
accountPassword = "2526"
accountCity = "Nagpur"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])