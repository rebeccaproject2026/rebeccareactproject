// Function to open Google Docs viewer
export const handleView = (fileId) => {
    // Opens Google Drive viewer in new tab
    const url = `https://drive.google.com/file/d/${fileId}/view`;
    window.open(url, '_blank');
};

// Function to download file
export const handleDownload = (fileId, fileName) => {
    // Google Drive direct download link
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'brochure.pdf';
    link.target = '_blank';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};