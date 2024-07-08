var num = [[1,8,3],[7,5,6], [7,13,9]]
var num2 = [[10,26,8], [12,20,2], [17,3,13]];
var result = [];

for (var i = 0; i < num.length; i++) {
    result[i] =[];
    for (var j = 0; j < num[i].length; j++) {
        result[i][j] = num[i][j] + num2[i][j];
    }
}

for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result[i].length; j++) {
        document.write(result[i][j] + " ")
    }
    document.write("<br/>")
} 
//calculator 

// let num1 = +prompt( "Enter a number");
// let num2 = +prompt("Enter a number");
// let opretor = prompt("enter a opretor");
// function calcultor (num1,num2,opretor){
//     if(opretor === "+"){
//         document.write(num1 +" "+ num2 +" "+ opretor)
//     }
// }
//global values kahta ha
// let a = 23;
// let b = 45;
// function sum (a,b){
//     return a+b;
// }
// console.log(sum(a,b));

function even(num){
   return num % 2 === 0;
}
console.log(even(6));

function odd(num){
    return num % 3 === 0;
 }
 console.log(odd(7));

 //chap switch statment

 let dayOfWk ="saturday";
 switch(dayOfWk) {
     case "monday" :
    document.write("today is monday"); 
     break;
     case "tuesday" :
        document.write("today is tuesday"); 
    break;
    case "wenesday" :
        document.write("today is wenesday"); 
     break;
     case "thrusday" :
        document.write("today is thrusday");
        break;
        case "friday" :
            document.write("today is friday")
            break;
            case "saturday" :
                document.write("today is saturday");
                break;
     default :
     document.write("Shoot me now!");
     }
     // chap 40
     let dayOfWk1 = 3
     switch(dayOfWk1) {
         case 1 :
         alert("Whoopee");
         break;
         case 2 :
         alert("Whoopee");
        break;
         case 3 :
         alert("TGIF!");
        break;
         default :
        alert("Shoot me now!");
     }

     let months = "april"
     function getmonth(months) {
        switch(months){
            case "january":
            document.write("it's january");
            break;
            case "feburary":
            document.write("it's feburary");
            break;
            case "march":
            document.write("it's march");
            break;
            case "april":
            document.write("it's april");
            break;
            case "may":
            document.write("it's may");
            break;
            case "june":
            document.write("it's june");
            break;
            case "july":
            document.write("it's july");
            break;
            case "august":
                document.write("it's august");
                break;
                case "september":
                    document.write("it's september");
                    break; 
                    case "october":
                    document.write("it's october");
                    break;
                    default:
                        document.write("it's not working");
        }
        }
        console.log(getmonth(months));

        // q

        // Write a function called calculateDiscount that takes two parameters: productType 
        //(a string indicating the type of product) and price (a number representing the original price of the product).
        // The function should calculate and return the discounted price based on the following rules using a switch-case statement:
        // If productType is "Electronics", apply a 10% discount.
        // If productType is "Clothing", apply a 20% discount.
        // If productType is "Books", apply a 15% discount.
        // For any other productType, return the original price without any discount.
        // Round the discounted price to two decimal places before returning it.
        function calculatediscount(prducttype,price){
            let discount ;
            switch(prducttype){
                case  "Electronic":
                    discount = price *0.01;
                    break;
             case  "Clothing":
                    discount = price *0.02;
                    break;
              case "Books":
                    discount = price *0.15;
                    break;
                    default:
                        console.log("original price");
                        break;    
            }
            let discountprice = (price - discount).toFixed(2);

            return discountprice;
        }
     console.log(calculatediscount("Electronic",80));
     console.log(calculatediscount("Electronic",400));
     console.log(calculatediscount("Clothing",350));
     console.log(calculatediscount("Book",120));

     // q 

