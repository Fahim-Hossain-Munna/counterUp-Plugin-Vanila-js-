let counter = document.querySelectorAll('.numberup');
let text = document.querySelectorAll('.text');
let arr = Array.from(counter);
let arry = Array.from(text);
arr.map((item)=>{
    let count = item.innerHTML;
    item.innerHTML = '';
    let number = 0;
    function countUp() {
        item.innerHTML = number++;
        if(number > count){
            clearInterval(stop);
        }
        
    }
    
    let stop = setInterval(()=>{
        countUp();
    },item.dataset.time / count);
});


arry.map((type)=>{
    let value = type.innerHTML;
    type.innerHTML = '';
    let point = 0;
    function textRun() {
        type.innerHTML += value.charAt(point++);
        if(value.length < point){
            clearInterval(stop);
        }
        
    }
    
    let stop = setInterval(()=>{
        textRun();
    },type.dataset.time);
});


