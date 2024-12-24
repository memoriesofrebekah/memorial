const apiKey = 'd6c3030a6e6e19152bc6df29d6fdb31e';
const tag = 'rebekahforanmemories';
const photosContainer = document.getElementById('photos');

//fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&format=json&nojsoncallback=1`)
fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6c3030a6e6e19152bc6df29d6fdb31e&tags=rebekahforanmemories&format=json&nojsoncallback=1`)
  .then(response => response.json())
  .then(data => {
    if (data.photos.photo.length > 0) {
      data.photos.photo.forEach(photo => {
        const photoURL = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`; // Small square image
        const photoLink = `https://www.flickr.com/photos/${photo.owner}/${photo.id}`;
        
        const img = document.createElement('img');
        img.src = photoURL;
        img.alt = photo.title;
        img.style.margin = "10px";
        
        const a = document.createElement('a');
        a.href = photoLink;
        a.target = '_blank';
        a.appendChild(img);
        
        photosContainer.appendChild(a);
      });
    } else {
      photosContainer.innerHTML = '<p>No photos found.</p>';
    }
  })
  .catch(err => {
    console.error('Error fetching photos:', err);
    photosContainer.innerHTML = '<p>Error loading photos.</p>';
  });
