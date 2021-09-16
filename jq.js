/*global $, alert, console */

$(document).ready(function() {
    'use strict';
    // Trigger nice scroll plugin
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 6,
        cursorborder: '1px solid #f7600e'
    });

    //Change header hieght
    $('.header').height($(window).height());

    // Scroll to features
    $(".header .arrow i").click(function() {
        $("html, body").animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    // Show hidden Items 
    $(".show-more").click(function() {
        $(".our-work .hidden").fadeToggle();
    });

    // Check testimonial

    var leftArrow = $(".testimonial .fa-chevron-left"),
        rightArrow = $(".testimonial .fa-chevron-right");

    function checkClient() {

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

    }

    checkClient();

    $(".testimonial i").click(function() {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".testimonial .active").fadeOut(100, function() {
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                checkClient();
            });
        } else {
            $(".testimonial .active").fadeOut(100, function() {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClient();
            });
        }
    });
});