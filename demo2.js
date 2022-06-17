 console.dir(document);
console.log(document.domain);
console.log(document.URL);

 document.title='New Item Lister';
console.log(document.title);
console.log(document.all[10]);
console.log(document.images);

let headerTitle= document.getElementById("header-title");
let mainBorder=document.getElementById('main-header');
console.log(mainBorder);
mainBorder.style.borderBottom='solid 3px #000';
let addItem=document.getElementById('main').getElementsByTagName('h2');
addItem[0].style.color="Green";
addItem[0].style.fontWeight="700";


