import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, ImageIcon, FileArchive, Film } from "lucide-react";

export function StorageStats() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Storage</CardTitle>
                <CardDescription>
                    You've used 64% of your storage
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <div>64.2 GB of 100 GB</div>
                        <div className="text-muted-foreground">64%</div>
                    </div>
                    <Progress value={64} className="h-2" />
                </div>

                <div className="space-y-2">
                    <h4 className="text-sm font-medium">Storage breakdown</h4>
                    <div className="grid gap-3">
                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-blue-500/10 p-1">
                                <ImageIcon className="h-4 w-4 text-blue-500" />
                            </div>
                            <div className="flex-1 text-sm">
                                <div className="flex items-center justify-between">
                                    <div>Images</div>
                                    <div className="font-medium">32.5 GB</div>
                                </div>
                                <Progress
                                    value={50}
                                    className="h-1 mt-1"
                                    indicatorClassName="bg-blue-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-amber-500/10 p-1">
                                <Film className="h-4 w-4 text-amber-500" />
                            </div>
                            <div className="flex-1 text-sm">
                                <div className="flex items-center justify-between">
                                    <div>Videos</div>
                                    <div className="font-medium">18.2 GB</div>
                                </div>
                                <Progress
                                    value={28}
                                    className="h-1 mt-1"
                                    indicatorClassName="bg-amber-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-green-500/10 p-1">
                                <FileText className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="flex-1 text-sm">
                                <div className="flex items-center justify-between">
                                    <div>Documents</div>
                                    <div className="font-medium">8.3 GB</div>
                                </div>
                                <Progress
                                    value={13}
                                    className="h-1 mt-1"
                                    indicatorClassName="bg-green-500"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-purple-500/10 p-1">
                                <FileArchive className="h-4 w-4 text-purple-500" />
                            </div>
                            <div className="flex-1 text-sm">
                                <div className="flex items-center justify-between">
                                    <div>Archives</div>
                                    <div className="font-medium">5.2 GB</div>
                                </div>
                                <Progress
                                    value={8}
                                    className="h-1 mt-1"
                                    indicatorClassName="bg-purple-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
