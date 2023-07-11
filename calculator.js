const display =document.querySelector(".display");
const buttons=document.querySelectorAll(".buttons");

// buttons.forEach((btn)=>{
//     btn.addEventListener('click',()=>{
//         if(btn.id ==="="){
//             display.value=eval(display.value); 
//         }
//         else if(btn.id ==="clr"){
//             display.value=" ";
//         }
//         else if(btn.id==="de"){
//             display.value=display.value.slice(0,-1) ; 
//               }
//         else {
//             display.value+=btn.id;
//         }
//     })
// })

buttons.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(btn.id==="equal") {
            display.value=eval(display.value);
        }
        else if(btn.id==="clr") {
            display.value=" ";
        }
        else if(btn.id=="de") {
            display.value=display.value.slice(0,-1);
        }
        else
        {
            display.value+=btn.id;
        }
    });
});


