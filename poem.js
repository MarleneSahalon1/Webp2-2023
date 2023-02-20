var t = 0,
people = ['AMBITIOUS', 'FABULOUS', 'VIBRANT', 'DIRTY', 'FOODIE', 'TIMELESS', 'EXPENSIVE', 'SHOPAHOLIC', 'DIVERSITY'],
elements = ['TOWERING SKYSCRAPERS', 'BIG APPLE', 'TIMES SQUARE', 'YELLOW CABS', 'CENTRAL PARK', 'EMPIRE STATE BUILDING', 'ROCKEFELLER CENTER', 'TWIN TOWERS', 'GRAND CENTRAL', 'MADISON SQUARE GARDEN', 'FOOD CARTS', 'BROADWAY SHOWS', 'STATUE OF LIBERTY'],
settlers = ['THE DUTCH', 'GIOVANNI DA VERRAZZANO', 'NATIVE AMERICANS', 'ALIGONQUIAN', 'IMMIGRANTS', 'HUSTLERS', 'BUSINESSMEN'];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return 'THE LAND OF ' + choose(people) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WITH ' + choose(elements) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SETTLED BY ' + choose(settlers);
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 4500)
}