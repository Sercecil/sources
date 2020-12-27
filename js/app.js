@@include('custom/webp.js', {})
@@include('custom/popup.js', {})
@@include('custom/placeholder.js', {})

let quantityButtons = document.querySelectorAll('.atvs__quantity-button');
if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function (e) {
            let value = parseInt(quantityButton.closest('.atvs__quantity').querySelector('input').value);
            if (quantityButton.classList.contains('atvs__quantity-button--plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.atvs__quantity').querySelector('input').value = value;
        });
    }
}
$(document).ready(function () {
    $(".dispatch__popup-close").click(function () {
        $(".dispatch__popup").hide();
        $(".popup").removeClass('show');

    });
    $(".dispatch__show-link").click(function (e) {
        e.preventDefault();
        $(".dispatch__popup").show();
        $(".popup").addClass('');
        $('.popup').animate({ scrollTop: $(document).height() + $(window).height() });
    });
});
jQuery.datetimepicker.setLocale('ru');
$("#datetimepicker1").click(function (e) {
    $(this).datetimepicker({
        format: 'd.m.Y H:i',
    });
})
$("#datetimepicker2").click(function (e) {
    $(this).datetimepicker({
        format: 'd.m.Y H:i',
    });
})
$("#datetimepicker3").click(function (e) {
    $(this).datetimepicker({
        format: 'd.m.Y H:i',
    });
})
$("#datetimepicker4").click(function (e) {
    $(this).datetimepicker({
        format: 'd.m.Y H:i',
    });
})
$("#datetimepicker5").click(function (e) {
    $(this).datetimepicker({
        format: 'd.m.Y H:i',
    });
})

$("#step_two").click(function (e) {

    e.preventDefault();

    $(this).removeClass('active');

    $(this).addClass('unactive');

    $("#step_three").removeClass('unactive');

    $("#step_three").addClass('active');

    $("#block_step-one").removeClass('active');

    $("#block_step-one").addClass('unactive');

    $("#block_step-two").removeClass('unactive');

    $("#step-two").addClass('active');

    $('.popup').animate({ scrollTop: 50 }, '300');
})


$("#step_three").click(function (e) {

    e.preventDefault();

    $(this).removeClass('active');
    $(this).addClass('unactive');


    $("#step_four").removeClass('unactive');

    $("#step_four").addClass('active');

    $("#block_step-two").removeClass('active');
    $("#block_step-two").addClass('unactive');

    $("#block_step-three").removeClass('unactive');
    $("#block_step-three").addClass('active');
})
$("#step_four").click(function (e) {

    e.preventDefault();

    $(".panel").addClass('unactive');


    $("#block_step-three").addClass('unactive');
    $("#block_step-three").removeClass('active');

    $("#block_step-four").removeClass('unactive');
    $("#block_step-four").addClass('active');
})

$("#next").click(function (e) {

    e.preventDefault();

    $("#block_step-five-declined").addClass('active');
    $("#block_step-five-declined").removeClass('unactive');

    $("#block_step-five-accepted").addClass('active');
    $("#block_step-five-accepted").removeClass('unactive');

    $("#block_step-four").removeClass('active');
    $("#block_step-four").addClass('unactive');
})
// ============

$("#back-1").click(function (e) {

    e.preventDefault();

    $("#block_step-two").removeClass('active');

    $("#block_step-two").addClass('unactive');
    $("#block_step-one").removeClass('unactive');
    $("#block_step-one").addClass('active');

    $("#step_three").removeClass('active');

    $("#step_three").addClass('unactive');
    $("#step_two").removeClass('unactive');
    $("#step_two").addClass('active');

})
$("#back-2").click(function (e) {

    e.preventDefault();

    $("#block_step-three").removeClass('active');

    $("#block_step-three").addClass('unactive');
    $("#block_step-two").removeClass('unactive');
    $("#block_step-two").addClass('active');

    $("#step_four").removeClass('active');

    $("#step_four").addClass('unactive');

    $("#step_three").removeClass('unactive');
    $("#step_three").addClass('active');
    $('.popup').animate({ scrollTop: 50 }, '300');
})

// ======================

$('#data-input').datetimepicker({
    format: 'd.m.Y H:i (изменить)',
});

$("#gift-btn_1").click(function (e) {

    e.preventDefault();

    $(this).removeClass('active');

    $(this).addClass('unactive');

    $("#gift-block_1").removeClass('active');

    $("#gift-block_1").addClass('unactive');

    $("#gift-block_2").removeClass('unactive');

    $("#gift-block_2").addClass('active');

    $("#gift-btn_2").removeClass('unactive');

    $("#gift-btn_2").addClass('active');

    $('.popup').animate({ scrollTop: 50 }, '0');
})
$("#gift-btn_2").click(function (e) {

    e.preventDefault();

    $(this).removeClass('active');

    $(this).addClass('unactive');

    $("#gift-block_2").removeClass('active');

    $("#gift-block_2").addClass('unactive');

    $("#gift-block_3").removeClass('unactive');

    $("#gift-block_3").addClass('active');

    $("#gift-btn_3").removeClass('unactive');

    $("#gift-btn_3").addClass('active');

    $('.popup').animate({ scrollTop: 50 }, '0');


})
$("#gift-btn_3").click(function (e) {

    e.preventDefault();

    $(".panel").addClass('unactive');

    $("#gift-block_3").removeClass('active');

    $("#gift-block_3").addClass('unactive');

    $("#gift-block_4").removeClass('unactive');

    $("#gift-block_4").addClass('active');

    $('.popup').animate({ scrollTop: 50 }, '0');


})
$("#gift-back_1").click(function (e) {

    e.preventDefault();

    $("#gift-block_1").removeClass('unactive');

    $("#gift-block_1").addClass('active');

    $("#gift-block_2").removeClass('active');

    $("#gift-block_2").addClass('unactive');

    $("#gift-btn_1").removeClass('unactive');

    $("#gift-btn_1").addClass('active');

    $("#gift-btn_2").removeClass('active');

    $("#gift-btn_2").addClass('unactive');


})
$("#gift-back_2").click(function (e) {

    e.preventDefault();

    $("#gift-block_2").removeClass('unactive');

    $("#gift-block_2").addClass('active');

    $("#gift-block_3").removeClass('active');

    $("#gift-block_3").addClass('unactive');

    $("#gift-btn_3").removeClass('active');

    $("#gift-btn_3").addClass('unactive');

    $("#gift-btn_2").removeClass('unactive');

    $("#gift-btn_2").addClass('active');
})

$("#postcard-checkbox_1").on("change",function(){
    if ($("#postcard-checkbox_1").is(":checked")){
        $("#postcard-checkbox_2").prop("checked", false);
    }
});
$("#postcard-checkbox_2").on("change",function(){
    if ($("#postcard-checkbox_2").is(":checked")){
        $("#postcard-checkbox_1").prop("checked", false);
    }
});
