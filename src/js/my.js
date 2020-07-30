// Gallery slider
let indicators = $(".gallery__indicators .indicators__item");
$(indicators).click(function (event) {
    if (confirm('Нет готовых картинок, вы готовы видеть нечто?')) {

        let i = indicators.index(event.target);
        let container = $('.gallery__background');

        // container.animate({'opacity': 0}, 150, function () {
        switch (i) {
            case 0:
                container.css({'background-image': "url(img/gallery_1_with_dark_with_line.png)"});
                break;
            case 1:
                container.css({'background-image': "url(img/gallery_2.jpg)"});
                break;
            case 2:
                container.css({'background-image': "url(img/gallery_3.jpg)"});
                break;
            case 3:
                container.css({'background-image': "url(img/gallery_4.jpeg)"});
                break;
        }
        // container.animate({'opacity': 1}, 150);
        // });

        indicators.removeClass('indicators__item_active');
        $(event.target).addClass('indicators__item_active');
    }
});


$("#phone").on("focus", function () {
    $("#phone").attr("placeholder", "");
    $('#phone').val('+7 (');
});

$("#phone").on("blur", function () {
    $("#phone").attr("placeholder", "НОМЕР ТЕЛЕФОНА")
});


$('#phone').mask('+7 (000) 000 00 00');