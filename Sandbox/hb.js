$.ajax({
    url: 'http://data.consumerfinance.gov/api/views.json',
    data: { format: "json" },
    success: function(response){
        console.log(response);
    },
    error: function(response){
        console.log('error');
    }
});


// var httpRequest = new XMLHttpRequest();
// var data = {};

// httpRequest.onreadystatechange = responseMethod;

// function responseMethod(){
//     //Do Something Here
    
//     if (httpRequest.readyState === XMLHttpRequest.DONE){
        
//         if (httpRequest.status === 200){
//             data = JSON.parse(httpRequest.responseText);
//             $(data).each(function(e){
//                 console.log(data[e].name);
//             })
//         } else {
//             console.log('There was a problem.');
//         }
//     }
// }

// httpRequest.open('GET', 'http://data.consumerfinance.gov/api/views.json');

// httpRequest.send();



























// $(document).ready(function () {
//     $("#myList").on('mouseenter mouseleave', 'li', function (e) {
//         console.log(e.type);
//         console.log(e.currentTarget);
//         if (e.type == "mouseenter") {
//             $(this).css('color', 'red');
//         }
//         if (e.type == "mouseleave") {
//             $(this).css('color', 'blue');
//         }
//     })
// });