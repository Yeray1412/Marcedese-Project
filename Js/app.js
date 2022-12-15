
// Swiper
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    slidesPerGroup: 1,
    centerSlide: 'true',
    fade: 'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// End

// Search bar
const input = document.querySelector("input");
const form = document.querySelector("form");
const textSearch = document.querySelector(".text");
const submit = document.querySelector('.submit')

input.addEventListener("click", ()=> {
    document.body.classList.add('stop-scrollingSearch');
    document.body.classList.remove('stop-scrolling');
    form.classList.add('inputSpe');
    input.style.width = "600px"
    input.style.borderBottom = '#1998fc solid 2px'
    submit.style.borderBottom = '#1998fc solid 2px'
    textSearch.style.position = "absolute"
    modelsLi.style.borderBottom = ''
    onlineLi.style.borderBottom = ''
    serLi.style.borderBottom = ''
    techLi.style.borderBottom = ''
    purLi.style.borderBottom = ''
    online.classList.remove('show');
    model.classList.remove('show');
    purchases.classList.remove('show');
    serviceM.classList.remove('show')
    tech.classList.remove('show')
});

document.addEventListener('click', (event)=>{
    let isClicked = input.contains(event.target);

    if(!isClicked) {
        document.body.classList.remove('stop-scrollingSearch');
        form.classList.remove('inputSpe');
        input.style.width = "200px"
        input.style.borderBottom = ''
        submit.style.borderBottom = ''
        textSearch.style.position = ''
    }
})
// End

// Vehicles
  const VehiclesNav = document.querySelector('.vehiclesNav');
  const vehiclesLi = document.querySelector('.vehiclesLi');
  const idk = document.querySelector('.idk');
  const con = document.querySelector('.container');
  const conMargin = window.getComputedStyle(con);
  const main = document.querySelector('.mainVehiclesCon');

  // For the headers smh 
  const speHead = document.querySelector('.speHead')
  const sedanHead = document.querySelector('.sedansHead');
  const suvHead = document.querySelector('.suvHead'); 
  const hatchBacksHead = document.querySelector('.hatchBacksHead');
  const coupesHead = document.querySelector('.coupesHead');
  const CnRHead = document.querySelector('.CnRHead');
  const vansHead = document.querySelector('.vansHead');
  const seeall = document.querySelector('.seeAll');

  const allM = document.querySelector('.allM');
  const AMG = document.querySelector('.AMG');
  const mayBach = document.querySelector('.mayBach')
  const newM = document.querySelector('.newM')

// To the position fixed

