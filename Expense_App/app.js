var buttn = document.getElementById('butn');
var expitemsElement = document.getElementById('expitems');

buttn.addEventListener('click', clickHandler);
expitemsElement.addEventListener('click',removeExp);
expitemsElement.addEventListener('click',editExp);

function clickHandler(event){
    event.preventDefault();
    const expamt = document.getElementById('expamt').value;
    const expdesc = document.getElementById('desc').value;
    const expcategory = document.getElementById('category').value;

    const expitems = {
        expamt,
        expdesc,
        expcategory
    };
    const expJson = JSON.stringify(expitems);

    localStorage.setItem(expdesc,expJson);

    var newexp=expamt+"-"+expdesc+"-"+expcategory;

    const li=document.createElement('li');
    li.className='explist';
    li.appendChild(document.createTextNode(newexp));

    //delet expense
      //delete expense
      var delbtn=document.createElement('button');
      delbtn.className="delete float-right";
        
      delbtn.appendChild(document.createTextNode('delete'));
    li.appendChild(delbtn);

    //edit expense
    var editbtn=document.createElement('button');
    editbtn.className="edit float-right";
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);

    expitemsElement.appendChild(li);
}


function removeExp(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            var userText=li.textContent;
            var expdesc=userText.split('-')[1];

            localStorage.removeItem(expdesc);

            expitemsElement.removeChild(li);
        }
    }
}

function editExp(e){
    if(e.target.classList.contains('edit')){
        const listItems=e.target.parentElement;
        const userText=listItems.textContent;
        const [expamt,expdesc,expcategory]=userText.split('-');

        localStorage.removeItem(expdesc);
        document.getElementById('expamt').value=expamt;
        document.getElementById('desc').value=expdesc;
        document.getElementById('category').value=expcategory;

        expitemsElement.removeChild(listItems);
    }
}