let indicator = document.querySelector('.indicator').children;
let li = document.querySelector('.items').children;


for (let z = 0; z<li.length; z++){
    if (li[z].getAttribute('data-category') == "Ketchups"){
        li[z].style.transform = 'scale(1)';
        setTimeout(()=>{
            li[z].style.display = 'block';
        }, 300);
    }
    else{
        li[z].style.transform = 'scale(0)';
        setTimeout(()=>{
            li[z].style.display = 'none';
        }, 300);
    }
}


for (let i=0; i<indicator.length; i++){
    indicator[i].onclick = function(){
        for(let x=0; x<indicator.length; x++){
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItems = this.getAttribute('data-filter');

        for (let z = 0; z<li.length; z++){
            li[z].style.transform = 'scale(0)';
            setTimeout(()=>{
                li[z].style.display = 'none';
            }, 300);
            if (li[z].getAttribute('data-category') == displayItems){
                li[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    li[z].style.display = 'block';
                }, 300);
            }
        }

    }
}
