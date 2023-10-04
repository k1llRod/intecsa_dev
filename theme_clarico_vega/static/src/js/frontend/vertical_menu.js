odoo.define('theme_clarico_vega.vertical_menu', function(require) {
    'use strict';

    var publicWidget = require('web.public.widget');

    publicWidget.registry.vertical_menu = publicWidget.Widget.extend({
        selector: ".te_bar_icon",
        start: function () {
            self = this;
            self.callVerticalMenu();
        },
        callVerticalMenu: function(){
            // Vertical menu toggle
            $('.te_bar_icon').on('click', function(){
                if($('.menu_vertical_option').length){
                    $(".te_vertical_menu").addClass('te_open').show('slow');
                    $("#wrapwrap").addClass("te_menu_overlay");
                }
                if( $('.te_vertical_menu.te_open').length ){
                    $('header#top').css('z-index','99');
                }
            });
            $(document).keyup(function(e) {
                 if (e.keyCode == 27) {
                   if ($(".te_vertical_menu").hasClass("te_open")) {
                        $(".te_vertical_menu").removeClass("te_open");
                        $("#wrapwrap").removeClass("te_menu_overlay");
                   }
                 }
            });
            $('.te_menu_icon_close').click(function(){
                $(".te_vertical_menu").removeClass("te_open");
                $("#wrapwrap").removeClass("te_menu_overlay");
                if( $('.te_vertical_menu').length ){
                    $('header#top').css('z-index','1030');
                }
            });
            // Vertical menu position
            var $h_menu = $("#oe_main_menu_navbar").height();
            if($('.te_vertical_menu').hasClass('te_vertical_style_10')) {
                $(".te_vertical_menu").css({top:$h_menu + 0, bottom: 0, left: 0, position:'fixed', 'z-index':9999});
            } else {
                $(".te_vertical_menu").css({top:$h_menu + 0, bottom: 0, right: 0, position:'fixed', 'z-index':9999});
            }
        },
    });
});