// changes to make:
// DropdownBtn
// DropdownMenu
// isMenuOpen
// getMenu
// getDropdownMenu
// change currentDropdownContent to isDmenuOpen
// make getDmenu function that a variable can be set to
// switch statement use
// add function to cause form to submit when google search is done


var searchForm = document.querySelector('form');
var searchBox = searchForm.querySelector('.js-search-box');
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    location.href = 'https://www.google.com/search?q=' + searchBox.value;
});

var dropdownMenuBtns = document.querySelectorAll('.js-dd-btn');
var dropdownMenuEls = document.querySelectorAll('.js-dd-menu');

var getDropdownMenu = function(button) {
    return button.parentNode.querySelector('.js-dd-menu');
}

var openDropdown = function(button) {
    getDropdownMenu(button).style.display = 'block';
}

// close any open dropdown menus
var closeDropdownMenus = function() {
    dropdownMenuEls.forEach(function(menu) {
        menu.style.display = 'none';
    });
}

// attach onclick function to dropdown buttons to open their dropdown menu
dropdownMenuBtns.forEach(function(button) {
    button.addEventListener('click', function(e) {
        closeDropdownMenus();
        openDropdown(button);
    });
});

// determine if user clicked on element inside dropdown menu
var isClickInsideMenu = function(element) {
    for (var i = 0; i < dropdownMenuEls.length; i++) {
        if (dropdownMenuEls[i].contains(element)) return true; // return true if element is descendant of a dropdown menu
    }
}

// close any open dropdown menu if user clicks on whitespace
document.addEventListener('click', function(e) {
    if (e.target.className.includes('js-dd-btn') === false && !isClickInsideMenu(e.target)) {
        closeDropdownMenus();
    }
});













// // drop-down menu functionality for the menu
// var menuUl = document.querySelector('.menu');
// var currentDropdownBtn = '';
// var currentDropdownContent = '';
// document.addEventListener('click', function(event) {
//     // user clicks drop-down button while no drop-down content open
//     if (event.target.classList.contains('js-dd-btn') && currentDropdownContent === '') {
//         currentDropdownBtn = event.target;
//         currentDropdownContent = event.target.nextElementSibling;
//         currentDropdownContent.style.display = 'block';
//     }
//     // drop-down content open and user clicks corresponding drop-down button
//     else if (event.target === currentDropdownBtn && currentDropdownContent !== '') {
//         currentDropdownContent.style.display = 'none';
//         currentDropdownBtn = '';
//         currentDropdownContent = '';
//     } else {
//         var isNotClickOutside = currentDropdownContent.contains(event.target);
//         // drop-down content open and user clicks non-corresponding drop-down button
//         if (!isNotClickOutside && currentDropdownContent !== '' && event.target.classList.contains('js-dd-btn')) {
//             currentDropdownContent.style.display = 'none';
//             currentDropdownBtn = event.target;
//             currentDropdownContent = event.target.nextElementSibling;
//             currentDropdownContent.style.display = 'block';
//         }
//         // user clicks on whitespace while drop-down content open
//         else if (!isNotClickOutside && currentDropdownBtn !== '') {
//             currentDropdownBtn = '';
//             currentDropdownContent.style.display = 'none';
//         }
//     }
// });
