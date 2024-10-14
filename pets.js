
const setSpinner = document.getElementById('spinner');
const spinnerContainer = document.createElement('div');
spinnerContainer.innerHTML = `
 <span class="loading loading-spinner loading-md"></span>

`
setSpinner.appendChild(spinnerContainer);

const petsContainer = document.getElementById('pets-container');

const loadAllData = async () => {
 
  setTimeout( async()=> {
  spinnerContainer.classList.add('hidden');
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    displayAllData(data.pets);
   
  },2000)
 

}
  // removeClass();
  //     const activeBtn = document.getElementById(`btn-${id}`)
  //   activeBtn.classList.add('active')
const removeClass = () => {
  const buttons = document.getElementsByClassName('category-btn');
  for (let button of buttons) {
    button.classList.remove('active')
  }
}

const loadCategoryPets = (category) => {
  spinnerContainer.classList.remove('hidden');
  petsContainer.classList.add('hidden')
  setTimeout(() => {
    
    spinnerContainer.classList.add('hidden')
    
    
     fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
          .then(res => res.json())
       .then(data => {
         
          removeClass();
          const activeBtn = document.getElementById(`btn-${category}`)
        activeBtn.classList.add('active')
         displayAllData(data.data)
       
      
        })
      .catch(error => console.log(error))
      petsContainer.classList.remove('hidden')
      },2000)
 


}

const loadClickedData = async () => {
 

  
    
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await response.json();
  
    displayCategory(data.categories)
  
  
  
}

const displayCategory = (categories) => {
  // div.classList.remove('hidden');
  
  const buttonContainer = document.getElementById('button-container');
  categories.forEach(value => {
   
    const { id, category_icon, category } = value;
   
   
    const buttonParent = document.createElement('div');
    // button.innerHTML=`<img class="w-5" src=${category_icon}/> <p>${category}</p>`
    // button.classList = 'btn '
    buttonParent.innerHTML =
     `
   <button id="btn-${category}"  onclick="loadCategoryPets('${category}')" class="btn px-15 py-0 bg-transparent border-2 category-btn"><img class="w-5" src=${category_icon}/> <p>${category}</p> </button>
    `
    
    buttonContainer.appendChild(buttonParent);
  })
}




const displayAllData = (values) => {
 
    
    // console.log(values)
  const petsContainer = document.getElementById('pets-container')
  petsContainer.innerHTML = "";
  
  if (values.length === 0) {
    petsContainer.classList.remove('grid')
    petsContainer.classList.remove('lg:w-8/12')
 
     petsContainer.innerHTML = `
 <div class="flex jus flex-col py-10 my-5 bg-[#13131308] border w-11/12 mx-auto rounded-lg">
 <div class="flex items-center justify-center w-60 mx-auto"><img class="w-full" src="images/error.webp" alt=""></div>
 <h2 class="font-bold text-center text-2xl n my-3">No Information Available</h2>
 <p class="font-normal text-lg py-2 text-center leading-normal w-4/6 mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>
 </div>
     ` 
     return;
  } else {
    petsContainer.classList.add('grid')
    petsContainer.classList.add('lg:w-8/12')
 }
  values.forEach(value => {
 
     const {breed,category, pet_name
,date_of_birth,gender,price,vaccinated_status, image,
petId } = value;
    // console.log(value);
    const div = document.createElement('div');
    div.innerHTML =
      `
      <div class="card  rounded shadow-md p-2">
  <figure>
    <img class="rounded w-full object-cover"
      src=${image} />
  </figure>
  <div class="p-2 ">
  ${pet_name===""||pet_name===undefined||pet_name===null?`<h2 class="font-extrabold text-xl">Not Available</h2>`:` <h2 class="font-extrabold text-xl">${pet_name} </h2>
`}

${breed===""||breed===undefined||breed===null?`<div class="flex items-center font-semibold gap-2"><span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=jQkL4uOqbTW7&format=png"/></span> <p>Breed: Non Available</p></div>`:`<div class="flex items-center font-semibold gap-2"><span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=jQkL4uOqbTW7&format=png"/></span> <p class="text-nowrap">Breed:${breed}</p></div>`}
 
  

  ${date_of_birth===""||date_of_birth=== undefined||date_of_birth===null?`<div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=vwGXRtPWrZSn&format=png"/></span>
      <p>Birth: Not Available</p>

    </div>`:` <div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=vwGXRtPWrZSn&format=png"/></span>
      <p>Birth: ${date_of_birth} </p>

    </div>`}

   ${gender===null||gender===undefined||gender===""?`<div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=64&id=16271&format=png"/></span>
      <p>Gender:Not Available </p>

    </div>`:`<div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=64&id=16271&format=png"/></span>
      <p>Gender: ${gender} </p>

    </div>`}

 
   ${price===null||price===undefined||price===""?` <div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=89392&format=png"/></span>
      <p>Price: Not Available </p>

    </div>`:` <div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=89392&format=png"/></span>
      <p>Price: ${price}$ </p>

    </div>`}

    

    <div class="border-t-2 pt-2 grid grid-cols-3 gap-2">
      <button onclick="likedPets('${image}')" class="btn"><img class="w-5 h-5 object-cover" src="https://img.icons8.com/?size=48&id=88589&format=png"/></button>
      <button  onclick="displayCountDown() " class="btn ">Adopt</button>
      <button onclick="detailsPets('${petId}')" class="btn ">Details</button> 
      
    </div>
  </div>
</div> 
    
      `    
    petsContainer.appendChild(div);

  });
 
}
const likedPets = (pets) => {
  
  const likedPetsContainer = document.getElementById('likedPets');
  const div = document.createElement('div')
 
  div.innerHTML = `
  <img class=" rounded-md" src=${pets} />
  `

  likedPetsContainer.appendChild(div);
}

