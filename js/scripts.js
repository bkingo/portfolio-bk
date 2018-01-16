// reveal page content when page finishes loading

window.addEventListener("load", function() {
    console.log("All resources finished loading");
    document.querySelector('body').style.opacity = 1;
});

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("All resources finished loading");
//     document.querySelector('body').style.opacity = 1;
// });
