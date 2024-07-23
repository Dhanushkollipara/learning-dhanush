// ForInLoop
// let coursemern = new Object();
// coursemern.duration = "2 months";
// coursemern.location = "Bangalore";
// coursemern.studentsNo = 12;
// coursemern.faculty = "Sumit";

// for(let i in coursemern){
//     alert(coursemern[i]);
// }


//program to find the greatest of all the numbers
// function great(){
//     let max = arguments[0];
//     for(let i in arguments)
//     {
//         if(arguments[i]>max){
//             max = arguments[i];
//         }
//     }
//     alert(max)
// }

// great(1,5,10,3);



//ex :- input : 3 output : 2+4+6 = 12
// function sumEven(){
//     let s = arguments[0];
//     let sum = 0;
//     let i=0;
//     while(i<s){
//         sum = sum+(2*(i+1));
//         i++;
//     }
//     alert(sum);
// }

// sumEven(4);


//Variable Scope - 1
// var n1 = "Dhanush"
// alert(`studentName = ${n1}`);
// {
//     var n1 = "Kollipara";
//     alert (`studentname inside block is ${n1}`);
// }

// alert(`student name after block ${n1}`)


//Variable Scope - 2
// let sname = "Dhanush"
// alert(`studentName = ${sname}`);
// {
//     let sname = "Siva"
//     alert(`studentName inside curly braces = ${sname}`);
//     {
//         alert(sname);
//         {
//             let sname = "Rohit"
//             alert(`studentName = ${sname}`);
//         }
//         alert(sname);
//     }
// }

// //Const variable
// const favdish = ['pizza','Burger','Butter naan','Biryani'];
// favdish.push("Curd rice");

// const studob = {
//     name:'Dhanush',
//     favdish:'Veg Dosa'
// }

// studob.native = 'Guntur';
// console.log(favdish);

// const sname = "Dhanush"
// alert(`studentName = ${sname}`);
// {
//     const sname = "Siva"
//     alert(`studentName inside curly braces = ${sname}`);
//     {
//         alert(sname);
//         {
//             const sname = "Rohit"
//             alert(`studentName = ${sname}`);
//         }
//         alert(sname);
//     }
// }



//Hoisting :- while using var, variable can be declared after using it. It doesnt hold true for let.
// stu = "Dhanush";
// alert(stu);
// var stu;


//Declaration of string by 2 ways
// let sname = "Dhanush";
// let stname = new String ("Kollipara");
// alert(sname.length);
// alert(typeof(sname));
// alert(typeof(stname));


//getElementsByTagName always returns an array of all the tags in order. They can be accessed by indexing.
//getElementsByClassName also follows same.


//queryselector selects elements based on the css syntax
//queryselectorAll selects all the elements based on the css syntax like ".classname", "#id name"

formobj = {};
formvalues = new Array();
function submitform(){
    let nameob = document.querySelectorAll("input");
        nameob.forEach(el => {
        formvalues.push(el.value);
        });
        let dataInJSON = JSON.stringify(formvalues);
    //let name = nameob.value;
    localStorage.setItem("Details stored in the form are :",dataInJSON);
    //alert("Fname Store");
}


function clearform(){
    localStorage.removeItem("Details stored in the form are :");
    formvalues= [];
}

function showform(){
    let data = localStorage.getItem("Details stored in the form are :");
    let convertedbackdata = JSON.parse(data);
    convertedbackdata.forEach((item) => {
        console.log(item);
    });
}


/* let studentsname = ["Dhanush","Siva","Rohit"];
console.log(typeof(studentsname));
let studentsJSON = JSON.stringify(studentsname);
console.log(studentsJSON);
console.log(typeof(studentsJSON));
let convertedbackdata = JSON.parse(studentsJSON);
console.log(typeof(convertedbackdata));


let manualJsonstudent = '["Dhanush","Siva","Rohit"]';
let convertedbackdataone = JSON.parse(manualJsonstudent);
console.log(typeof(convertedbackdataone));
console.log(convertedbackdataone[1]); */












