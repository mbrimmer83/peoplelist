$(function() {

  var people;

  // Get request for data
  $.get('http://demo1227708.mockable.io/people', function(data) {
    people = data;
    people.sort(sort_by('age', false));
    var peopleHtml = peopleLoop(people);
    $('#people').append(peopleHtml.join(""));
  });

  // Sort on click function
  $('#sort').click(function() {
    var order;
    var option = $('#sortBy').val();
    var orderOption = $("input:radio[name='order']:checked").val();
    if (orderOption === "asc") {
      order = false;
    }
    else {
      order = true;
    }

    people = people.sort(sort_by(option, order));
    peopleHtml = peopleLoop(people);
    $('#people').empty().append(peopleHtml.join(""));
  });
});

// Contstruct html array for append
function peopleLoop(people) {
  var peopleHtml = [];
  $.each(people, function(index, person) {
    if (person.age < 21) {
      peopleHtml.push('<tr class="underAge"><td class="name">' + person.firstName + ' ' + person.lastName + '</td>' + '<td class="age">' + 'Age: ' + person.age + '</td></tr><br>');
    }
    else {
      peopleHtml.push('<tr><td class="name">' + person.firstName + ' ' + person.lastName + '</td>' + '<td class="age">' + 'Age: ' + person.age + '</td></tr><br>');
    }
  });
  return peopleHtml;
}

// sort by object property in ascending or descending order. Pass in boolean that is converted to a number
function sort_by(option, reverse){

   var key = function(x) {return x[option];};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     };
}
