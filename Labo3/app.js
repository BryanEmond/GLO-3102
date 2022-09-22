import { Toast } from "./toast.js";
const toastType = document.getElementById("toastType");
const toastInput = document.getElementById("toastInput");
[...document.getElementsByClassName("btnNotification")].forEach(btn =>{
    btn.addEventListener("click",(e)=>{
    if(toastInput.value !== ""){
        const toast = new Toast(
            e.target.dataset.type,
            toastInput.value,
            document.getElementById("toastContainer")
        )
        toast.toast();
    }
   
});
})
