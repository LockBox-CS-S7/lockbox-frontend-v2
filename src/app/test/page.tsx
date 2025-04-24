import { FileUpload } from "@/components/file-upload";
import UploadDialog from "@/components/upload-dialog";

export default function Test() {
    return (
        <div className="flex flex-col items-center justify-items-center min-w-full min-h-full">
            <FileUpload />
            <UploadDialog/>
        </div>
    );
}
