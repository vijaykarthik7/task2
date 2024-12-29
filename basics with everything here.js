
// // /*function cat(){
// //     console.log("Cat");
// // }
// // cat()
// // function catt(){
// //     if(true){
// //         let a=5;    // Let can be used only inside the block
// //         console.log(a);
// //     }
    
// // }
// // catt()

// // console.log(b);//The output will be undefined where var is globally executed because
// // // there will var considered  as it is defined in anywhere in global so undefined
// // var b=7;


// // let student1={
// //     name:["abi","shoban"]
// // }
// // console.log(student1.name[1]);

// // let student=new Object();
// // student.name="A";
// // student.n=function () {
    
// //     console.log("Hello");
    
    
// // }

// // //let h=student.n();
// // console.log(student.n())

// // let z=5;
// // console.log(++z);
// // console.log(z++);

// // a=5;
// // console.log("s")
// // b=a++ + --a;
// // c=b++ + ++b;
// // a++;
// // console.log(a)
// // console.log(b);
// // console.log(c);
// // */
// // // m=15;
// // // if(m%3==0){
// // //     console.log("Hi");
// // // }
// // // if(m%5==0){
// // //     console.log("Hello")
// // // }


// // // let choice = [1, 2, 3].toString();
// // // switch (choice) {
// // //     case "1,2,3":  // Compare to the string "1,2,3"
// // //         console.log("Hai");
// // //         break;
// // //     default:
// // //         console.log("No match");
// // // }
// // //  if (false)
// // //     console.log("true");
// // // else
// // //     console.log("fls")
// // //  let a=1;
// // //  for(console.log('a');a<=3;console.log('b')){
// // //     console.log("c");
// // //     a++;
// // //  }
// // //  let h=1;
// // //  for(h=1;h<100;h++);
// // //  console.log("Hi");
// // //  console.log(h)
// // // while(){
// // //     console.log("Hi");
// // // } for and while if a condition fails not moves in but do while moves and executes and then checks condition

// // // function add(a,b){
// // //     console.log(a+b);
// // // }
// // // let a=1;
// // // let b=2;
// // // add(a,b);
 

// // // function add(a,b){
// // //     return a+b;
// // // }
// // // let a=1;
// // // let b=2;
// // // console.log(add(a,b));
 
// // // let a=()=>{
// // //     console.log(6+1);
// // // }
// // // a();
// // // let b=(c)=>{
// // //     console.log(c+1);
// // // }
// // // b(3);
// // //  let z=()=>{
// // //     return "hello"; 
// // //  }
// // //  console.log(z());


// // //  let b=(c)=>{
// // //     console.log(c+1);
// // // }
// // // b(3);

// // // let a=[1,2,3];
// // // let b=[1,2,...a];
// // // console.log(b);

// // // let a=10
// // // let b=a;
// // // // here only the values move to the b

// // // let a=[1,2,3];
// // // let b=a;
// // // //But here a gives the address of a values to the b so when changes done in the b then a will also changed but the spread operator only changes the values alone not the address

// // let a=[1,2,3];
// // let b=[4,5,6];
// // let c=[...a,...b];
// // console.log(c);

// // //Spread and rest operator will be same but it has differnbt
// //  function spread(x,...values){
// //     console.log(values);
// //  }
// //  spread(1,2,3,4);
// //  x will take the first value alone 1

// // let obj1={
// //     values:1,
// //     value:2
// // };
// // console.log(...Object.entries(obj1));
// // console.log(...Object.values(obj1)); or can be done by copying to another variabke
// // h={...obj1}


// //Destructing Operator where destructing and given to others
// // let a=[1,5,7,8,9];
// // let [b,c,x,...y]=a;
// // console.log(x);
// // console.log(y);

// // b will be 1
// // c =5
// // x=7
// // and y=8,9
// // Spread used for spreading of all values but rest combine the values same for destructing like rest

// let a={
//     name:"to",
//     age:19,
//     state:21

// };
// let {name,age}=a;
// console.log(age);
// the values defined the object should be defined here no any other values should be defined here

