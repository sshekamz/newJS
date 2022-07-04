// //  console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);

// //  document.title='New Item Lister';
// // console.log(document.title);
// // console.log(document.all[10]);
// // console.log(document.images);

// // let headerTitle= document.getElementById("header-title");
// // let mainBorder=document.getElementById('main-header');
// // console.log(mainBorder);
// // mainBorder.style.borderBottom='solid 3px #000';
// // let addItem=document.getElementById('main').getElementsByTagName('h2');
// // addItem[0].style.color="Green";
// // addItem[0].style.fontWeight="700";

// // var items=document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[2]);
// // items[2].style.backgroundColor="Green";

// // for(var i=0; i<items.length;i++){
// //     items[i].style.fontWeight=800;


// // }-----------------GetElementby Tag Name
// // var li=document.getElementsByTagName('li');
// // //  console.log(li);
// // //  console.log(li[1]);
// //  console.log(li[4]);
// //  li[4].style.color="Yellow";

// //  //-------editing---

// //  var cli=document.getElementsByClassName('list-group')
// //  const newLi=cli.getElementsByTagName('li');
// //  console.log(newLi);
// /// querySelector
// var header=document.querySelector('#main-header');
// header.style.borderBottom= 'solid 4px #ccc';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor="Green";

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

// //querySelectorALl

//  var secondItem=document.querySelectorAll('.list-group-item');
//  console.log(secondItem[0].innerText);
//  secondItem[1].style.color="Green";

//  var odd= document.querySelectorAll('li:nth-child(odd)');
//  for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="Green";
//  }

//parentNode
// var itemList= document.querySelector('#items');
// console.log(itemList.parentNode);

//patrentElemrent

// var itemList= document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4";

// lastElementChile
var itemList= document.querySelector('#items');
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.style.backgroundColor="Yellow";

//lastChild
//console.log(itemList.lastChild);

//fistChild
//console.log(itemList.firstChild);

//firstElementChild
//itemList.firstElementChild.style.backgroundColor="Blue";

//nextSiblings
// console.log(itemList.nextSibling);
// nextElementSiblings
// console.log(itemList.nextElementSibling);// no sibling after li;

//previousSiblings
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor="Purple";

//createElement
var newVar=document.createElement('div');

newVar.className=" Hello";

newVar.id="hello1";

    newVar.setAttribute('title', 'Hello Div');

//createTextNode

var txtNode= document.createTextNode('Hello World');
//Add Text to div
newVar.appendChild(txtNode);

var conatiner =document.querySelector('header .container');
var h1= document.querySelector('header h1');

var parentNode= document.getElementById('items');

parentNode.innerHTML='<li> Hello World </li> '+ parentNode.innerHTML;
console.log(parentNode.innerHTML);
console.log(newVar);