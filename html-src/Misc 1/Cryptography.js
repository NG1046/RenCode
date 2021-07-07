
const Base32_Crockford = require("base32-crockford");

function MessageEncrypt(Textx){

    var cockBit1 = Base32_Crockford.encode(Textx); // YourBoyfriend
    var cockBit2 = Base32_Crockford.encode(cockBit1);
    var cockBit3 = Base32_Crockford.encode(cockBit2);
    var cockBit4 = Base32_Crockford.encode(cockBit3);
    var cockBit5 = Base32_Crockford.encode(cockBit4);
    var cockBit6 = Base32_Crockford.encode(cockBit5);
    var cockBit7 = Base32_Crockford.encode(cockBit6);
    var cockBit8 = Base32_Crockford.encode(cockBit7);
    var cockBit9 = Base32_Crockford.encode(cockBit8);
    var cockBit10 = Base32_Crockford.encode(cockBit9);
    var cockBitFinal = Base32_Crockford.encode(cockBit10);

    console.log(cockBitFinal);

    return cockBitFinal;

}

function MessageDecrypt(Textx){

    var cockBit1 = Base32_Crockford.decode(Textx);
    var cockBit2 = Base32_Crockford.decode(cockBit1);
    var cockBit3 = Base32_Crockford.decode(cockBit2);
    var cockBit4 = Base32_Crockford.decode(cockBit3);
    var cockBit5 = Base32_Crockford.decode(cockBit4);
    var cockBit6 = Base32_Crockford.decode(cockBit5);
    var cockBit7 = Base32_Crockford.decode(cockBit6);
    var cockBit8 = Base32_Crockford.decode(cockBit7);
    var cockBit9 = Base32_Crockford.decode(cockBit8);
    var cockBit10 = Base32_Crockford.decode(cockBit9);
    var cockBitFinal = Base32_Crockford.decode(cockBit10); // YourBoyfriend

    console.log(cockBitFinal);

    return cockBitFinal;

}