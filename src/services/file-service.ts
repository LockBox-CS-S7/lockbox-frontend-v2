import axios from "axios";

/**
 * Represents the file data as it is received by the `FileStorageService` microservice.
 */
export interface fileData {
    id: string;
    user_id: string;
    file_name: string;
    file_type: string;
    contents: any;
}

/**
 * The service used to interact with the `FileStorageService` microservice from the LockBox project.
 */
export class FileService {
    address = "http://localhost:8080/api";
    
    /**
     * Uploads a file to the server.
     * @param file The file to upload.
     * @param userId The user's id to upload the file for.
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

    /**
     * Get all files that belong to a specific user by fetching the `FileStorageService` using `Axios`.
     * @param userId The id of the user all files should be retrieved from.
     */
    async getAllUserFiles(userId: string): Promise<fileData[] | null> {
        try {
            const res = await axios.get(`${this.address}/user-files/${userId}`);
            return res.data;
        } catch (err) {
            console.error("Encountered an error when getting all user files:", err);
            return null;
        }
    }
}