window.addEventListener('scroll',()=> {
  if(((idk.getBoundingClientRect().bottom <= 99.6875) && (main.getBoundingClientRect().top >= -main.offsetHeight+List.offsetHeight+VehiclesNav.offsetHeight+seeall.offsetHeight))) {
    VehiclesNav.style.position = 'fixed';
    VehiclesNav.style.top = '0';
    vehiclesLi.style.position = 'fixed';
    vehiclesLi.style.top = '100px';
    vehiclesLi.style.width = `${VehiclesNav.offsetWidth}px`;
    vehiclesLi.style.left = '15px';
    vehiclesLi.style.marginLeft = conMargin.marginLeft;
  }

  else{
    vehiclesLi.style.position = 'relative';
    vehiclesLi.style.width = ''
    vehiclesLi.style.marginLeft = '0';
    vehiclesLi.style.top = '0';
    vehiclesLi.style.left = '0px';
  }

  if(idk.getBoundingClientRect().bottom >= 99.6875) {
    VehiclesNav.style.position = 'relative';
  }

    if(main.getBoundingClientRect().top <= -main.offsetHeight+List.offsetHeight+VehiclesNav.offsetHeight+seeall.offsetHeight) {
      vehiclesLi.style.justifyContent = 'flex-end';
    }
    
    else {
      vehiclesLi.style.justifyContent = '';
    }

  if(main.getBoundingClientRect().bottom <= 60) {
    VehiclesNav.style.position = 'relative';
    VehiclesNav.style.top = `${main.offsetHeight+20}px`;
  }

  if(main.getBoundingClientRect().bottom >= 60 && idk.getBoundingClientRect().bottom <= 99.6875){
    VehiclesNav.style.position = 'fixed';
    VehiclesNav.style.top = '0';
  }

  // For the headers :(
    // sedan
    if(seeall.classList[1] == 'clicked' && allM.classList[1] == 'speNav') {
      if(idk.getBoundingClientRect().bottom <= 99.6875 && idk.getBoundingClientRect().bottom > -610.3125) {
        speHead.style.display = 'flex';
        speHead.textContent = 'Sedans';
        sedanHead.textContent = ''
      }
  
      if(idk.getBoundingClientRect().bottom >= 99.6875){
        speHead.style.display = 'none'
        sedanHead.textContent = 'Sedans'
      }
  
      // suv
  
      if(idk.getBoundingClientRect().bottom <= -610.3125 && idk.getBoundingClientRect().bottom > -1309.3125) {
        speHead.textContent = 'SUV';
        suvHead.textContent = ''
      }
  
      if(idk.getBoundingClientRect().bottom >= -610.3125) {
        suvHead.textContent = 'SUV'
      }
  
      // HatchBack
  
      if(idk.getBoundingClientRect().bottom <= -1309.3125 && idk.getBoundingClientRect().bottom > -1678.3125) {
        speHead.textContent = 'Hatch Backs';
        hatchBacksHead.textContent = ''
      }
  
      if(idk.getBoundingClientRect().bottom >= -1309.3125) {
        hatchBacksHead.textContent = 'Hatch Backs'
      }
  
      // Coupes
  
      if(idk.getBoundingClientRect().bottom <= -1678.3125 && idk.getBoundingClientRect().bottom > -2382.3125) {
        speHead.innerHTML = 'Coup&eacute;s';
        coupesHead.textContent = ''
      }
  
      if(idk.getBoundingClientRect().bottom >= -1678.3125) {
        coupesHead.innerHTML = 'Coup&eacute;s'
      }
  
      // CnR
  
      if(idk.getBoundingClientRect().bottom <= -2382.3125 && idk.getBoundingClientRect().bottom > -2778.3125) {
        speHead.innerHTML = 'Cabriolets / Roadsters';
        CnRHead.textContent = ''
      }
  
      if(idk.getBoundingClientRect().bottom >= -2382.3125) {
        CnRHead.innerHTML = 'Cabriolets / Roadsters'
      }
  
      // vans
  
      if(idk.getBoundingClientRect().bottom <= -2778.3125 && idk.getBoundingClientRect().bottom >= -3002.3125) {
        speHead.style.display = 'flex'
        speHead.innerHTML = 'Vans';
        vansHead.textContent = ''
      }
  
      if(idk.getBoundingClientRect().bottom >= -2778.3125) {
        vansHead.innerHTML = 'Vans'
      }
  
      if(idk.getBoundingClientRect().bottom <= -3002.3125) {
        speHead.style.display = 'none'
      }  
    }
})
window.addEventListener('scroll',()=>{
if(seeall.classList[1] == 'clicked' && AMG.classList[1] == 'speNav') {
    if(idk.getBoundingClientRect().bottom <= 99.6875 && idk.getBoundingClientRect().bottom > -610.3125) {
      speHead.style.display = 'flex';
      speHead.textContent = 'SUV';
      suvHead.textContent = ''
    }

    if(idk.getBoundingClientRect().bottom >= 99.6875){
      speHead.style.display = 'none'
      suvHead.textContent = 'SUV'
    }

    if(idk.getBoundingClientRect().bottom <= -277.3125 && idk.getBoundingClientRect().bottom > -542.3125) {
      speHead.innerHTML = 'Coup&eacute;s';
      coupesHead.textContent = ''
    }

    if(idk.getBoundingClientRect().bottom >= -277.3125) {
      coupesHead.innerHTML = 'Coup&eacute;s';
    }

    if(idk.getBoundingClientRect().bottom >= -542.3125) {
      coupesHead.innerHTML = 'Vans'
    }

    if(idk.getBoundingClientRect().bottom <= -542.3125) {
      speHead.style.display = 'none'
    }  
}

})

