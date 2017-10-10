$(document).ready(function () {

    var LIST = $('.list');
    var ITEM_TEMPLATE = $('#item-template').html();
    var PREVIEW_TEMPLATE = $("#pr-template").html();


    $("#addingButton").click(function () {
        var name = $('.input-text').val();
        if(name.replace(/\s/g, '').length > 0) {
            alert("Namfsdfjsdfjn");
            addItem(name);
        }
    });

    function addItem(name) {
        var bought = false;
        var $item = $(ITEM_TEMPLATE);
        var $preview = $(PREVIEW_TEMPLATE);
        var fade_time = 100;


        $item.find('.item-name').text(name);
        $preview.find('.label').text(name);

        $item.find('.button-delete').click(function () {
            //$item.remove();
            $item.slideUp(fade_time, function () {
                $item.remove();
            });
            $preview.fadeOut(fade_time, function () {
                $preview.remove();
            });
        });

        var quantity = 1;

        function edit_text(valid) {
            var new_name
        }

        $item.find('.input-text').keypress(
            function (e) {
                if (e.which === 13) {
                    addItem(($('.input-text').val()));
                    return false;
                }
            }).focusout(function() {

        }).val('');

        $item.find('.button-bought').click(function () {
            bought = !bought;

            if (bought) {
                $item.find('.button-minus').hide();
                $item.find('.button-plus').hide();
                $item.find('.label-count').show();
                $item.find('.button-bought').text('Не куплено');
                $item.find('.button-bought').attr('data-tooltip', 'Забрати з Кулпеного');
                $item.find('.button-delete').hide();
                $item.find('.item-name').css('text-decoration', 'line-through');
            } else {
                //show
                $item.find('.button-minus').show();
                $item.find('.button-plus').show();
                $item.find('.label-count').show();
                $item.find('.button-bought').text('Куплено');
                $item.find('.button-delete').show();
                $item.find('.item-name').css('text-decoration', 'none');
            }
        });
        $item.hide().prependTo(LIST).fadeIn(400);

        $item.find('.button-plus').click(function () {

            quantity += 1;
            $preview.find('.orange-circle').html(quantity);

            $item.find('.label-count').fadeOut(fade_time, function () {

                $item.find('.label-count').html(quantity);
                $item.find('.label-count').fadeIn(fade_time);
                //TODO function as param in fadeIn



            });
            console.log(quantity)
        });
        $item.find('.button-minus').click(function () {
            var $preview = $(PREVIEW_TEMPLATE);
            if(quantity>1) {
                quantity -= 1;
                $preview.find('.orange-circle').html(quantity);

                $item.find('.label-count').fadeOut(fade_time, function () {

                    $item.find('.label-count').html(quantity);
                    $item.find('.label-count').fadeIn(fade_time);
                    //TODO function as param in fadeIn


                });
            }
            console.log(quantity)
        });
    }
    addItem('Помідорка');
    addItem('Сирок');
    addItem('Печиво');
    });




