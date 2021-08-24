let toast = new Audio('media/mlg-airhorn.mp3');

function init() {
    //discount button click
    $('.code').on('click', function(e) {
        e.preventDefault();
        $('#product').html($(this).data('name'));
        $('#code').html($(this).data('code'));
        toast.pause();
        toast.currentTime = 0;
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });
    $(document).on('keydown', function(e) {
       if(e.keyCode === 27) { $('.toast').toast('dispose'); }
    });
}

$(document).ready(init);