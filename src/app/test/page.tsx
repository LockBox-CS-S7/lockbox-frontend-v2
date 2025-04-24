"use client"

import { useState } from "react";
import { FileUpload, FileItem } from "@/components/file-upload";
import UploadDialog from "@/components/upload-dialog";

export default function Test() {
    const [files, setFiles] = useState<FileItem[]>([])
    
    return (
        <div className="flex flex-col items-center justify-items-center min-w-full min-h-full">
            <FileUpload files={files} setFiles={setFiles}/>
            <UploadDialog open={true}/>
        </div>
    );
}
