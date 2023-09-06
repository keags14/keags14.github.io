let downloadStarted = false;

function startDownload() {
    // Check if download has already started
    if (downloadStarted) {
        alert("Download is already in progress.");
        return;
    }

    fetch("resources/Resume-Keagan-Gonsalves.pdf")
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Resume-Keagan-Gonsalves.pdf";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert("Your download has started. Please check your downloads folder.");

            // Set the downloadStarted flag to true to prevent multiple downloads
            downloadStarted = true;
        });
}


/*const downloadButton = document.getElementById("download-link");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");

downloadButton.addEventListener("click", () => {
    // Disable the download button
    downloadButton.setAttribute("disabled", "true");

    // Show the progress bar container
    progressContainer.style.display = "block";

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + "%";
        if (progress >= 100) {
            clearInterval(interval);
            // Enable the download button
            downloadButton.removeAttribute("disabled");
            // Hide the progress bar container
            progressContainer.style.display = "none";
        }
    }, 50); // Adjust the interval as needed
});*/
