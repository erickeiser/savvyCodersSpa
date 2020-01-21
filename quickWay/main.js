$(document).ready(function(){
$('#choc_items, #sour_items, #baked_items, #home').hide()  

$('#choc').click(function(){
    $('#choc_items').show()
    $('#sour_items').hide()
    $('#baked_items').hide()
    $('.choose').hide()
    $('#home').show().addClass('animated slideInUp')
})

$('#sour').click(function(){
    $('#sour_items').show()
    $('#choc_items').hide()
    $('#baked_items').hide()
    $('.choose').hide()
    $('#home').show().addClass('animated slideInUp')
})

$('#baked').click(function(){
    $('#baked_items').show()
    $('#choc_items').hide()
    $('#sour_items').hide()

    $('.choose').hide()
    $('#home').show().addClass('animated slideInUp')
})

$('#home').click(function(){
    $('#baked_items').hide()
    $('#choc_items').hide()
    $('#sour_items').hide()

    $('.choose').show()
    $('#home').hide()
})




}) // END READY FUNCTION