//EXAMINE THE DOCUMENT

// console.dir(document);
// console.log(document.domain);

// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);

// console.log(document.forms);
// console.log(document.links);


//GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
var headerTitle =document.getElementById('header-title');
var header =document.getElementById('main-header');
// console.log(headerTitle);
// var title= document.getElementsByClassName('title');
var bold= document.getElementById('add');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText='GoodBye';
// console.log(headerTitle.innerText);

// headerTitle.innerHTML='<h3>Hello</h3>';

headerTitle.style.borderBottom ='solid 3px #000';
header.style.borderBottom ='solid 3px #000';
bold.style.color='green';
bold.style.fontWeight='900';
