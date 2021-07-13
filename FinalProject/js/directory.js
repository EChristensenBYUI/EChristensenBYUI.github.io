





const requestURL = '/FinalProject/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        console.table(jsonObject);

        const directory = jsonObject['directory'];
        for (let i = 0; i < directory.length; i++ ) {

            let card = document.createElement('div');
            let h2 = document.createElement('h2');
            let imglink = document.createElement('a');
            let img = document.createElement('img');
            let website = document.createElement('p');
            let link = document.createElement('a');
            let phone = document.createElement('p');

            card.setAttribute('class', 'Ditem')
            h2.textContent = directory[i].name;
            img.setAttribute('src', directory[i].logourl);
            img.setAttribute('alt', directory[i].name + ' logo');

            imglink.setAttribute('href', directory[i].website)
            imglink.setAttribute('target', "_blank");
            website.textContent = directory[i].website;
            link.setAttribute('href', directory[i].website);
            link.setAttribute('target', "_blank");
            phone.textContent = directory[i].phone;
            website.setAttribute('class','website');

            card.appendChild(h2);
            card.appendChild(link);
            link.appendChild(website);
            card.appendChild(imglink);
            imglink.appendChild(img);
         
           
            card.appendChild(phone);

            document.querySelector('div.Dcontainer').appendChild(card);

        }

  });

  
const gridview = document.querySelector('.gridview');
const Dcontainer = document.querySelector('.Dcontainer');
const Ditem = document.querySelector('.Ditem');
const listview = document.querySelector('.listview');
const Dbuttons = document.querySelector('.Dbuttons');
const grid = document.querySelector('.grid');

  gridview.addEventListener('click', () => {
    
    Dcontainer.classList.toggle('listview')
    
  
  }, false);

  gridview.addEventListener('click', () => {
    grid.setAttribute('src', 'images/gridview.png')
    
  }, false);



  listview.forEach( x => {
    document.querySelector('.website').style.display="block";
  }
  )


gridview.addEventListener('click', () => {Ditem.classList.toggle('listviewItem')}, false);

//    List.forEach( x => {
  //document.querySelector('.Ditem').style.display="flex";
//});

