$('#nav-principal .liencat').on('click', function() {
    var str = $(this).attr('id');
    var id = str.slice(3,10);

    $('#nav-secondaire ul').hide();
    // $('#account').hide();

    // $('#closeBtn').fadeIn();
   
    $('#nav-secondaire #souscat' + id).fadeIn();
    $('#nav-secondaire .not-overlay').fadeIn(1000);

   
    $('#nav-secondaire .overlay').addClass('show');
    $('body').css({'overflow-y':'hidden', 'background': 'rgba(0,0,0,0.5)', 'transition':'0.5s'});
    // $('.overlay').addClass('show');

    $('#nav-principal a.active').removeClass('active');
    $(this).addClass('active');
     
});

// $('#closeBtn').on('click', function() {

//     $('#nav-secondaire .overlay').removeClass('show', 1000);
   
// });


$('.not-overlay').on('click', function(e) {
    $('#nav-secondaire .overlay').removeClass('show', 1000);
    $('#nav-secondaire ul').hide();
    $('#nav-secondaire .not-overlay').hide();
    $('#nav-principal a.active').removeClass('active');
    $('body').css({'overflow-y':'auto', 'background': 'none'});
});

$('.liensouscat').on('mouseover', function() { 
    $(this).next().fadeIn(1000);
    // $(this).append(' ').append($("<i></i>").addClass("fa-solid fa-arrow-right")); 
});

$('.liensouscat').on('mouseleave', function() {
    $('.liensouscat svg').hide();
});









