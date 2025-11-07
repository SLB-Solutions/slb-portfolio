// Minimal JS to set current year and enable nav toggle.

        // Move to /assets/js/main.js and expand for better organization.
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile nav toggle behavior
        (function () {
            var toggle = document.querySelector('.nav-toggle');
            var menu = document.getElementById('primary-menu');
            if (!toggle || !menu) return;
            toggle.addEventListener('click', function () {
                var expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', String(!expanded));
                menu.classList.toggle('is-open');
            });
        })();

        // Basic contact form submission placeholder (enhance in /assets/js/main.js)
        (function () {
            var form = document.getElementById('contact-form');
            if (!form) return;
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                // TODO: Replace with AJAX POST to your API endpoint and show success/error UI
                alert('Thank you! Your message has been captured. Implement server submission in /assets/js/main.js');
                form.reset();
            });
        })();