// For the clicked buttons

const List = document.querySelector('.liMain');
const sedan = document.querySelector('.sedans');
const suv = document.querySelector('.suv');
const hatchBack = document.querySelector('.hatchBacks');
const coupes  = document.querySelector('.coupes');
const CnR = document.querySelector('.CnR');
const vans = document.querySelector('.vans');
const cardsContainer = document.querySelector('.cardsContainer');
const speContainer = document.querySelector('.speContainer')
const sedansMain = document.querySelector('.sedansMain');
const suvMain = document.querySelector('.suvMain')
const coupesMain = document.querySelector('.coupesMain')

sedan.addEventListener('click', (event)=> {
  event.preventDefault()
  sedan.classList.add('clicked');
  suv.classList.remove('clicked');
  hatchBack.classList.remove('clicked')
  coupes.classList.remove('clicked')
  CnR.classList.remove('clicked')
  vans.classList.remove('clicked')
  seeall.classList.remove('clicked')
  cardsContainer.style.height = '640px';
  speContainer.style.transform = "translateY(-56px)"
})

suv.addEventListener('click', (event)=> {
    if(AMG.classList[1] == 'speNav') {
      event.preventDefault()
      suv.classList.add('clicked')
      sedan.classList.remove('clicked');
      hatchBack.classList.remove('clicked')
      coupes.classList.remove('clicked')
      CnR.classList.remove('clicked')
      vans.classList.remove('clicked')
      seeall.classList.remove('clicked')
      cardsContainer.style.height = '350px';
      speContainer.style.transform = "translateY(-56px)"
      for(const card of suvMain.children) {
        if(card.classList[0] == 'cardBody') {
          for(const sub of card.children) {
            if(sub.classList[1] != 'amg') {
              sub.style.display = 'none';
            }
            else {
              sub.style.display = 'block';
            }
          }
        }
      }
  }

  if(allM.classList[1] == 'speNav') {
    event.preventDefault()
    suv.classList.add('clicked')
    sedan.classList.remove('clicked');
    hatchBack.classList.remove('clicked')
    coupes.classList.remove('clicked')
    CnR.classList.remove('clicked')
    vans.classList.remove('clicked')
    seeall.classList.remove('clicked')
    cardsContainer.style.height = '640px';
    speContainer.style.transform = "translateY(-785px)"
}
})

hatchBack.addEventListener('click', (event)=> {
  event.preventDefault()
  suv.classList.remove('clicked')
  sedan.classList.remove('clicked');
  hatchBack.classList.add('clicked')
  coupes.classList.remove('clicked')
  CnR.classList.remove('clicked')
  vans.classList.remove('clicked')
  seeall.classList.remove('clicked')
  cardsContainer.style.height = '350px';
  speContainer.style.transform = "translateY(-1512px)"
})

coupes.addEventListener('click', (event)=> {
  if(AMG.classList[1] == 'speNav') {
    event.preventDefault()
    suv.classList.remove('clicked')
    sedan.classList.remove('clicked');
    hatchBack.classList.remove('clicked')
    coupes.classList.add('clicked')
    CnR.classList.remove('clicked')
    vans.classList.remove('clicked')
    seeall.classList.remove('clicked')
    speContainer.style.transform = "translateY(-785px)"
    cardsContainer.style.height = '350px';
    for(const card of suvMain.children) {
      for(const sub of card.children) {
          sub.style.display = 'block';
    }
  }
    for(const card of coupesMain.children) {
      if(card.classList[0] == 'cardBody') {
        for(const sub of card.children) {
          if(sub.classList[1] != 'amg') {
            sub.style.display = 'none';
          }
          else {
            sub.style.display = 'block';
          }
        }
      }
    }
  }

  if(allM.classList[1] == 'speNav') {
    event.preventDefault()
    suv.classList.remove('clicked')
    sedan.classList.remove('clicked');
    hatchBack.classList.remove('clicked')
    coupes.classList.add('clicked')
    CnR.classList.remove('clicked')
    vans.classList.remove('clicked')
    seeall.classList.remove('clicked')
    cardsContainer.style.height = '640px';
    speContainer.style.transform = "translateY(-1904px)" 
  }
});

