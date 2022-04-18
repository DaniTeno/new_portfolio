export function opener() {
     const d = document,
          gate = d.createElement('div'),
          doorL = d.createElement('div'),
          doorR = d.createElement('div'),
          openBtn = d.createElement('div')

     openBtn.classList.add('btn-eye-sight')
     doorL.classList.add('top-door')
     doorR.classList.add('bottom-door')
     gate.classList.add('gate')
     gate.insertAdjacentElement('beforeend', doorL)
     gate.insertAdjacentElement('beforeend', doorR)

     openBtn.innerHTML = ` 
          <nav class="btn-eye">
               <div class="btn-eye-ball">
               </div>
          </nav>       
     `;

     doorR.innerHTML = `
          <div class="arrow-ini-r arrow-right">
               <img class="r" src="../../assets/arrow3.png"/>
          </div>
     `;

     doorL.innerHTML = `
          <div class="arrow-ini-l arrow-left">
               <img class="l" src="../../assets/arrow3.png"/>
          </div>
     `;

     d.addEventListener('click', e=>{
          const gateBtn = d.querySelector('.btn-eye-ball'),
                    gateEye = d.querySelector('.btn-eye-sight'),
                    gateTopDoor = d.querySelector('.top-door'),
                    gateBottomDoor = d.querySelector('.bottom-door'),
                    bigEye = d.querySelector('.big-eye'),
                    arrowR = d.querySelector('.arrow-ini-r'),
                    arrowL = d.querySelector('.arrow-ini-l')

          if(e.target == gateBtn){
               gateEye.style.opacity = '0';
               gateTopDoor.style.borderColor = '#ecf59c';
               gateBottomDoor.style.borderColor = '#ecf59c';   
               gateTopDoor.style.left = '-35%';
               gateBottomDoor.style.right = '-35%';
               arrowL.classList.remove('arrow-left')
               arrowR.classList.remove('arrow-right')
               setTimeout(()=>{
                    bigEye.style.zIndex = '50'
                    setTimeout(()=>{
                         gateTopDoor.style.borderColor = 'transparent';
                         gateBottomDoor.style.borderColor = 'transparent';
                    },500)
               }, 500)
          }
     });
     gate.insertAdjacentElement('beforeend', openBtn)
     return gate
}