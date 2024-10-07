
// all button  js fetch lodefile start
const lodeContainer=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=>displaybutton(data.categories))
    .catch(error=>console.log(error))
    
}
lodeContainer();// all button  js fetch lodefile End

// all button  js fetch Display start
const displaybutton=(id)=>{
 id.forEach((button) => {
//   console.log(button)
    // console.log(button.category)
  const buttonSection=document.getElementById('section-continer');
  const cariatButton=document.createElement('div');
  cariatButton.innerHTML=`
  <div class="flex ">
  <button onclick="loadContainar('${button.category}')" class=" btnContent  btn btn-sm md:btn-lg">
  <img class="w-3 md:w-8"  src="${button.category_icon} "/>
  ${button.category}</button>
  </div>
  `
  
//   console.log(button.category_icon)
  buttonSection.appendChild(cariatButton)
 })
}// all button  js fetch Display End
// button style start
const buttoncolor=()=>{
  const btnstyle=document.getElementsByClassName('btnContent');
             
  // console.log(btnstyle)
}// button style and

// Loade all pats start
const loadepasts=()=>{
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then((data)=>displaypasts(data.pets))
    .catch(error=>console.log(error))
}
loadepasts();
// Loade all pats End

// dipslay pasts start
const displaypasts=(id)=>{
  const card=document.getElementById('card');
  card.innerHTML="";
  id.forEach((aitem) => {
   console.log(aitem)
 
  //  console.log(aitem.image)
   const addcard=document.createElement('div');
  
   addcard.innerHTML=`<div class="card m-5 bg-base-100  shadow-xl  ">
  <figure class="px-10 pt-10 " >
    <img
      src="${aitem.image}"
      alt=""
      class="rounded-xl w-full" />
  </figure>
  <div class="card-body  ">
    <h2 class="font-bold text-[#131313] text-xl">${aitem.pet_name}</h2>
    <h1 class="text-base font-normal text-slate-600"><span><i class="fa-solid fa-qrcode"></i><span>  breed : ${aitem.breed}</h>

    <h1 class="text-base font-normal text-slate-600"><i class="fa-regular fa-calendar"></i><span>  Birth : ${aitem.date_of_birth}</h>

      <h1 class="text-base font-normal text-slate-600"><i class="fa-solid fa-transgender"></i><span>  Gender : ${aitem.gender}</h>
    
      <h1 class="text-base font-normal text-slate-600"><i class="fa-solid fa-dollar-sign"></i>  Price : ${aitem.price}$ </h>

       <div class="divider"></div>
<div class="card-actions">
      <button onclick="likedisplay('${aitem.image}')" class="btn">
      <img class="w-10 " src="images/like.webp" alt="">
      </button>
      <button class="btn text-lime-900 font-bold text-lg">Adopt</button>
      <button class="btn text-lime-900 font-bold text-lg">Details</button>
    </div>
  </div>
</div>
    
   `
   
 //   console.log(button.category_icon)
   card.appendChild(addcard)
  })
}


// button chcae your containar start
const Capbutton=((id)=>{
 document.getElementById('loading').style.display='none'
 fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
 .then((res)=>res.json())
 .then((data)=>displaypasts(data.data))
 .catch(error=>console.log(error))
})
// button chcae your containar End

const likedisplay =(id)=>{
  
      const sectionContent=document.getElementById('like-to-add')
      const addImages =document.createElement('div')
        // addImages.src=id
       
       
      addImages.innerHTML=`
      <img class="p-2 h-full w-22 rounded-xl" src="${id}"/>
      `
      sectionContent.appendChild(addImages)
}

const loadContainar=(id)=>{
  document.getElementById('loading').style.display='block';
  document.getElementById('containerpic').style.display='none';
  setTimeout(function(){
    document.getElementById('containerpic').style.display='block';
    Capbutton(id);
  },1000)

}


