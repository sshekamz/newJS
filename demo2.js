var form=document.getElementById('addForm');
var itemList= document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

//function addItem

function addItem(e){

    e.preventDefault();

    //get input value

    var newItem= document.getElementById('item').value;

    //create li
    var li=document.createElement('li');

    //add class name
    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem));

    //create del button
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
    

    //itemList.appendChild(li);

}
//function removeItem
function removeItem(e){

    if(e.target.classList.contains('delete')){

        if(confirm('Are You Sure!')){

            var li=e.target.parentElement;
            itemList.removeChild(li);

        }
    }

}