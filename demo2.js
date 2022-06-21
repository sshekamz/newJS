//  console.dir(document);
// console.log(document.domain);
// console.log(document.URL);

//  document.title='New Item Lister';
// console.log(document.title);
// console.log(document.all[10]);
// console.log(document.images);

// let headerTitle= document.getElementById("header-title");
// let mainBorder=document.getElementById('main-header');
// console.log(mainBorder);
// mainBorder.style.borderBottom='solid 3px #000';
// let addItem=document.getElementById('main').getElementsByTagName('h2');
// addItem[0].style.color="Green";
// addItem[0].style.fontWeight="700";

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor="Green";

for(var i=0; i<items.length;i++){
    items[i].style.fontWeight=800;
}


