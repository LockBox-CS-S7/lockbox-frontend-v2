"use client";

import type React from "react";

import { useState } from "react";
import { Upload, File } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UploadDropzone() {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        // In a real app, we would handle file upload here
        console.log("Files dropped:", e.dataTransfer.files);
    };

    return (
        <div
            className={`flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 text-center transition-colors ${
                isDragging
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/25"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="flex flex-col items-center gap-2">
                <Upload
                    className={`h-8 w-8 ${isDragging ? "text-primary" : "text-muted-foreground"}`}
                />
                <div className="grid gap-1">
                    <p className="text-sm font-medium">
                        Drag & drop files here or
                    </p>
                    <Button size="sm" variant="secondary">
                        <File className="mr-2 h-4 w-4" />
                        Browse Files
                    </Button>
                </div>
            </div>
        </div>
    );
}
