let sumbtn=document.getElementById("sumbtn");
let inputname=document.getElementById("inputname");
let inputurl=document.getElementById("inputurl");
let tbody=document.getElementById("tbody");
let deletebtn=document.getElementById("delete")
let visitbtn=document.getElementById("visit")

let allproduct=[];

sumbtn.addEventListener("click",add)
if(localStorage.getItem("allproducts")!=null)
    {
        allproduct=JSON.parse(localStorage.getItem("allproducts"))
        display();
    }
    function add(){
        let product={
            name:inputname.value,
            url:inputurl.value,
        }
        allproduct.push(product)
        localStorage.setItem("allproducts",JSON.stringify(allproduct))
        display()
        inputname.value="";
        inputurl.value;


    }

    function clear(){
        inputname.value="";
        inputurl.value;

    }

    function display(){
        let cartona=``;
        for(let i = 0; i<allproduct.length; i++){
            cartona+=`
            <tr>
            <th>${i+1}</th>
            <th>${allproduct[i].name}</th>
            <th><button type="button" class="btn btn-success" id="visit" onclick="visititem(${i})">
            <i class="fa-solid fa-eye"></i>
            visit
            </button></th>
            <th><button type="button" class="btn btn-danger" id="delete" onclick="deleteitem(${i})">
            <i class="fa-solid fa-trash-can"></i>
            delete
            </button></th>
            
            </tr>
        
            `
        }
        tbody.innerHTML=cartona;
    }

    function deleteitem(index){
        allproduct.splice(index,1);
        localStorage.setItem("allproducts",JSON.stringify(allproduct))
        display()
        clear()

    }

    function visititem(index){
        window.open(allproduct[index].url);
    }






















