function setTime() {
    const selectTime = document.querySelector('[data-testid="test-user-time"]');
    const currentTime = Date.now()
    if (selectTime) {
        selectTime.textContent = currentTime;
    }
}
setTime();
setInterval(setTime, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('successMessage');
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        successMessage.style.display = 'none';
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';

        if (!nameInput.value.trim()) {
            nameError.textContent = 'Full name is required.';
        }

        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required.';
        } else if (!validEmail.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address (name@example.com).';
        }


        if (!subjectInput.value.trim()) {
            subjectError.textContent = 'Subject is required.';
        }


        if (!messageInput.value.trim()) {
            messageError.textContent = 'Message is required.';
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters.';
        }

        if (
            !nameError.textContent &&
            !emailError.textContent &&
            !subjectError.textContent &&
            !messageError.textContent
        ) {
            form.reset();
            successMessage.style.display = 'block';
            successMessage.focus();


            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim()) {
            nameError.textContent = '';
        }
    });

    emailInput.addEventListener('input', () => {
        if (validEmail.test(emailInput.value.trim())) {
            emailError.textContent = '';
        }
    });

    subjectInput.addEventListener('input', () => {
        if (subjectInput.value.trim()) {
            subjectError.textContent = '';
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length >= 10) {
            messageError.textContent = '';
        }
    });
});
