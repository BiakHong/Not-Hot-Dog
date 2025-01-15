const webcamElement = document.getElementById('webcam');
const statusElement = document.getElementById('status');
const overlay = document.getElementById('overlay');
const context = overlay.getContext('2d');
overlay.width = 640;
overlay.height = 480;

let model;

// Load the COCO-SSD model
cocoSsd.load().then(loadedModel => {
    model = loadedModel;
    statusElement.textContent = "Model loaded. Initializing webcam...";
    startWebcam();
});

// Start webcam feed
function startWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            webcamElement.srcObject = stream;
            webcamElement.addEventListener('loadeddata', predictWebcam);
            statusElement.textContent = "Webcam started.";
        })
        .catch(error => {
            console.error("Error accessing webcam:", error);
            statusElement.textContent = "Error accessing webcam.";
        });
}

// Predict objects in the webcam feed
function predictWebcam() {
    model.detect(webcamElement).then(predictions => {
        // Clear canvas
        context.clearRect(0, 0, overlay.width, overlay.height);

        let isHotDog = false;

        predictions.forEach(prediction => {
            const [x, y, width, height] = prediction.bbox;

            // Check if the object is a hot dog
            if (prediction.class === "hot dog" && prediction.score > 0.5) {
                isHotDog = true;

                // Draw bounding box for hot dog
                context.strokeStyle = "green";
                context.lineWidth = 4;
                context.strokeRect(x, y, width, height);

                // Display label
                context.fillStyle = "green";
                context.font = "18px Arial";
                context.fillText(
                    `${prediction.class} (${(prediction.score * 100).toFixed(1)}%)`,
                    x,
                    y > 20 ? y - 10 : y + 20
                );
            } else {
                // Draw bounding box for other objects
                context.strokeStyle = "red";
                context.lineWidth = 4;
                context.strokeRect(x, y, width, height);

                // Display label
                context.fillStyle = "red";
                context.font = "18px Arial";
                context.fillText(
                    // `${prediction.class} (${(prediction.score * 100).toFixed(1)}%)`,
                    "Not Hot Dog",
                    x,
                    y > 20 ? y - 10 : y + 20
                );
            }
        });

        // Update status
        statusElement.textContent = isHotDog ? "🌭 Hot Dog Detected!" : "Not a Hot Dog";

        // Call predictWebcam again
        requestAnimationFrame(predictWebcam);
    });
}
