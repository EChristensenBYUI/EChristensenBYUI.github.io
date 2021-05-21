const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const BOMlist = document.querySelector('.list');


// => this is shorthand for 'function ()'
button.addEventListener('click', () => {
    if (fav.value!='') {

        let newListItem = document.createElement('li');
        let delButton = document.createElement('button');
        
        newListItem.textContent = fav.value;
        delButton.textContent = '❌';
        //add button to newListItem
        newListItem.append(delButton);
        
        BOMlist.append(newListItem);
        
       delButton.addEventListener('click', function () {
           BOMlist.removeChild(newListItem);
           fav.focus();
        
       });
        
       fav.value = '';
       fav.focus;

    }


}

);