CnR.addEventListener('click', (event)=> {
  event.preventDefault()
  suv.classList.remove('clicked')
  sedan.classList.remove('clicked');
  hatchBack.classList.remove('clicked')
  coupes.classList.remove('clicked')
  CnR.classList.add('clicked')
  vans.classList.remove('clicked')
  seeall.classList.remove('clicked')
  cardsContainer.style.height = '350px';
  speContainer.style.transform = "translateY(-2632px)"
});

vans.addEventListener('click', (event)=> {
  event.preventDefault()
  suv.classList.remove('clicked')
  sedan.classList.remove('clicked');
  hatchBack.classList.remove('clicked')
  coupes.classList.remove('clicked')
  CnR.classList.remove('clicked')
  vans.classList.add('clicked')
  seeall.classList.remove('clicked')
  cardsContainer.style.height = '350px';
  speContainer.style.transform = "translateY(-3024px)"
});

seeall.addEventListener('click', (event)=> {
  if(AMG.classList[1] == 'speNav') {
    event.preventDefault()
    suv.classList.remove('clicked')
    sedan.classList.remove('clicked');
    hatchBack.classList.remove('clicked')
    coupes.classList.remove('clicked')
    CnR.classList.remove('clicked')
    vans.classList.remove('clicked')
    seeall.classList.add('clicked')
    cardsContainer.style.height = '750px';
    speContainer.style.transform = "translateY(0px)"
    for(const card of suvMain.children) {
      if(card.classList[0] == 'cardBody') {
        for(const sub of card.children) {
          if(sub.classList[1] != 'amg') {
            sub.style.display = 'none';
          }
          else {
            sub.style.display = 'block';
          }
        }
      }
    }

    for(const card of coupesMain.children) {
      if(card.classList[0] == 'cardBody') {
        for(const sub of card.children) {
          if(sub.classList[1] != 'amg') {
            sub.style.display = 'none';
          }
          else {
            sub.style.display = 'block';
          }
        }
      }
    }

    for(const body of speContainer.children) {
      if(body.classList[1] != 'amg') {
        body.style.display = 'none'
      }
    }
  }

  if(allM.classList[1] == 'speNav') {
    event.preventDefault()
    suv.classList.remove('clicked')
    sedan.classList.remove('clicked');
    hatchBack.classList.remove('clicked')
    coupes.classList.remove('clicked')
    CnR.classList.remove('clicked')
    vans.classList.remove('clicked')
    seeall.classList.add('clicked')
    cardsContainer.style.height = '';
    speContainer.style.transform = ""
  }
});

// For VehiclesNav

allM.addEventListener('click',()=> {
  allM.classList.add('speNav');
  AMG.classList.remove('speNav');
  mayBach.classList.remove('speNav');
  newM.classList.remove('speNav')
  sedan.style.display = 'block';
  suv.style.display = 'block';
  hatchBack.style.display = 'block';
  coupes.style.display = 'block';
  CnR.style.display = 'block';
  vans.style.display = 'block';
  seeall.style.display = 'block';
  for(const card of sedansMain.children) {
      for(const sub of card.children) {
          sub.style.display = 'block'
  }
}
  for(const card of suvMain.children) {
      for(const sub of card.children) {
          sub.style.display = 'block';
    }
  }
  for(const card of coupesMain.children) {
    for(const sub of card.children) {
        sub.style.display = 'block';
  }
}
for(const body of speContainer.children) {
    body.style.display = 'block'
}
  sedan.click()
})

