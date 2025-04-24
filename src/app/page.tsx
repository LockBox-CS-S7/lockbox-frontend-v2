"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Upload,
    Vault,
    ImageIcon,
    FileText,
    Plus,
    Clock,
    Star,
} from "lucide-react";
import { FileCard } from "@/components/file-card";
import { StorageStats } from "@/components/storage-stats";
import { FileUpload, FileItem } from "@/components/file-upload";

const fileGridStyles = "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8";

export default function Home() {
    
    const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([])
    
    return (
        <div className="flex min-h-screen w-full flex-col bg-slate-50">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <div className="flex items-center gap-2 font-semibold">
                    <Vault className="h-6 w-6" />
                    <span>LockBox</span>
                </div>
                <div className="ml-auto flex items-center gap-4">
                    <Link href="/login" passHref>
                        <Button variant="outline" size="sm">
                            Login
                        </Button>
                    </Link>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="rounded-full"
                    >
                        <img
                            src="/placeholder.svg?height=32&width=32"
                            width={32}
                            height={32}
                            alt="Avatar"
                            className="rounded-full"
                        />
                    </Button>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="col-span-full">
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-0.5">
                                <CardTitle className="text-xl">
                                    Welcome back, Alex
                                </CardTitle>
                                <CardDescription>
                                    Upload, manage, and share your files with
                                    ease.
                                </CardDescription>
                            </div>
                            <Button
                                className="ml-auto flex items-center gap-1"
                                size="sm"
                            >
                                <Plus className="h-4 w-4" />
                                New Folder
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <FileUpload files={uploadedFiles} setFiles={setUploadedFiles}/>
                        </CardContent>
                    </Card>

                    <Card className="col-span-full">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Recent Files</CardTitle>
                                <Link href="/files" passHref>
                                    <Button variant="ghost" size="sm">
                                        View All
                                    </Button>
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="all">
                                <TabsList className="grid w-full max-w-[400px] grid-cols-4">
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="images">
                                        Images
                                    </TabsTrigger>
                                    <TabsTrigger value="docs">
                                        Documents
                                    </TabsTrigger>
                                    <TabsTrigger value="other">
                                        Other
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="all" className="mt-2">
                                    <div className={fileGridStyles}>
                                        <FileCard
                                            name="Project Proposal.pdf"
                                            size="2.4 MB"
                                            type="pdf"
                                            modified="Today at 2:34 PM"
                                        />
                                        <FileCard
                                            name="Profile Photo.jpg"
                                            size="4.2 MB"
                                            type="image"
                                            modified="Yesterday at 10:12 AM"
                                        />
                                        <FileCard
                                            name="Budget 2023.xlsx"
                                            size="1.8 MB"
                                            type="spreadsheet"
                                            modified="Jul 12, 2023"
                                        />
                                        <FileCard
                                            name="Meeting Notes.docx"
                                            size="842 KB"
                                            type="document"
                                            modified="Jul 10, 2023"
                                        />
                                        <FileCard
                                            name="Presentation.pptx"
                                            size="5.7 MB"
                                            type="presentation"
                                            modified="Jul 5, 2023"
                                        />
                                        <FileCard
                                            name="Logo Design.png"
                                            size="1.2 MB"
                                            type="image"
                                            modified="Jun 28, 2023"
                                        />
                                    </div>
                                </TabsContent>
                                <TabsContent value="images" className="mt-2">
                                    <div className={fileGridStyles}>
                                        <FileCard
                                            name="Profile Photo.jpg"
                                            size="4.2 MB"
                                            type="image"
                                            modified="Yesterday at 10:12 AM"
                                        />
                                        <FileCard
                                            name="Logo Design.png"
                                            size="1.2 MB"
                                            type="image"
                                            modified="Jun 28, 2023"
                                        />
                                    </div>
                                </TabsContent>
                                <TabsContent value="docs" className="mt-2">
                                    <div className={fileGridStyles}>
                                        <FileCard
                                            name="Project Proposal.pdf"
                                            size="2.4 MB"
                                            type="pdf"
                                            modified="Today at 2:34 PM"
                                        />
                                        <FileCard
                                            name="Meeting Notes.docx"
                                            size="842 KB"
                                            type="document"
                                            modified="Jul 10, 2023"
                                        />
                                    </div>
                                </TabsContent>
                                <TabsContent value="other" className="mt-2">
                                    <div className={fileGridStyles}>
                                        <FileCard
                                            name="Budget 2023.xlsx"
                                            size="1.8 MB"
                                            type="spreadsheet"
                                            modified="Jul 12, 2023"
                                        />
                                        <FileCard
                                            name="Presentation.pptx"
                                            size="5.7 MB"
                                            type="presentation"
                                            modified="Jul 5, 2023"
                                        />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    <StorageStats />

                    <Card>
                        <CardHeader>
                            <CardTitle>Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-primary/10 p-2">
                                        <Upload className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            You uploaded 6 files
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Today at 2:34 PM
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-primary/10 p-2">
                                        <Star className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            You starred "Project Proposal.pdf"
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Yesterday at 10:12 AM
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-primary/10 p-2">
                                        <Clock className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">
                                            Your storage was upgraded to 100GB
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Jul 12, 2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Access</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-2">
                                <Button
                                    variant="outline"
                                    className="h-20 flex-col gap-1 justify-center"
                                >
                                    <Star className="h-5 w-5" />
                                    <span>Starred</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-20 flex-col gap-1 justify-center"
                                >
                                    <Clock className="h-5 w-5" />
                                    <span>Recent</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-20 flex-col gap-1 justify-center"
                                >
                                    <ImageIcon className="h-5 w-5" />
                                    <span>Images</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-20 flex-col gap-1 justify-center"
                                >
                                    <FileText className="h-5 w-5" />
                                    <span>Documents</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
