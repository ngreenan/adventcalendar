$(document).ready(function() {
  var today = new Date();
  var dayToday = today.getDate();

  //alert(dayToday);

  $('.perspective').each(function () {
    //get the door
    var door = $(this).find('.door');
    if (door.data('day') < dayToday) {
      door.addClass('opendoor');
      door.removeClass('closedoor');
    }
  });
});

$(document).on('click','.perspective', function () {
  //get child door element
  var door = $(this).find('.door');

  if (door.hasClass('opendoor')) {
    var imagePath = $(this).css('background-image');
    if (imagePath !== 'none') {
      $('#modalImage').css('display','block');
      $('#modalContent').css('background-image', imagePath);
      $('#modalCaption').text($(this).data('caption'));
    }
  } else if (door.hasClass('closingdoor')) {
    door.removeClass('closingdoor');
  } else {
    door.addClass('opendoor');
    door.removeClass('closedoor');
  }
});

$(document).on('click','.door', function() {
  //are we allowed to open the door yet??
  var today = new Date();
  var day = $(this).data('day');
  var doorDay = new Date(2017, 11, day, 0, 0, 0, 0);

  if (doorDay > today) {
    $(this).addClass('closingdoor');

    var dayText = '';
    if (day === 1 || day === 21) {
      dayText = day + 'st';
    } else if (day === 2 || day === 22) {
      dayText = day + 'nd';
    } else if (day === 3 || day === 23){
      dayText = day + 'rd';
    } else {
      dayText = day + 'th';
    }

    alert('Come back on the ' + dayText + '!');
  } else if ($(this).hasClass('opendoor')) {
    $(this).removeClass('opendoor');
    $(this).addClass('closingdoor');
    $(this).addClass('closedoor');
  }
})

$(document).on('click', '.modal-close', function() {
  $('#modalImage').css('display','none');
})
