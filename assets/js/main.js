$(function () {
    // $('[data-toggle="tooltip"]').tooltip();
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    $('#btn-next').on('click', function () {
        plusSlides(1);
    });

    $('#btn-prev').on('click', function (e) {
        if (slideIndex < 2) {
        return false;
        }
        plusSlides(-1);
    });

    $('.btn-menu').on('click', function () {
        $('.sidebar-mini').toggle('show');
    });



    function showSlides(n) {
        var i;
        var slides = $('.mySlides');
        if (n > slides.length) {
            return false;
        }

        
console.log(n);

        if (n < 1) {
            n = 0;
            // return false;
            // slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        switch (slideIndex) {
            case 1:
                $('.progress').css('width', '20%');
                $('#btn-next').text('NEXT');
                break;
            case 2:
                $('.progress').css('width', '30%');
                $('#btn-next').text('NEXT');
                break;
            case 3:
                $('.progress').css('width', '40%');
                $('#btn-next').text('NEXT');
                break;
            case 4:
                $('.progress').css('width', '50%');
                $('#btn-next').text('NEXT');
                break;
            case 5:
                $('.progress').css('width', '60%');
                $('#btn-next').text('NEXT');
                break;
            case 6:
                $('.progress').css('width', '80%');
                $('#btn-next').text('NEXT');
                break;
            case 7:
                $('.progress').css('width', '100%');
                $('#btn-next').text('FINISH');
                break;
            default:
                $('.progress').css('width', '20%');
                
        }



        slides[slideIndex - 1].style.display = "block";
        console.log(slideIndex + slides[slideIndex - 1]);
        // dots[slideIndex - 1].className += " active";
    }

    // alert("Ybnl");
    // console.log("yeah");

    $('.btn-sort').each(function (elem) {
        this.addEventListener('click', function (e) {
            // for (var i = 0; i < $('.btn-sort').length; i++) {
            //     if (e.target.hasClass('active')) {
            //         e.target.removeClass('active');
            //     }
            // }
            $('.btn-sort').each(function (index, elem) {
                if (elem.hasClass('active')) {
                    elem.removeClass('active');
                }
            });
            e.target.addClass('active');
            console.log();
        })
    });

    $('#continue-checkout').on('click', function () {
        $('.group-domain-select').addClass('d-none');
        if ($('.group-address').hasClass('d-none')) {
            $('.group-address').addClass('d-block');
        }
    });

    $('#btn-proceed-payment').on('click', function () {
        $('.group-address').removeClass('d-block');
        if ($('.group-payment-method').hasClass('d-none')) {
            $('.group-payment-method').addClass('d-block');
        }
    });

    $('#btn-prev-payment').on('click', function () {
        $('.group-address').addClass('d-block');
        $('.group-payment-method').removeClass('d-block');
    });


});