AMG.addEventListener('click',()=> {
  allM.classList.remove('speNav');
  AMG.classList.add('speNav');
  mayBach.classList.remove('speNav');
  newM.classList.remove('speNav');
  sedan.style.display = 'none';
  suv.style.display = 'block';
  hatchBack.style.display = 'none';
  coupes.style.display = 'block';
  CnR.style.display = 'none';
  vans.style.display = 'none';
  seeall.style.display = 'block';
  for(const card of sedansMain.children) {
    for(const sub of card.children) {
        sub.style.display = 'block'
}
}
for(const card of suvMain.children) {
    for(const sub of card.children) {
        sub.style.display = 'block';
  }
}
for(const card of coupesMain.children) {
  for(const sub of card.children) {
      sub.style.display = 'block';
}
}
seeall.click()
})

mayBach.addEventListener('click',()=> {
  speHead.style.display = 'none';
  allM.classList.remove('speNav');
  AMG.classList.remove('speNav');
  mayBach.classList.add('speNav');
  newM.classList.remove('speNav');
  sedan.style.display = 'block';
  suv.style.display = 'none';
  hatchBack.style.display = 'none';
  coupes.style.display = 'none';
  CnR.style.display = 'none';
  vans.style.display = 'none';
  seeall.style.display = 'none';
  sedan.classList.add('clicked')
  sedan.click()
  cardsContainer.style.height = '350px';
  for(const card of sedansMain.children) {
    if(card.classList == 'cardBody') {
      for(const sub of card.children) {
        if(sub.classList[2] != 'mayBach') {
          sub.style.display = 'none'
        }
        else {
          sub.style.display = 'block'
        }
      }
    }
  }
  for(const body of speContainer.children) {
    if(body.classList[1] != 'amg') {
      body.style.display = 'block'
    }
  }
})

newM.addEventListener('click',()=> {
  speHead.style.display = 'none'
  allM.classList.remove('speNav');
  AMG.classList.remove('speNav');
  mayBach.classList.remove('speNav');
  newM.classList.add('speNav');
  sedan.style.display = 'block';
  suv.style.display = 'none';
  hatchBack.style.display = 'none';
  coupes.style.display = 'none';
  CnR.style.display = 'none';
  vans.style.display = 'none';
  seeall.style.display = 'none';
  sedan.classList.add('clicked')
  sedan.click();
  cardsContainer.style.height = '350px';
  for(const card of sedansMain.children) {
    if(card.classList == 'cardBody') {
      for(const sub of card.children) {
        if(sub.classList[1] != 'new') {
          sub.style.display = 'none'
        }
        else {
          sub.style.display = 'block'
        }
      }
    }
  }
  for(const body of speContainer.children) {
    if(body.classList[1] != 'amg') {
      body.style.display = 'block'
    }
  }
})
// End

// to scroll to the top

const Up = document.querySelector('.upContainer');

Up.addEventListener('click', ()=> {
  window.scrollTo({top: 0, behavior: 'smooth'});
})
// End

// For the pop up cards

const online = document.querySelector('.online');
const model = document.querySelector('.model');
const onlineLi = document.querySelector('.onlineLi')
const modelsLi = document.querySelector('.modelsLi');
const purLi = document.querySelector('.purLi');
const serLi = document.querySelector('.serLi');
const techLi = document.querySelector('.techLi');
const header = document.querySelector('header');
const activeHead = document.querySelectorAll('.headActive');
const span =document.querySelectorAll('.span')
const mainCon = document.querySelectorAll('.mainActive')
const exit = document.querySelectorAll('.exit')
const purchases =document.querySelector('.purchases')
const serviceM = document.querySelector('.serviceM')
const tech = document.querySelector('.tech')

