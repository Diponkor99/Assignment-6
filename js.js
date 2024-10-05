console.log('add js file')
// all button  js fetch lodefile start
const lodeContainer=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=>displaybutton(data.categories))
    .catch(error=>console.log(error))
    
}
lodeContainer();
// all button  js fetch lodefile End

// all button  js fetch Display start
const displaybutton=(id)=>{
 id.forEach((button) => {
//   console.log(button)
  const buttonSection=document.getElementById('section-continer');
  const cariatButton=document.createElement('button');
  cariatButton.innerHTML=`
  <div class="flex">
  <button class="btn btn-sm md:btn-lg">
  <img class="w-3 md:w-8" src="${button.category_icon} "/>
  ${button.category}</button>
  </div>
  `
//   console.log(button.category_icon)
  buttonSection.appendChild(cariatButton)
 })

}
// all button  js fetch Display End
