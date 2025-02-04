document.getElementById("shareBtn").addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out my Link Tree!',
            text: 'Here are my links and social profiles.',
            url: window.location.href
        }).then(() => {
            console.log('Successful share');
        }).catch((error) => {
            console.log('Error sharing:', error);
        });
    } else {
        alert("Web Share API is not supported in your browser.");
    }
});
const dialButton = document.getElementById('callBtn');

// Set the phone number to dial
const phoneNumber = 'tel:+918160898650'; // Replace with the desired phone number

// Add click event listener to dial the phone number
dialButton.addEventListener('click', function() {
    window.location.href = phoneNumber; // Open phone dialer on mobile or initiate call on desktop
});
