
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const FOLDER_ID = import.meta.env.VITE_DRIVE_FOLDER_ID;

export const fetchDriveFiles = async () => {
    if (!API_KEY || !FOLDER_ID || API_KEY.includes('YOUR_GOOGLE_API_KEY')) {
        console.warn("Google Drive API Credentials missing. Please check your .env file.");
        return [];
    }

    try {
        // Fetch files from the specific folder
        // Query: inside folder AND not trashed
        const query = `'${FOLDER_ID}' in parents and trashed = false`;
        const fields = 'files(id, name, mimeType, webViewLink, webContentLink)';

        const response = await fetch(
            `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=${encodeURIComponent(fields)}&key=${API_KEY}`
        );
        console.log(encodeURIComponent(query));
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Drive API Error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();

        // Map to the product structure used in the app
        // Assuming PDF files are named like "Product Name.pdf"
        return (data.files || []).map(file => {
            // Remove extension for display name
            const name = file.name.replace(/\.[^/.]+$/, "");

            return {
                id: file.id,
                name: name, // Derived from filename
                viewFileId: file.id,
                viewFileUrl: file.webViewLink,
                downloadFileId: file.id,
                fileName: file.name
            };
        });

    } catch (error) {
        console.error("Error fetching Drive files:", error);
        throw error;
    }
};
