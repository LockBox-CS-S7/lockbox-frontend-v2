"use client"

import { FileEntry } from "@/components/file-entry"


// Sample data for demonstration
const files = [
    {
        id: "1",
        name: "Project Documentation.pdf",
        type: "application/pdf",
        size: 2500000,
        modified: new Date(2023, 3, 15),
    },
    {
        id: "2",
        name: "Vacation Photos",
        type: "folder",
        size: 0,
        modified: new Date(2023, 4, 20),
        isFolder: true,
    },
    {
        id: "3",
        name: "presentation.pptx",
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        size: 5800000,
        modified: new Date(2023, 5, 10),
    },
    {
        id: "4",
        name: "profile-picture.jpg",
        type: "image/jpeg",
        size: 1200000,
        modified: new Date(2023, 6, 5),
    },
    {
        id: "5",
        name: "quarterly-report.xlsx",
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        size: 950000,
        modified: new Date(2023, 6, 12),
    },
    {
        id: "6",
        name: "meeting-recording.mp3",
        type: "audio/mpeg",
        size: 8500000,
        modified: new Date(2023, 6, 15),
    },
    {
        id: "7",
        name: "demo-video.mp4",
        type: "video/mp4",
        size: 25000000,
        modified: new Date(2023, 6, 18),
    },
    {
        id: "8",
        name: "Documents",
        type: "folder",
        size: 0,
        modified: new Date(2023, 6, 20),
        isFolder: true,
    },
]

export default function FileGrid() {
    const handleSelect = (id: string) => {
        console.log(`Selected file with id: ${id}`)
    }

    const handleDownload = (id: string) => {
        console.log(`Downloading file with id: ${id}`)
    }

    const handleDelete = (id: string) => {
        console.log(`Deleting file with id: ${id}`)
    }

    const handleShare = (id: string) => {
        console.log(`Sharing file with id: ${id}`)
    }

    const handleInfo = (id: string) => {
        console.log(`Viewing info for file with id: ${id}`)
    }

    return (
        <div className="container mx-auto p-6">


            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {files.map((file) => (
                    <FileEntry
                        key={file.id}
                        id={file.id}
                        name={file.name}
                        type={file.type}
                        size={file.size}
                        modified={file.modified}
                        isFolder={file.isFolder}
                        onSelect={handleSelect}
                        onDownload={handleDownload}
                        onDelete={handleDelete}
                        onShare={handleShare}
                        onInfo={handleInfo}
                    />
                ))}
            </div>
        </div>
    )
}
