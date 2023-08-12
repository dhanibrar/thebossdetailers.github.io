
<script>
    var nameInput = document.querySelector('input[name="Name"]');
    var emailInput = document.querySelector('input[name="Email"]');
    var messageInput = document.querySelector('textarea[name="Message"]');
    var form = document.querySelector('form');
    function validateForm() {
        var isValid = true;

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
</script>