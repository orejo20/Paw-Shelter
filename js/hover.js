var url = window.location.href;

    document.querySelectorAll('.nav-link').forEach(function(navLink) {
        // Check if the nav link href matches the current page URL
        if (navLink.href === url) {
            // Add the 'active' class
            navLink.classList.add('active');
        }
    });
