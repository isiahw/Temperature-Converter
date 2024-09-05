function convertTemperature(){
let option=prompt("enter your option as an F or C")

    if(option == "F"){
        let F=Number(prompt("Enter Temp"));
        document.getElementById("results").innerHTML="This is Celsius";
        
    }else if(option == "C"){
        let C=Number(prompt("Enter Temp"));
        document.getElementById("results").innerHTML="This is Fahrenheit";
    }
}

//     if(F>C){
//        document.getElementById("results").innerHTML="this is Celsius";
//     }else if(C>F){
//         document.getElementById("results").innerHTML="This is Fahrenheit";
//     }else{
//        document.getElementById("results").innerHTML="This temperature is unknown";
//     }
// }
// }

// document.getElementById("results").innerHTML="this is Celsius";
// if-else statement

// console.log((F * 9/5) + 32);

//  console.log((C - 32) * 5/9);