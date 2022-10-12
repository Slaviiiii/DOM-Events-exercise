function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', toggle));

    function toggle(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let div = profile.querySelector('div');
            let btn = ev.target;
            if (ev.target.textContent == 'Show more') {
                div.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                div.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
} 