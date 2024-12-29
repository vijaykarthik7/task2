// // // // function dog(){
// // // //     setTimeout(()=>{
// // // //         console.log("j")
// // // //     },2000);
// // // // }
// // // // function cat(){
// // // //     console.log("hello");
// // // // }
// // // // dog();
// // // // cat(); The above is executed when cat and then after 2secs then the dog will be executed

// // // // function dog(callback){
// // // //     setTimeout(()=>{
// // // //         console.log("j")
// // // //         callback();
// // // //     },2000);
// // // // }
// // // // function cat(){
// // // //     console.log("hello");
// // // // }
// // // // dog(cat);
// // // // //Here we passing the function to another is called the callback function 


// // // function attendnance(lunch){
// // //     setTimeout(()=>{
// // //         console.log("Attendnance Created");
// // //         lunch();
// // //     },1000)
// // // }
// // // function lunch(gohome){
// // //     setTimeout(()=>{
// // //         console.log("Get the Lunch");
// // //         gohome();
        
// // //     },2000)
// // // }
// // // function goingtoHome(callback){
// // //     setTimeout(()=>{
// // //         console.log("Going Back Home");
// // //         callback();
        
// // //     },3000)
 
// // // }
// // // //To call the lunch insde the attendnance and the goingthohome inside the lunch
// // // attendnance(()=>{
// // //     lunch(()=>{
// // //         goingtoHome(()=>{
// // //             console.log("Day Complweted");
// // //         })
// // //     })
// // // })
// // // //The above is callback is callback hell

// // // //Promise function is used to get the atleast one output reject and resolve is used to avoid call back promise is used

// // // function attendnance(lunch){
// // //     setTimeout(()=>{
// // //         console.log("Attendnance Created");
// // //         lunch();
// // //     },1000)
// // // }
// // // function lunch(gohome){
// // //     setTimeout(()=>{
// // //         console.log("Get the Lunch");
// // //         gohome();
        
// // //     },2000)
// // // }
// // // function goingtoHome(callback){
// // //     setTimeout(()=>{
// // //         console.log("Going Back Home");
// // //         callback();
        
// // //     },3000)
 
// // // }
// function attendnance(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let ap=true;
//             if(ap){
//                 resolve("App");
//             }
//             else{
//                 reject("NoPP");
//             }
//         },1500)
//     })
// }
// // //attendnance().then((op)=>console.log(op)).catch((error)=>console.error(error))
             
// function brain(){
//     return new Promise((resolve,reject)=>{
//         let h=true;
//         if(h){
//             resolve("Your Brain Promised Me");
//         }
//         else{
//             reject("You Rejected");
//         }

//     }
// )
// }
// // brain().then((op)=>{console.log(op); return attendnance();})
// // .then((op)=>{console.log(op);console.log("Hello");})
// // .catch((error)=>console.error(error));//the op is resolve or reject that is printed

// async function finalday(){
//     try{
//         let att=await attendnance();
//         console.log(att);
//         let has=await brain();
//         console.log(has)
//     }
//     catch(error){
//         console.error("Error");

//     }
// }
// finalday();


function bein(a,callback){
    setTimeout(()=>{
        console.log(`File${a} started processing`)
       
    },1000)
    setTimeout(()=>{
        console.log(`File${a}  processed`)
        callback(a);
       
    },3000)
    
}
function down(fie){
    setTimeout(()=>{
        console.log(`File ${fie} downloded `)
    },5000)
}
bein("ABC",down)