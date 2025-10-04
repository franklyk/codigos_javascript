$(document).ready(function () {
    $('#btn-search').click(
        function () {
            if ($('#search').height() == 0) {
                $('#search').animate(({ height: '70px' }));
                $('#menu-dropdown').animate(({ width: '0px' }))
                console.log($('#search').height())
            } else {
                $('#search').animate(({ height: '0px' }))
                console.log($('#search').height())
            }
        }
    )
    $('#btn-menu').click(
        function () {
            if($(window).width() <= 860){
                if ($('#menu-dropdown').width() == 0) {
                    $('#menu-dropdown').animate(({ width: '200px' }));
                    $('#search').animate(({ height: '0px' }))
                    console.log($('#menu-dropdown').width())
                } else {
                    $('#menu-dropdown').animate(({ width: '0px' }))
                    console.log($('#menu-dropdown').width())
                }
            }else{
                if ($('#menu-dropdown').width() == 0) {
                    $('#menu-dropdown').animate(({ width: '200px' }));
                    // $('#search').animate(({ height: '0px' }))
                    console.log($('#menu-dropdown').width())
                } else {
                    $('#menu-dropdown').animate(({ width: '0px' }))
                    console.log($('#menu-dropdown').width())
                }
            }
        }
    )
    
    $('#btn-description').click(
        function(){
            $('#container-description').addClass('active');
            $('#container-specification').removeClass('active');
        }
    )
    $('#btn-details').click(
        function(){
            $('#container-specification').addClass('active');
            $('#container-description').removeClass('active');
        }
    )
});


$("#frmAppl").on("submit", function (event) {
    event.preventDefault();
    var error_ele = document.getElementsByClassName('err-msg');
    if (error_ele.length > 0) {
        for (var i = error_ele.length - 1; i >= 0; i--) {
            error_ele[i].remove();
        }
    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    $.ajax({
        url: "{{ route('application.store') }}",
        type: "POST",
        data: new FormData(this),
        dataType: 'json',
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function () {
            $("#submitBtn").prop('disabled', true);
        },
        success: function (data) {
            if (data.success) {
                $("#frmAppl")[0].reset();
                $("#showMsg").modal('show');

            }
            else {
                $.each(data.error, function (key, value) {
                    var el = $(document).find('[name="' + key + '"]');
                    el.after($('<span class= "err-msg">' + value[0] + '</span>'));

                });
            }
            $("#submitBtn").prop('disabled', false);
        },
        error: function (err) {
            $("#message").html("Some Error Occurred!")
        }
    });
});


$("#itemForm").on('submit', function (e) {
    e.preventDefault();

    // clear the existing messages
    var errElement = document.getElementsByClassName('err-msg');
    if (errElement.length > 0) {
        for (var i = errElement.length - 1; i >= 0; i--) {
            errElement[i].remove();
        }
    }

    $.ajax({
        url: "{{route('item.store')}}",
        type: "post",
        data: new FormData(this),
        dataType: 'json',
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.error) {
                //validation fails
                // console.log(response.error); 
                $.each(response.error, function (key, value) {
                    var inputElement = $(document).find('[name="' + key + '"]');
                    inputElement.after('<span class="err-msg">' + value[0] + '</span>');

                });

            } else {
                // data inserted, display success message
                $("#itemForm")[0].reset();
                $(".show-msg").html('<div class="alert alert-success">' + response.success + '</div>');

            }
        }

    });
});



$(document).ready(function () {
    $('#btn-search').click(
        function () {
            if ($('#search').height() == 0) {
                $('#search').animate(({ height: '70px' }));
                $('#menu-dropdown').animate(({ width: '0px' }))
                console.log($('#search').height())
            } else {
                $('#search').animate(({ height: '0px' }))
                console.log($('#search').height())
            }
        }
    )
    $('#btn-menu').click(
        function () {
            if($(window).width() <= 860){
                if ($('#menu-dropdown').width() == 0) {
                    $('#menu-dropdown').animate(({ width: '200px' }));
                    $('#search').animate(({ height: '0px' }))
                    console.log($('#menu-dropdown').width())
                } else {
                    $('#menu-dropdown').animate(({ width: '0px' }))
                    console.log($('#menu-dropdown').width())
                }
            }else{
                if ($('#menu-dropdown').width() == 0) {
                    $('#menu-dropdown').animate(({ width: '200px' }));
                    // $('#search').animate(({ height: '0px' }))
                    console.log($('#menu-dropdown').width())
                } else {
                    $('#menu-dropdown').animate(({ width: '0px' }))
                    console.log($('#menu-dropdown').width())
                }
            }
        }
    )
    
    $('#btn-description').click(
        function(){
            $('#container-description').addClass('active');
            $('#container-specification').removeClass('active');
        }
    )
    $('#btn-details').click(
        function(){
            $('#container-specification').addClass('active');
            $('#container-description').removeClass('active');
        }
    )
});



// let sidebar = document.querySelector('#sidebar');
// let content = document.querySelector('.content');

// document.querySelector('#btn-menu').onclick = () => {
//     sidebar.classList.toggle('active');

// }

// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//         'total': t,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds
//     };
// }

// function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');

//     function updateClock() {
//         var t =
//             function getTimeRemaining(endtime) {
//                 var t = Date.parse(endtime) - Date.parse(new Date());
//                 var seconds = Math.floor((t / 1000) % 60);
//                 var minutes = Math.floor((t / 1000 / 60) % 60);
//                 var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//                 var days = Math.floor(t / (1000 * 60 * 60 * 24));
//                 return {
//                     'total': t,
//                     'days': days,
//                     'hours': hours,
//                     'minutes': minutes,
//                     'seconds': seconds
//                 };
//             }

//         function initializeClock(id, endtime) {
//             var clock = document.getElementById(id);
//             var daysSpan = clock.querySelector('.days');
//             var hoursSpan = clock.querySelector('.hours');
//             var minutesSpan = clock.querySelector('.minutes');
//             var secondsSpan = clock.querySelector('.seconds');

//             function updateClock() {
//                 var t = getTimeRemaining(endtime);

//                 daysSpan.innerHTML = t.days;
//                 hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//                 minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//                 secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//                 if (t.total <= 0) {
//                     clearInterval(timeinterval);
//                 }
//             }

//             updateClock();
//             var timeinterval = setInterval(updateClock, 1000);
//         }

//         var deadline = new Date(Date.parse(new Date('2024/05/01')));
//         initializeClock('exclusive-deal', deadline);
//         getTimeRemaining(endtime);

//         daysSpan.innerHTML = t.days;
//         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }

//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
// }

// var deadline = new Date(Date.parse(new Date('2024/05/01')));
// initializeClock('exclusive-deal', deadline);
