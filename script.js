function uploadFile() {
    const fileInput = document.getElementById("fileUpload");
    const file = fileInput.files[0];

    if (file) {
        alert(`File ${file.name} uploaded successfully!`);
        // Here, you can implement further file upload logic, such as uploading to a server.
    } else {
        alert("Please select a file to upload.");
    }
}

function downloadFile() {
    const fileName = "example_file.txt"; // Example file name
    const fileContent = "This is an example file content.";

    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}
