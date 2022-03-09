var locations;
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

var template;
window.onload = async () => {
  fetch('/static/locations.json')
  .then(res => res.json())
  .then(data => locations = data)
  .then(() => alert(JSON.stringify(locations)));
   fetch('/static/locationTemplate.html')
  .then(res => res.json())
  .then(data => template = data)
  .then(() => alert(JSON.stringify(template)))
};
function searchLocation(value) {}
