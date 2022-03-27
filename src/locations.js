var locations;

window.addEventListener("DOMContentLoaded", async () => {
  fetch("https://api.npoint.io/f245921ce54a089858f1")
    .then((res) => res.json())
    .then((data) => (locations = data))
    .then(() => createTable(locations));

  function createTable(locations) {
    table = $("#locationList tbody").get()[0];
    Object.values(locations).forEach((place) => {
      row = table.insertRow(-1);
      row.insertCell(0).appendChild(document.createTextNode(place.name));
      $(row).children().addClass("locationNames");
      placeInfo = row.insertCell(1);
      placeInfo.colSpan = "4";
      placeInfo.appendChild(getPlaceInfo(place));
    });
  }

  function getPlaceInfo(place) {
    placeDesc = document.createElement("div");
    placeDesc.innerHTML = `<p style="display: block">${place.description}`;
    return document.createDocumentFragment().appendChild(placeDesc);
  }

  $(function () {
    $("td[colspan=4]").find("div").hide();
    $("#locationList").click(function (event) {
      event.stopPropagation();
      var $target = $(event.target);
      if ($target.closest("td").attr("colspan") > 1) {
        $target.slideUp();
      } else {
        $target.closest("td").next().find("div").slideToggle();
      }
    });
  });
});

function filterTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("locationSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("locationList");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
