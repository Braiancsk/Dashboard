let update = document.getElementById('update');
let addOrder = document.getElementById('addOrder');
let checkboxes = document.getElementsByClassName('check');
let modalUpdate = document.querySelector('.modal-update');
let modalOrder = document.querySelector('.modal-order');
let bg = document.querySelector('.bg');
let close = document.getElementById('close');
let close2 = document.getElementById('close2');
let cancel = document.getElementById('cancel');
    




update.addEventListener('click', ()=>{
    modalUpdate.classList.add('modal-active');
    bg.style.display = 'block';
    document.body.style.overflowY = 'hidden';
    
});

addOrder.addEventListener('click', ()=>{
    modalOrder.classList.add('modal-active');
    bg.style.display = 'block';
    document.body.style.overflowY = 'hidden';
});

close.addEventListener('click', ()=>{
    modalUpdate.classList.remove('modal-active');
    document.body.style.overflowY = 'auto';
    update.disabled = true;
    bg.style.display = 'none';
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
        update.style.opacity = '0.5';
    }
});

close2.addEventListener('click', ()=>{
    modalOrder.classList.remove('modal-active');
    document.body.style.overflowY = 'auto';
    bg.style.display = 'none';
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
        update.style.opacity = '0.5';
    }
});

cancel.addEventListener('click', ()=>{
    modalOrder.classList.remove('modal-active');
    document.body.style.overflowY = 'auto';
    bg.style.display = 'none';
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
        update.style.opacity = '0.5';
    }
});

bg.addEventListener('click', ()=>{
    modalUpdate.classList.remove('modal-active');
    modalOrder.classList.remove('modal-active');
    update.disabled = true;
    document.body.style.overflowY = 'auto';
    bg.style.display = 'none';
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
        update.style.opacity = '0.5';
    }
});


//limit the quantity of checkboxes




for(var i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('click',(e)=>{
        if(e.currentTarget.checked){
            update.disabled = false;
            update.style.opacity = '1';
        }else{
            update.disabled = true;
            update.style.opacity = '0.5';
        }
        
    });
}


function limitCheck(){
        const checks = document.querySelectorAll('.check');
        let limit = 1;
        for(var j = 0; j < checks.length; j++)
            
            checks[j].onclick = selectiveCheck;
            function selectiveCheck () {
                let checked = document.querySelectorAll('.check:checked');
                if(checked.length >= limit + 1){
                  
                    return false;
                }           
              }
}

limitCheck();
