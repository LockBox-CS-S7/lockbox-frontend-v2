"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FileUpload, FileItem } from "./file-upload"
import { FileService } from "@/services/file-service"

interface UploadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleUpload = async () => {
    if (files.length === 0) return

    try {
      // Here you would implement your file upload logic
      // You can access the actual File objects through files.map(f => f.file)
      console.log("Files to upload:", files.map(f => f.file));
      
      files.map(f => {
        const service = new FileService();
        // TODO: Use the actual user id here.
        service.uploadFile(f.file, "fake-user-id"); 
      });

      // Close the dialog after successful upload
      onOpenChange(false)
      setFiles([])
    } catch (error) {
      console.error("Upload failed:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <FileUpload files={files} setFiles={setFiles} />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={files.length === 0}>
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}