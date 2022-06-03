$('#nav-principal .liencat').on('click', function() {
    var str = $(this).attr('id');
    var id = str.slice(3,10);

    $('#nav-secondaire ul').hide();
    $('#account').hide();

    $('#closeBtn').fadeIn();
   
    $('#nav-secondaire #souscat' + id).fadeIn();
   
    $('#nav-secondaire .overlay').addClass('show');
    // $('.overlay').addClass('show');

    $('#nav-principal li.active').removeClass('active');
    $(this).parent().addClass('active');
     
});

$('#closeBtn').on('click', function() {

    $('#nav-secondaire .overlay').removeClass('show', 1000);
   
});