onlineLi.addEventListener('click', (event)=> {
  onlineLi.style.borderTop = '#1998fc solid 2px'
  serLi.style.borderTop = ''
  purLi.style.borderTop = ''
  modelsLi.style.borderTop = ''
  techLi.style.borderTop = ''
  document.body.classList.add('stop-scrolling');
  online.classList.add('show');
  header.classList.add('appear');
  model.classList.remove('show');
  purchases.classList.remove('show');
  serviceM.classList.remove('show')
  tech.classList.remove('show')
})

purLi.addEventListener('click', ()=> {
  document.body.classList.add('stop-scrolling');
  onlineLi.style.borderTop = ''
  serLi.style.borderTop = ''
  purLi.style.borderTop = '#1998fc solid 2px'
  modelsLi.style.borderTop = ''
  techLi.style.borderTop = ''
  purchases.classList.add('show')
  header.classList.add('appear');
  model.classList.remove('show');
  online.classList.remove('show');
  serviceM.classList.remove('show')
  tech.classList.remove('show')
})

serLi.addEventListener('click',()=> {
  document.body.classList.add('stop-scrolling');
  serLi.style.borderTop = '#1998fc solid 2px'
  onlineLi.style.borderTop = ''
  purLi.style.borderTop = ''
  modelsLi.style.borderTop = ''
  techLi.style.borderTop = ''
  serviceM.classList.add('show')
  header.classList.add('appear');
  model.classList.remove('show');
  online.classList.remove('show');
  purchases.classList.remove('show');
  tech.classList.remove('show')
})

techLi.addEventListener('click',()=> {
  document.body.classList.add('stop-scrolling');
  techLi.style.borderTop = '#1998fc solid 2px'
  onlineLi.style.borderTop = ''
  serLi.style.borderTop = ''
  modelsLi.style.borderTop = ''
  purLi.style.borderTop = ''
  tech.classList.add('show')
  header.classList.add('appear');
  model.classList.remove('show');
  online.classList.remove('show');
  purchases.classList.remove('show');
  serviceM.classList.remove('show')
})

// for the first

modelsLi.addEventListener('click',()=> {
  document.body.classList.add('stop-scrolling');
  modelsLi.style.borderTop = '#1998fc solid 2px'
  onlineLi.style.borderTop = ''
  serLi.style.borderTop = ''
  techLi.style.borderTop = ''
  purLi.style.borderTop = ''
  model.classList.add('show');
  header.classList.add('appear');
  online.classList.remove('show');
  purchases.classList.remove('show');
  serviceM.classList.remove('show')
  tech.classList.remove('show')
})

for(let i = 0 ;i < mainCon.length; i++) {
  mainCon[0].addEventListener('scroll',()=> {
    if(activeHead[0].getBoundingClientRect().bottom <= 120) {
        span[0].style.opacity = '1';
    }
  
    if(activeHead[0].getBoundingClientRect().bottom > 140) {
        span[0].style.opacity = '0';
    }
  });

  mainCon[1].addEventListener('scroll',()=> {
    if(activeHead[1].getBoundingClientRect().bottom <= 130) {
        span[1].style.opacity = '1';
    }
  
    if(activeHead[1].getBoundingClientRect().bottom > 130) {
        span[1].style.opacity = '0';
    }
  });

  mainCon[2].addEventListener('scroll',()=> {
    if(activeHead[2].getBoundingClientRect().bottom <= 250) {
        span[2].style.opacity = '1';
    }
  
    if(activeHead[2].getBoundingClientRect().bottom > 250) {
        span[2].style.opacity = '0';
    }
  });
}

// To exit
for(const pot of exit) {
  pot.addEventListener('click', ()=> {
    document.body.classList.remove('stop-scrolling');
    modelsLi.style.borderTop = ''
    onlineLi.style.borderTop = ''
    serLi.style.borderTop = ''
    techLi.style.borderTop = ''
    purLi.style.borderTop = ''
    online.classList.remove('show');
    model.classList.remove('show');
    purchases.classList.remove('show');
    serviceM.classList.remove('show')
    tech.classList.remove('show')
  })
}




