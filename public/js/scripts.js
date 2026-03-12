// Wrap everything in DOMContentLoaded to ensure elements are found
document.addEventListener('DOMContentLoaded', () => {
    
    // --- HANDLE INITIALIZATION ---
    const initBtn = document.getElementById('initBtn');
    const initStatus = document.getElementById('initStatus');

    if (initBtn) {
        initBtn.addEventListener('click', async () => {
            initStatus.style.display = 'block';
            initStatus.innerText = "Initializing...";
            
            try {
                // Fixed path: /api/init-emoji
                const response = await fetch('/api/init-emoji');
                const data = await response.json();
                
                // Match the key 'message' from your app.mjs res.json()
                if (response.ok) {
                    initStatus.innerText = data.message;
                    initStatus.className = "success";
                } else {
                    // Show the specific error (like the Database connection error)
                    initStatus.innerText = data.error || "Initialization failed";
                    initStatus.className = "error";
                }
            } catch (err) {
                initStatus.innerText = "Error: Cannot connect to server";
                initStatus.className = "error";
            }
        });
    }

    // --- HANDLE SEARCH ---
    const nameForm = document.getElementById('nameForm');
    const resultParagraph = document.getElementById('result');

    if (nameForm) {
        nameForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const userName = document.getElementById('userName').value;
            resultParagraph.style.display = 'block';
            resultParagraph.textContent = 'Searching...';

            try {
                // Fixed path: /api/get-name
                const response = await fetch('/api/get-name', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userName }),
                });

                const data = await response.json();

                if (response.ok) {
                    // Show the name and emoji from the database result
                    resultParagraph.innerHTML = `Found: ${data.name} ${data.emoji}`;
                    resultParagraph.className = "success";
                } else {
                    resultParagraph.textContent = data.error || 'No result found';
                    resultParagraph.className = "error";
                }
            } catch (error) {
                resultParagraph.textContent = 'An error occurred. Please try again.';
                resultParagraph.className = "error";
            }
        });
    }
});