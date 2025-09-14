let s=document.getElementById('start')
let r=document.getElementById('restart')
let l=document.getElementById('line')
let boxes=document.querySelectorAll('#box')
let playing=false
let currentplayer="x"
let w=document.getElementById('win')
let arr=[
    [0,1,2,50,0,0],
    [3,4,5,150,0,0],
    [6,7,8,250,0,0],
    [0,3,6,0,50,90],
    [1,4,7,0,150,90],
    [2,5,7,0,250,90],
    [0,4,8,0,0,45],
    [2,4,6,0,250,-45]
]







const gameON=()=>{ 
    playing=true
    console.log(boxes)
}
const play=(e)=>{
 if(e.target.innerText=='' && playing){
    e.target.innerText=currentplayer
    winn(currentplayer)
    if(currentplayer==="x"){currentplayer="0"}
    else{currentplayer="x"}
}
}
const firSe=()=>{
    boxes.forEach((e)=>{
        e.innerText=' '
    })
     let currentplayer="x"
    w.innerHTML='result'
    playing=false
    return;
    }

const winn=(player)=>{
for (let combo of arr){
    let [a,b,c] =combo
    if(boxes[a].textContent===player && boxes[b].textContent===boxes[a].textContent && boxes[c].textContent===boxes[b].textContent){w.innerHTML='congratulation'
        line(combo)
    }
}
let a=[]

boxes.forEach(
    (e)=>{a.push(e.innerText)}
  
)

let b= !a.includes("")
if (b){w.innerHTML="draw"
    playing=false
}
}
const line=(combo)=>{
    const topWin=combo[3]
    const leftWin=combo[4]
    const rotateWin=combo[5]
    l.style.display="block"
    l.style.top=`${topWin}px`
    l.style.left=`${leftWin}px`
    l.style.rotate=`${rotateWin}deg`
}







s.addEventListener('click',gameON)
boxes.forEach((e)=>{
    e.addEventListener('click',play)
})
r.addEventListener('click',firSe)

