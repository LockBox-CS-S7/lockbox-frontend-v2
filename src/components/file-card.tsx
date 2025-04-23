import { Card, CardContent } from "@/components/ui/card";
import {
    MoreHorizontal,
    FileText,
    ImageIcon,
    FileSpreadsheet,
    FileIcon as FilePresentation,
    File,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FileCardProps {
    name: string;
    size: string;
    type:
        | "pdf"
        | "image"
        | "document"
        | "spreadsheet"
        | "presentation"
        | "other";
    modified: string;
}

export function FileCard({ name, size, type, modified }: FileCardProps) {
    const getIcon = () => {
        switch (type) {
            case "pdf":
                return <FileText className="h-8 w-8 text-red-500" />;
            case "image":
                return <ImageIcon className="h-8 w-8 text-blue-500" />;
            case "spreadsheet":
                return <FileSpreadsheet className="h-8 w-8 text-green-500" />;
            case "presentation":
                return <FilePresentation className="h-8 w-8 text-orange-500" />;
            case "document":
                return <FileText className="h-8 w-8 text-blue-500" />;
            default:
                return <File className="h-8 w-8 text-gray-500" />;
        }
    };

    const getPreview = () => {
        if (type === "image") {
            return (
                <div className="relative aspect-square w-full overflow-hidden rounded-t-lg mt-0">
                    <img
                        src="/placeholder.svg?height=100&width=100"
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </div>
            );
        }

        return (
            <div className="flex aspect-square w-full items-center justify-center rounded-t-lg bg-muted mt-0">
                {getIcon()}
            </div>
        );
    };

    return (
        <Card className="flex justify-end overflow-hidden max-w-[200px] max-h-[300px] aspect-[2/3]">
            {getPreview()}
            <CardContent className="p-3">
                <div className="space-y-1">
                    <div className="flex items-start justify-between">
                        <div className="truncate font-medium">{name}</div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Download</DropdownMenuItem>
                                <DropdownMenuItem>Share</DropdownMenuItem>
                                <DropdownMenuItem>Rename</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="text-xs text-muted-foreground">
                        {size} • Modified {modified}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
