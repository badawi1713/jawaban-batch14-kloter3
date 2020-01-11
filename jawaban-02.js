// Fungsi validasi username
function usernameValidity(username) {
  // Regex dengan kombinasi diawali huruf kecil (a-z) dan bisa diikuti oleh huruf kapital (A-Z) atau karakter "_"
  var usernameRegex = /^[a-z][a-z_]{5,12}/;

  // Cek kombinasi username dengan Regex yang digunakan dengan panjang 5-12 karakter
  if (username.match(usernameRegex)) {
    return true;
  } else {
    return false;
  }
}

// Fungsi validasi password
function passwordValidity(password) {
  // Karakter validasi untuk password dengan panjang pas 7 karakter dengan kombinasi 5 huruf kapital, 1 angka, dan 1 karakter spesial '@$!%*#?&.,/()'
  var passwordRegex = /^(?=.*[A-Z]{5})(?=.*\d)(?=.*[@$!%*#?&.,/()])[A-Za-z\d@$!%*#?&.,/()]{7}/;
  //Dibuat dari: https://www.regextester.com/104030

  if (password.match(passwordRegex)) {
    return true;
  } else {
    return false;
  }
}

// Hasil pengecekah username dengan fungsi "is_username_valid()"
console.log("Username check: ");
console.log(usernameValidity("friska_putri")); //true
console.log(usernameValidity("friska")); //true
console.log(usernameValidity("friska_33")); //true
console.log(usernameValidity("_friska")); //false
console.log(usernameValidity("fri_")); //false
console.log(usernameValidity("Friska-putri")); //false

console.log("----------------------------------");

console.log("Password check: ");
console.log(passwordValidity("1WORLD!")); //true
console.log(passwordValidity("WORLD!2")); //true
console.log(passwordValidity("?BUYER2")); //true
console.log(passwordValidity("WORD1!")); //false
console.log(passwordValidity("WORLD22")); //false
console.log(passwordValidity("world!!")); //false
console.log(passwordValidity("World!!")); //false
