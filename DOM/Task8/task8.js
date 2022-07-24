var form=document.getElementById('newForm');
var itemList=document.getElementById('items');

form.addEventListener('submit', newItem);

var userDetail=[];

//userDetail.push(1);
//console.log(userDetail.length);
function newItem(e){

    e.preventDefault();
    var name=document.getElementById('name').value;
    var contact=document.getElementById('contact').value;
    var email=document.getElementById('email').value;

    

    
        var myObj={
            Name: name,
            Email: email,
            Contact: contact
        };
        userDetail.push(myObj);
        var objString=JSON.stringify(myObj);

        // var i=0;
        // while(i<userDetail.length){

        //     localStorage.setItem(i,objString);
        //     ++i;
        // }
        localStorage.setItem(myObj.Email,objString);
        

        console.log(userDetail.length);
    
    
    
    //Display data of users
    display();
    
    
    function display(){
    
        
    

    var text=localStorage.getItem(myObj.Email);

    var objDeString= JSON.parse(text);
    var li=document.createElement('li');
    li.className='list-group-item float-left';

    //getting data from localStorage
    li.appendChild(document.createTextNode(objDeString.Name));
    li.appendChild(document.createTextNode(objDeString.Contact));
    li.appendChild(document.createTextNode(objDeString.Email));

    var delButton=document.createElement('button');

    delButton.className='btn btn-danger btn-sm btn-padding-left-1 delete';

    delButton.appendChild(document.createTextNode('X'));

    //create edit button
    var editBtn= document.createElement('button');
    editBtn.className='btn btn-dark btn-sm btn-padding-left-1 ml-1';

    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);
    
    li.appendChild(delButton);
    itemList.appendChild(li);
    

    }

}

