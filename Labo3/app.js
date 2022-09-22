import { Toast } from "./toast.js";
const toastType = document.getElementById("toastType");
const toastInput = document.getElementById("toastInput");
document.getElementById("btnNotification").addEventListener("click",(e)=>{
    if(toastInput.value !== ""){
        const toast = new Toast(
            toastType.value,
            toastInput.value,
            document.getElementById("toastContainer")
        )
        toast.toast();
    }
   
});