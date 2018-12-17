var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {

  if (xhr.readyState === 4) {

    var classes = JSON.parse(xhr.responseText);

    var classesHTML = '<ul class="rooms">';

    for (var i = 0; i < rooms.json; i += 1){
      if (rooms.status === true){
        classesHTML += '<li class="full">';
      } else {
        classesHTML += '<li class="empty">';
      }
      classesHTML += rooms[i].number;
      classesHTML += '</li>';
    }
    classesHTML += '</ul>';
    document.getElementById('roomList').innerHTML = classesHTML;
  }
};

xhr.open('GET', 'data/rooms.json');
xhr.send();
