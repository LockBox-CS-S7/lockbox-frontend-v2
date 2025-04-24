"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Upload, X, File, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

type FileStatus = "idle" | "uploading" | "success" | "error";

export interface FileItem {
    file: File;
    id: string;
    progress: number;
    status: FileStatus;
    previewUrl?: string;
}

interface FileUploadProps {
    files: FileItem[];
    setFiles: React.Dispatch<React.SetStateAction<FileItem[]>>
}

export function FileUpload({ files, setFiles }: FileUploadProps) {
    // const [files, setFiles] = useState<FileItem[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

        if (e.dataTransfer.files) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(e.target.files);
        }
    };

    const handleFiles = (fileList: FileList) => {
        const newFiles = Array.from(fileList).map((file) => ({
            file,
            id: crypto.randomUUID(),
            progress: 0,
            status: "idle" as FileStatus,
            previewUrl: file.type.startsWith("image/")
                ? URL.createObjectURL(file)
                : undefined,
        }));

        setFiles((prev) => [...prev, ...newFiles]);

        // Start uploading each file
        newFiles.forEach((fileItem) => {
            uploadFile(fileItem);
        });
    };

    const uploadFile = async (fileItem: FileItem) => {
        // Update status to uploading
        setFiles((prev) =>
            prev.map((item) =>
                item.id === fileItem.id
                    ? { ...item, status: "uploading" }
                    : item,
            ),
        );

        // Simulate upload progress
        const interval = setInterval(() => {
            setFiles((prev) =>
                prev.map((item) => {
                    if (item.id === fileItem.id && item.progress < 100) {
                        return {
                            ...item,
                            progress: Math.min(item.progress + 5, 100),
                        };
                    }
                    return item;
                }),
            );
        }, 200);

        // Simulate upload completion after progress reaches 100%
        setTimeout(() => {
            clearInterval(interval);
            setFiles((prev) =>
                prev.map((item) =>
                    item.id === fileItem.id
                        ? { ...item, status: "success", progress: 100 }
                        : item,
                ),
            );
            toast({
                title: "File uploaded successfully",
                description: `${fileItem.file.name} has been uploaded.`,
            });
        }, 4000);
    };

    const removeFile = (id: string) => {
        setFiles((prev) => {
            const updatedFiles = prev.filter((item) => item.id !== id);
            // Revoke object URLs to avoid memory leaks
            const fileToRemove = prev.find((item) => item.id === id);
            if (fileToRemove?.previewUrl) {
                URL.revokeObjectURL(fileToRemove.previewUrl);
            }
            return updatedFiles;
        });
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="space-y-4">
            <div
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    isDragging
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/25 hover:border-primary/50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileInput}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    className="hidden"
                    multiple
                />
                <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-muted">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium">
                        Drag files here or click to upload
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Support for images, documents, and other files up to
                        10MB
                    </p>
                </div>
            </div>

            {files.length > 0 && (
                <div className="space-y-2">
                    <h4 className="text-sm font-medium">
                        Files ({files.length})
                    </h4>
                    <ul className="space-y-2">
                        {files.map((fileItem) => (
                            <li
                                key={fileItem.id}
                                className="flex items-start gap-4 p-3 rounded-md border"
                            >
                                <div className="shrink-0">
                                    {fileItem.previewUrl ? (
                                        <div className="h-12 w-12 rounded overflow-hidden border">
                                            <img
                                                src={
                                                    fileItem.previewUrl ||
                                                    "/placeholder.svg"
                                                }
                                                alt={fileItem.file.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-12 w-12 rounded bg-muted flex items-center justify-center">
                                            <File className="h-6 w-6 text-muted-foreground" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm font-medium truncate">
                                                {fileItem.file.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {(
                                                    fileItem.file.size / 1024
                                                ).toFixed(1)}{" "}
                                                KB
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                removeFile(fileItem.id);
                                            }}
                                        >
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">
                                                Remove file
                                            </span>
                                        </Button>
                                    </div>
                                    <div className="mt-2">
                                        <Progress
                                            value={fileItem.progress}
                                            className="h-1"
                                        />
                                    </div>
                                    <div className="mt-1 flex items-center">
                                        {fileItem.status === "uploading" && (
                                            <p className="text-xs flex items-center text-muted-foreground">
                                                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                                                Uploading... {fileItem.progress}
                                                %
                                            </p>
                                        )}
                                        {fileItem.status === "success" && (
                                            <p className="text-xs flex items-center text-green-600">
                                                <Check className="h-3 w-3 mr-1" />
                                                Upload complete
                                            </p>
                                        )}
                                        {fileItem.status === "error" && (
                                            <p className="text-xs text-red-600">
                                                Upload failed
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
