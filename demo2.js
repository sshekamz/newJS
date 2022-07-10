var form=document.getElementById('addForm');
var itemList= document.getElementById('items');
var filter=document.getElementById('filter');


//form submit event
form.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

//filter event

filter.addEventListener('keyup',filterItem);

//function addItem

function addItem(e){

    e.preventDefault();

    //get input value

    var newItem= document.getElementById('item').value;
    var newDesc= document.getElementById('description').value;

    //create li
    var li=document.createElement('li');
   

    //add class name
    li.className='list-group-item';
    

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDesc));

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
//filterItem Function
function filterItem(e){
    //search text
    var text=e.target.value.toLowerCase();
    // get list
    var listText= itemList.getElementsByTagName('li');
    
    Array.from(listText).forEach(function(item){

        var itemName=item.firstChild.textContent;
        var descName=item.firstChild.nextSibling.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || descName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}
//function filter discription
// function filterDesc(e){
//     //search text
//     var text=e.target.value.toLowerCase();
//     // get list
    
//     var descText= itemList.getElementsByTagName('span');
//     Array.from(descText).forEach(function(item){

//         var itemName=item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text)!=-1){
//             item.style.display='block';
//         }
//         else{
//             item.style.display='none';
//         }
//     });
// }