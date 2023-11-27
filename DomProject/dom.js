//Creating the variable

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//Form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click' ,removeItem);
filter.addEventListener('keyup',filterItems);



//Add item
function addItem(e){
e.preventDefault();

//get Input value of Both the item
var newItem = document.getElementById('item').value;
var newItem2 = document.getElementById('item1').value;


//Create new li element
var li = document.createElement('li');
li.className = 'list-group-item';


//add text node with input value
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(" "));
li.appendChild(document.createTextNode( newItem2 ));

//create the delete button element
var deleteBtn = document.createElement('button');

//Add classes tod elet button
deleteBtn.className='btn btn-danger btn-sm float-right delete ';
deleteBtn.appendChild(document.createTextNode('x'));
li.appendChild(deleteBtn);
itemList.appendChild(li);
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li= e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// function filterItems(e){
    
//     //convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     var items = itemList.getElementsByTagName('li');
    
//     //Convert to an array
//     Array.from(items).forEach(function(item, item1){
//         var itemName = item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display='block';
//         }else{
//             item.style.display='none';
//         }
     
//     });
// }

//...

function filterItems(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    //Convert to an array
    Array.from(items).forEach(function (item) {
        var item1 = item.childNodes[2]; // Get the third child node

        // Check if the third child exists and has text content
        var itemName = item1 && item1.textContent ? item.firstChild.textContent + " " + item1.textContent : item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

//...


// //EXAMINE THE DOCUMENT

// // console.dir(document);
// // console.log(document.domain);

// // // console.log(document.URL);
// // // console.log(document.title);
// // // console.log(document.doctype);
// // // console.log(document.head);
// // // console.log(document.all);

// // // console.log(document.forms);
// // // console.log(document.links);


// // //GET ELEMENT BY ID
// // // console.log(document.getElementById('header-title'));
// // var headerTitle =document.getElementById('header-title');
// // var header =document.getElementById('main-header');
// // // console.log(headerTitle);
// // var title= document.getElementsByClassName('title');
// // var bold= document.getElementById('add');
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText='GoodBye';
// // // console.log(headerTitle.innerText);

// // // headerTitle.innerHTML='<h3>Hello</h3>';

// // headerTitle.style.borderBottom ='solid 3px #000';
// // header.style.borderBottom ='solid 3px #000';
// // bold.style.color='green';
// // bold.style.fontWeight='900';

// // //Get element by classname
// // var items= document.getElementsByClassName('list-group-item');
// // console.log(items);
// // // items[1].textContent =' Hello 2';
// // items[2].style.fontWeight='bold';
// // items[2].style.backgroundColor='green';

// // for(var i =0;i< items.length;i++){
// //     items[i].style.fontWeight='bold';
// // }


// // //Get Element by TagName
// // var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight='bold';
// // li[1].style.backgroundColor='yellow';


// // for(var i=0;i< li.length;i++){
// //     li[i].style.fontWeight='bold';
// // }

// // //Query Selector
// // var header = document.querySelector('#main-header')
// // header.style.borderBottom='solid 4px #ccc';

// // var input = document.querySelector('input');
// // input.value='Hello World';

// // var submit = document.querySelector('input[type ="submit"]');
// // submit.value= 'SEND';

// // var item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:nth-child(3)');
// // lastItem.style.display='none';
// // var lastItem = document.querySelector('.list-group-item:nth-child(odd)');
// // lastItem.style.backgroundColor='green';

// //Traversign FOr DOM

// var itemList = document.querySelector('#items');

// //Parent Node
// console.log(itemList.parentNode);
//  itemList.parentNode.style.backgroundColor ='#f4f4f4';

// //child node
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //FirstChild

// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello1';

// //last child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello4';

// //sibling
// console.log(itemList.nextSibling);
// console.log(itemList.lastElementSibling);
// // itemList.lastElementSibling.textContent='Hello2';
// itemList.previousElementSibling.textContent='Hello2';

// //create Element

// var newDiv = document.createElement('div');
// //Add Class
// newDiv.className='hello';
// //add ID
// newDiv.id = 'hello1';

// //add attribute
// newDiv.setAttribute('title', 'Hello Div');
// console.log(newDiv);


// //create text node
// var newDivText = document.createTextNode('Hello world');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// container.insertBefore(newDiv, h1)


