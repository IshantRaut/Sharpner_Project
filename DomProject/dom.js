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
var title= document.getElementsByClassName('title');
var bold= document.getElementById('add');
headerTitle.textContent = 'Hello';
headerTitle.innerText='GoodBye';
// console.log(headerTitle.innerText);

// headerTitle.innerHTML='<h3>Hello</h3>';

headerTitle.style.borderBottom ='solid 3px #000';
header.style.borderBottom ='solid 3px #000';
bold.style.color='green';
bold.style.fontWeight='900';

//Get element by classname
var items= document.getElementsByClassName('list-group-item');
console.log(items);
// items[1].textContent =' Hello 2';
items[2].style.fontWeight='bold';
items[2].style.backgroundColor='green';

for(var i =0;i< items.length;i++){
    items[i].style.fontWeight='bold';
}


//Get Element by TagName
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';


for(var i=0;i< li.length;i++){
    li[i].style.fontWeight='bold';
}

//Query Selector
var header = document.querySelector('#main-header')
header.style.borderBottom='solid 4px #ccc';

var input = document.querySelector('input');
input.value='Hello World';

var submit = document.querySelector('input[type ="submit"]');
submit.value= 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';
