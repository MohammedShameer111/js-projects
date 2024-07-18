document.addEventListener("DOMContentLoaded", function () {
  const itemArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

  console.log(itemArray);

  document.querySelector("#enter").addEventListener("click", () => {
      const item = document.querySelector("#item");
      createItem(item);
  });

  function createItem(item) {
      itemArray.push(item.value);
      localStorage.setItem("items", JSON.stringify(itemArray));
      location.reload();
  }

  function displayitems(){
    let items="";
    for(let i=0;i<itemArray.length;i++){
      items+=`<div class="item">
    <div class="input-controller">
      <textarea disabled>${itemArray[i]}</textarea>
      <div class="edit-controller">
        <i class="fa-solid fa-check deletebtn"></i>
        <i class="fa-solid fa-pen-to-square editbtn"></i>

      </div>
    </div>
    <div class="update-controller">
      <button class="savebtn">Save</button>
      <button class="cancelbtn">Cancel</button>

    </div>
  </div>`

  document.querySelector(".to-do-list").innerHTML=items;
  activeDeleteListener();
  activeEditListener();
  activeSaveListener();
  activecancelListener();

    }
  }

  function activeDeleteListener(){
    let deletebtn=document.querySelectorAll(".deletebtn");
    deletebtn.forEach((db,i)=>{
      db.addEventListener("click",()=>{deleteitem(i)})
    })
  }

  function activeEditListener(){
    const editbtn=document.querySelectorAll(".editbtn");
    const updatecontroller=document.querySelectorAll(".update-controller");
    const inputs=document.querySelectorAll(".input-controller textarea");
    editbtn.forEach((eb,i) =>{
      eb.addEventListener("click",()=>{
        updatecontroller[i].style.display="block";
        inputs[i].disabled=false;

      })

    })
  }

  function activeSaveListener() {
    const savebtn=document.querySelectorAll(".savebtn");
    const inputs=document.querySelectorAll(".input-controller textarea");
    savebtn.forEach((sb,i)=>{
      sb.addEventListener("click",()=>{
        updateItem(inputs[i].value,i)

      })
      
    })
  }
    function activecancelListener() {
      const cancelbtn=document.querySelectorAll(".cancelbtn");
      const updatecontroller=document.querySelectorAll(".update-controller");
      const inputs=document.querySelectorAll(".input-controller textarea");
      cancelbtn.forEach((cb,i)=>{
        cb.addEventListener("click",()=>{
          updatecontroller[i].style.display="none";
          inputs[i].disabled=true;
  
        })
        
      })
    
    }
    function updateItem(text,i){
      itemArray[i]=text;
      localStorage.setItem("items",JSON.stringify(itemArray));
      location.reload();
    }

    

  function deleteitem(i){
    itemArray.splice(i,1);
    localStorage.setItem("items",JSON.stringify(itemArray));
    location.reload();
  }

  function displayDate() {
      let date = new Date();
      date = date.toString().split(" ");
      document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
  }

  displayDate();
  displayitems();

});
