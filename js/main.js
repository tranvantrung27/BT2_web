// Main JavaScript file

$(document).ready(function() {
    
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            
            // Store hash
            var hash = this.hash;
            
            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 // Offset for fixed header
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
    
    // Add active class to current navigation item
    function setActiveNavItem() {
        var position = $(window).scrollTop();
        
        $('section').each(function() {
            var target = $(this).offset().top - 100;
            var id = $(this).attr('id');
            
            if (position >= target) {
                $('.navbar-nav .nav-item').removeClass('active');
                $('.navbar-nav .nav-item a[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    
    // Set active nav item on scroll
    $(window).on('scroll', function() {
        setActiveNavItem();
    });
    
    // Set active nav item on page load
    setActiveNavItem();
    
    // Portfolio hover effect for mobile
    if ($(window).width() < 768) {
        $('.portfolio-item').click(function() {
            $(this).find('.portfolio-overlay').toggleClass('mobile-visible');
        });
    }
    
    // Initialize carousel
    $('.carousel').carousel({
        interval: 5000
    });
    
});

// Preloader
$(window).on('load', function() {
    if($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});