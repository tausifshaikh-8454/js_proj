

function genPass(length, includeNumbers, includeSpChars, includeUpper, includeLower){

    const passNumbers = "0123456789";
    const passSpcChars = "!@#$%^&*()_";
    const passLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const passUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let includedChars = '';
    let password = '';

    includedChars += includeNumbers ? passNumbers : '';
    includedChars += includeSpChars ? passSpcChars : '';
    includedChars += includeUpper ? passUpperCase : '';
    includedChars += includeLower ? passLowerCase : '';

    

    if(length <= 0){
        return `(please enter the valid length for the password)`;

    }

    if(includedChars.length == 0){
        return `(please select the type you want to genrate the password)`;
    }

    for (let i=0; i<length; i++){
        let passcharind= Math.floor(Math.random() * includedChars.length);
        
        password += includedChars[passcharind]
    }
    

    return password;
}









let genpassword = genPass(4, false, false, true, false)
console.log(`${genpassword}`)
