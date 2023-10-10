//Logic to fill the table
let tb=document.querySelector("table")

let data=localStorage.getItem("passwords")
if(data==null){
    tb.innerHTML="no data to show";
}else{
    let arr=JSON.parse(data)
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
    

str=`<tr>
        <td>${element.website}</td>
        <td>${element.username}</td>
        <td>${element.password}</td>
        <td>${"Delete"}</td>
      </tr>
`
    }
}
tb.innerHTML=tb.innerHTML+str
console.log("working")
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("click")
    let passwords=localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords==null){
        let json=[];
        json.push({username:username.value,password:password.value})
        alert("Password Saved")
        localStorage.setItem("passowrds",JSON.stringify(json))
    }else{
let json=JSON.parse(localStorage.getItem("passwords"))
    }
})