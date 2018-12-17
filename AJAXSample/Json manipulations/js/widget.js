$(document).ready(function () {

    var url = 'data/employees.json';
    $.getJSON(url, function (response) {
      var statusHTML = '<ul class = "bulleted">';
      $.each(response, function(index, employee) {
        if (employee.inoffice === true) {
          statusHTML += '<li class = "in">';
        } else {
          statusHTML += '<li class = "out">';
        }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  });
});

$(document).ready(function () {

  var url = 'data/rooms.json';
  $.getJSON(url, function(response) {
    var statusHTML = '<ul class="rooms">';
    $.each(response, function(index, room) {
      if (room.available === true) {
        statusHTML += '<li class="full">';
      } else {
        statusHTML += '<li class="empty">';
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML);
  });
});
