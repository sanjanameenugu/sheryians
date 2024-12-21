function toggleTab(tab) {
    const phoneTab = document.getElementById('phone-tab');
    const emailTab = document.getElementById('email-tab');
    const buttons = document.querySelectorAll('.tabs button');

    if (tab === 'phone') {
        phoneTab.style.display = 'block';
        emailTab.style.display = 'none';
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else {
        phoneTab.style.display = 'none';
        emailTab.style.display = 'block';
        buttons[0].classList.remove('active');
        buttons[1].classList.add('active');
    }
}
