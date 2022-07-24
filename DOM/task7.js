var form=document.getElementById('newForm');
var itemList=document.getElementById('items');

form.addEventListener('submit', newItem);

function newItem(e){

    e.preventDefault();
    let name=document.getElementById('name').value;
    let contact=document.getElementById('contact').value;
    let email=document.getElementById('email').value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Contact',contact);
    localStorage.setItem('Email',email);

    //add element to page;

    var li=document.createElement('li');
    li.className='list-group-item float-left';

    li.appendChild(document.createTextNode(name));
    li.appendChild(document.createTextNode(contact));
    li.appendChild(document.createTextNode(email));

    var delButton=document.createElement('button');

    delButton.className='btn btn-danger btn-sm float-right delete';

    delButton.appendChild(document.createTextNode('X'));

    //create edit button
    var editBtn= document.createElement('button');
    editBtn.className='btn btn-dark btn-sm float-right ml-1';

    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);
    
    li.appendChild(delButton);
    itemList.appendChild(li);

}

