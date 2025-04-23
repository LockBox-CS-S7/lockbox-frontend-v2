"use client"

import { useState } from "react"
import {
    File,
    FileText,
    FileImage,
    FileAudio,
    FileVideo,
    Folder,
    MoreVertical,
    Download,
    Trash2,
    Share2,
    Info,
} from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { formatBytes } from "@/lib/utils"
import { cn } from "@/lib/utils"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export interface FileEntryProps {
    id: string
    name: string
    type: string
    size: number
    modified: Date
    isFolder?: boolean
    onSelect?: (id: string) => void
    onDownload?: (id: string) => void
    onDelete?: (id: string) => void
    onShare?: (id: string) => void
    onInfo?: (id: string) => void
}

export function FileEntry({
                              id,
                              name,
                              type,
                              size,
                              modified,
                              isFolder = false,
                              onSelect,
                              onDownload,
                              onDelete,
                              onShare,
                              onInfo,
                          }: FileEntryProps) {
    const [isSelected, setIsSelected] = useState(false)

    const handleSelect = () => {
        setIsSelected(!isSelected)
        if (onSelect) {
            onSelect(id)
        }
    }

    const getFileIcon = () => {
        if (isFolder) return <Folder className="h-8 w-8 text-blue-500" />

        if (type.startsWith("image/")) return <FileImage className="h-8 w-8 text-green-500" />
        if (type.startsWith("audio/")) return <FileAudio className="h-8 w-8 text-purple-500" />
        if (type.startsWith("video/")) return <FileVideo className="h-8 w-8 text-pink-500" />
        if (type.startsWith("text/")) return <FileText className="h-8 w-8 text-amber-500" />

        return <File className="h-8 w-8 text-gray-500" />
    }

    const getFileExtension = (fileName: string) => {
        return fileName.split(".").pop()?.toUpperCase() || ""
    }

    return (
        <div
            className={cn(
                "group relative flex flex-col items-center p-3 rounded-lg border border-transparent transition-all",
                "hover:bg-accent hover:border-accent-foreground/10",
                isSelected && "bg-accent border-accent-foreground/20",
            )}
            onClick={handleSelect}
        >
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-accent-foreground/10">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {!isFolder && onDownload && (
                            <DropdownMenuItem
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onDownload(id)
                                }}
                            >
                                <Download className="mr-2 h-4 w-4" />
                                <span>Download</span>
                            </DropdownMenuItem>
                        )}
                        {onShare && (
                            <DropdownMenuItem
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onShare(id)
                                }}
                            >
                                <Share2 className="mr-2 h-4 w-4" />
                                <span>Share</span>
                            </DropdownMenuItem>
                        )}
                        {onInfo && (
                            <DropdownMenuItem
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onInfo(id)
                                }}
                            >
                                <Info className="mr-2 h-4 w-4" />
                                <span>Details</span>
                            </DropdownMenuItem>
                        )}
                        {onDelete && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="text-destructive focus:text-destructive"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onDelete(id)
                                    }}
                                >
                                    <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="mb-2 h-16 w-16 flex items-center justify-center">{getFileIcon()}</div>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="w-full text-center">
                            <p className="font-medium truncate max-w-[120px] mx-auto">{name}</p>
                            {!isFolder && <p className="text-xs text-muted-foreground">{getFileExtension(name)}</p>}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{name}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <div className="mt-1 text-xs text-muted-foreground">
                {isFolder ? <span>Folder</span> : <span>{formatBytes(size)}</span>}
            </div>

            <div className="mt-1 text-xs text-muted-foreground">{formatDistanceToNow(modified, { addSuffix: true })}</div>
        </div>
    )
}
