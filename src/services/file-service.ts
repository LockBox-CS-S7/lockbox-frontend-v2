import axios from "axios";


export default class FileService {
    address = "http://localhost:8080/api/";
    
    /**
     * Uploads a file to the server.
     * @param file The file to upload.
     */
    async uploadFile(file: File, userId: string) {
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("user_id", userId);
            
            const res = await axios.post(this.address, formData);
            console.log("File uploaded successfully, got response:", res.data);
        } catch (err) {
            console.error("Failed to upload file(s):", err);
        }
    }
}
