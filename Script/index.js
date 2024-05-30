let fQuantity = document.querySelectorAll('input')[0]
let mQuantity = document.querySelectorAll('input')[1]
let calcBut = document.querySelector('button')
let fTot = document.querySelectorAll('label')[0]
let mTot = document.querySelectorAll('label')[1] 
let grandTot = document.querySelectorAll('label')[2]


fQuantity.addEventListener('change',()=>{
    if (fQuantity.value < 0 ) {
        alert('Enter a valid number')
        fQuantity.value = 0
    }else{
        fTot.innerText ='R'+ eval(`(150.95 * ${fQuantity.value})`).toFixed(2)
    }
})
mQuantity.addEventListener('change',()=>{
    if (mQuantity.value < 0) {
        alert('Enter a valid number')
        mQuantity.value = 0
    } else {
        mTot.innerText ='R'+ eval(`(180.95 * ${mQuantity.value})`).toFixed(2)
    }
})
calcBut.addEventListener('click',()=>{
 grandTot.innerText ='R'+ eval(`(150.95 * ${fQuantity.value}) + (180.95 * ${mQuantity.value})`).toFixed(2) 
})