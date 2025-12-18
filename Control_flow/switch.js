// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break; // break nahi likha hai tho eska baad puraka pura code print ho jaata (except default) esliya break likhna zaroot hai
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match")
        break;
}