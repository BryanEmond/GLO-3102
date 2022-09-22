export class Toast{
    constructor(type,text,container){
        this.type = type;
        this.text =  text;
        this.container = container;
    }
    toast(){
        const toast = document.createElement("div");
        toast.className = this.type;
        toast.textContent = this.text;
        this.container.appendChild(toast);

        setTimeout(()=>toast.remove(),5000);
    }
}