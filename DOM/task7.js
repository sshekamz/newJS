var form=document.getElementById('newForm');

form.addEventListener('submit', newItem);

function newItem(e){

    e.preventDefault();
    var name=document.getElementById('name').value;
    var contact=document.getElementById('contact').value;
    var email=document.getElementById('email').value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Contact',contact);
    localStorage.setItem('Email',email);

}