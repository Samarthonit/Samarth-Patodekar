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