const detailsPets = async(petsId) => {
  const response = await fetch(` https://openapi.programming-hero.com/api/peddy/pet/${petsId}`);
  const data = await response.json();

  displayDetails(data.petData)

}



const displayCountDown = () => {
 
  // const countdownContainer = document.getElementById('countdown_content');
  // const content = document.createElement('div');
  // content.innerHTML = `
  // <div class="w-28 mx-auto"><img class="w-full" src="https://img.icons8.com/?size=96&id=PEmFcgjhBgKF&format=png"/></div>
 

  // `
  //   countdownContainer.appendChild(content)
  
  const modal = document.getElementById('countdownModal');
  const countdownElement = document.getElementById('countdown');
  countdownElement.classList='flex item-center justify-center my-3 font-bold text-2xl'
  let countdownValue = 3;
  
  const intervalId = setInterval(() => {
        countdownElement.textContent = countdownValue; // Update the countdown text
        countdownValue--;

        // When countdown reaches -1, hide the modal and stop the countdown
        if (countdownValue < 0) {
          clearInterval(intervalId);  // Stop the interval
          modal.style.display = 'none';  // Hide the modal
          location.reload()
        }
       
  }, 1000); // Update every 1 second
  

  

  document.getElementById('countdown_btn').click()
}
const displayDetails = (details) => {

  
  const modalContainer = document.getElementById('modal_Content');
  // const div = document.createElement('div')
  // modalContainer.append(div);
  
  modalContainer.innerHTML =
    `
    <img class="w-full " src=${details.image}>
    <h2 class="font-bold text-lg py-2">${details.pet_name}</h2>

    

    <div class="grid grid-cols-2 ">
    ${details.breed===null||details.breed===undefined||details.breed===""?` <div class="flex items-center font-semibold gap-2"><span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=jQkL4uOqbTW7&format=png"/></span> <p>Breed: Not Found</p></div> `:`<div class="flex items-center font-semibold gap-2"><span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=jQkL4uOqbTW7&format=png"/></span> <p>Breed:${details.breed}</p></div>`}
    
    


${details.date_of_birth===null||details.date_of_birth===undefined||details.date_of_birth===""?`    <div class="flex items-center font-semibold gap-2">
   <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=vwGXRtPWrZSn&format=png"/></span>
     <p>Birth: Not Found</p>
 </div>`:`    <div class="flex items-center font-semibold gap-2">
   <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=vwGXRtPWrZSn&format=png"/></span>
     <p>Birth: ${details.date_of_birth} </p>
 </div>`}

${details.gender===undefined||details.gender===null||details.gender===""?`<div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=64&id=16271&format=png"/></span>
      <p>Gender: Not Found </p>

    </div>`:`<div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=64&id=16271&format=png"/></span>
      <p>Gender: ${details.gender} </p>

    </div>`}
 

    ${details.vaccinated_status===undefined||details.vaccinated_status===null||details.vaccinated_status===""?`<div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=64&id=16271&format=png"/></span>
      <p>vaccination: Not Found </p>

    </div>`:`<div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=64&id=16271&format=png"/></span>
      <p>vaccination: ${details.vaccinated_status} </p>

    </div>`}
 

    ${details.price===undefined||details.price===null||details.price===""?`   <div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=89392&format=png"/></span>
      <p>Price: Not Found </p>

    </div>`:`   <div class="flex items-center font-semibold gap-2">
    <span class="w-4 h-4"><img class="w-full object-cover" src="https://img.icons8.com/?size=48&id=89392&format=png"/></span>
      <p>Price: ${details.price}$ </p>

    </div>`}

  
    
    </div>
  
 

   
   <hr class="border my-3">
    <h2 class="font-bold text-lg py-2">Details Information:</h2>
    <p>${details.pet_details}</p>
    
    
    `
  

    document.getElementById('modalBtn').click();
  // document.getElementById('customModal').showModal();
 
}

// sorting

document.getElementById('sort_btn').addEventListener('click', function sort(value) {
  spinnerContainer.classList.remove('hidden')
  petsContainer.classList.add('hidden')
  setTimeout(async () => {
     petsContainer.classList.remove('hidden')
  spinnerContainer.classList.add('hidden');
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    displaySortData(data.pets);
  },2000)
 
})
const displaySortData = (param) => {
  console.log(param)
  param.sort((a, b) => b.price - a.price)
  displayAllData(param)
  
}

// document.getElementById('main_content').addEventListener('click', () => {
//   //   // spinnerContainer.classList.remove('hidden')
//   //  setTimeout( async()=> {
//   //   //  spinnerContainer.classList.add('hidden');
     
//   //   const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
//   //    const data = await response.json();
     
//   //    displayAllData(data.pets);
//   //    location.reload();
   
     
//   // },2000)
 
// })
loadAllData()
loadClickedData() 


// displayDetails()
// detailsPets()