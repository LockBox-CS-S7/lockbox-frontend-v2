import {FileCard} from "@/components/file-card";

export default function FilesPage() {
    return (
        <div className="flex w-screen h-screen gap-3">
            <FileCard
                name="docs.pdf"
                size="4.2 MB"
                type="pdf"
                modified="Yesterday at 10:12 AM"
            />
            <FileCard
                name="docs.pdf"
                size="4.2 MB"
                type="pdf"
                modified="Yesterday at 10:12 AM"
            />
            <FileCard
                name="docs.pdf"
                size="4.2 MB"
                type="pdf"
                modified="Yesterday at 10:12 AM"
            />
        </div>
    );
}
