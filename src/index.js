import './styles.css';

// 1. Gather the Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// 2. Attach the Listeners
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 3. Identify the Target
        const targetTab = btn.getAttribute('data-tab');
        // 4. Wipe the Slate Clean (Reset)
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        // 5. Highlight the Clicked Button
        btn.classList.add('active');
        // 6. Reveal the Matching Content
        // Find the element with the ID that matches our target (e.g., id="menu")
        const targetContent = document.getElementById(targetTab);
        targetContent.classList.add('active');
        
    });
});