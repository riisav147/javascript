const accountId = 2055991588
let accountEmail = "rishavsinghrajput@gmail.com"
var accountPass = "12345678"
accountCity = "Supaul"
let accountState;

// accountId = 2055991573 // not allowed

accountEmail = "rishavsingh122@gmail.com"
accountPass = "9735895"
accountCity = "Gurugram"

console.log(accountId)

/*
    prefer not to use var because of issue with block
    scoping and functional scoping;
*/

console.table([accountEmail,accountId,accountPass,accountState,accountCity]);
