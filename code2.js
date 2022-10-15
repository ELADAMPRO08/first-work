const btn = document.querySelector('#btn')
const bb = document.querySelector('.div0')
let j = 1
btn.addEventListener('click',function(){
    j++
    bb.className = j%2===0? 'div0 div1':'div0 div'
    this.style.color= j%2===0? 'red':'black'
      
})