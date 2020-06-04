const $ = window.$;

$(document).ready(function() {
    $('.count').prop('disabled', true);
    $(document).on('change', '.plus', function() {
        $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('change', '.minus', function() {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() === 0) {
            $('.count').val(1);
        }
    });
});