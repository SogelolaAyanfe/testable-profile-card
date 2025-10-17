function setTime() {
    const selectTime = document.querySelector('[data-testid="test-user-time"]');
    const currentTime = Date.now()
    if (selectTime) {
        selectTime.textContent = currentTime;
    }
}
setTime();
setInterval(setTime, 1000);