

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
  //  console.log(id)
if(id.length==0){
  
  card.classList.remove('grid')
  card.innerHTML=`
  <div class="mt-20 mb-32 mx-auto text-center w-11/12">
  <img class="w-5/12 mx-auto" src="images/error.webp" alt="">
  <h1 class="font-bold text-3xl">No Information Available</h1>
  <p class="text-base font-normal">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
  </div>
 `

  return;
}


  id.forEach((aitem) => {
  //  console.log(aitem.petId)
   const addcard=document.createElement('div');
  //  console.log(aitem.price)
   addcard.innerHTML=`<div class="card m-5 bg-base-100  shadow-xl  ">
  <figure class="px-10 pt-10 " >
    <img
      src="${aitem.image}"
      alt=""
      class="rounded-xl w-full" />
  </figure>
  <div class="card-body  ">
    <h2 class="font-bold text-[#131313] text-xl">${aitem.pet_name}</h2>
   <h1 class="text-base font-normal text-slate-600"><span><i class="fa-solid fa-qrcode"></i><span>  breed : ${aitem.breed==null ? "Not available":aitem.breed}</h>
   
     <h1 class="text-base font-normal text-slate-600"><i class="fa-regular fa-calendar"></i><span>  Birth : ${aitem.date_of_birth==null ? "Not available":aitem.date_of_birth}</h>


   

      <h1 class="text-base font-normal text-slate-600"><i class="fa-solid fa-transgender"></i><span>  Gender : ${aitem.gender==null ? "Not available":aitem.gender}</h>
    
      <h1 class="text-base font-normal text-slate-600"><i class="fa-solid fa-dollar-sign"></i>  Price : ${aitem.price==null ? "Not available":aitem.price}$ </h>

       <div class="divider"></div>
<div class="card-actions">
      <button onclick="likedisplay('${aitem.image}')" class="btn">
      <img class="w-10 " src="images/like.webp" alt="">
      </button>
      <button class="btn text-lime-900 font-bold text-lg">Adopt</button>
      <button onclick="CardDetails(${aitem.petId})" class="btn text-lime-900 font-bold text-lg">Details</button>
    </div>
  </div>
</div>
    
   `
   
 //   console.log(button.category_icon)
   card.appendChild(addcard)
  })
}

// displaypasts(data.data)
// button chcae your containar start
const Capbutton=((id)=>{
 document.getElementById('loading').style.display='none'
 fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
 .then((res)=>res.json())
 .then((data)=>{displaypasts(data.data)
 })

 .catch(error=>console.log(error))
})
// button chcae your containar End

const likedisplay =(id)=>{
  
      const sectionContent=document.getElementById('like-to-add')
      const addImages =document.createElement('div')
        // addImages.src=id
       
       
      addImages.innerHTML=`
      <img class="p-2 h-full w-22 rounded-xl card bg-base-100  shadow-xl" src="${id}"/>      `
      sectionContent.appendChild(addImages)
}

const loadContainar=(id)=>{
  document.getElementById('loading').style.display='block';
  document.getElementById('containerpic').style.display='none';
  setTimeout(function(){
    document.getElementById('containerpic').style.display='block';
    Capbutton(id);
  },2000)

}
// Details button click  id your id 
const CardDetails=async(id)=>{
  const uri=`https://openapi.programming-hero.com/api/peddy/pet/${id}`
  const res=await fetch(uri);
  const data = await res.json();
  dispalayCard(data.petData)
}

const dispalayCard=(id)=>{
  const content=document.getElementById('modeldatelis');
  content.innerHTML=`
  <img class="mb-4 min-w-full"  src=${id.image}/>
<h2 class=" mb-4 text-2xl font-semibold">${id.pet_name==null ? "Not available":id.pet_name} </h2>

<div class="flex mb-4">
<div>
<p><i class="fa-solid  fa-qrcode "></i>    Breed: ${id.breed==null ? "Not available":id.breed}</p>
  <p ><i class="fa-regular fa-calendar"></i>  birth: ${id.date_of_birth==null ? "Not available":id.date_of_birth}</p>
  <p ><i class="fa-solid fa-transgender"></i> Gender: ${id.gender==null ? "Not available":id.gender}</p>

</div>
<div>
<p class="ml-10 "><i class="fa-solid fa-dollar-sign"></i> price: ${id.price==null ? "Not available":id.price} <i class="fa-solid fa-dollar-sign"></i></p>
<p class="ml-10  "><i class="fa-solid fa-transgender"></i> Vaccinated Status: ${id.vaccinated_status==null ? "Not available":id.vaccinated_status}</p>

</div>
</div>
<div class="divider"></div>
<h1 class="font-semibold mb-4 text-4xl">Details Information</h1>
<h2>${id.pet_details==null ? "Not available":id.pet_details} </h2>

  `
  document.getElementById("myModal").showModal();

} 
// sort by price funtion
  const SortButton=()=>{
    alert('add sort price')
  }






