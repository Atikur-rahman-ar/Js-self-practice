const accountId = 144553
let accountEmail = "atik@google.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

// accountId = 2 // not allowed


accountEmail = "at@hc.com"
accountPassword = "21212121"
accountCity = "Kushtia"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])