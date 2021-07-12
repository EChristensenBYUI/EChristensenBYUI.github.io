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
            card.appendChild(imglink);
            imglink.appendChild(img);
         
            card.appendChild(link);
            link.appendChild(website);
            card.appendChild(phone);

            document.querySelector('div.Dcontainer').appendChild(card);

        }

  });