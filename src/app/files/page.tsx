"use client"

import FileGrid from "@/components/file-grid";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Vault, File } from "lucide-react";
import { FileSearch } from "@/components/file-search";
import { LoadingScreen } from "@/components/loading";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import UploadDialog from "@/components/upload-dialog";
import { FileService } from "@/services/file-service";


export default function FilesPage() {

    const [loading, setLoading] = useState(true);
    const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

    useEffect(() => {
        const getAllFiles = async () => {
            const service = new FileService();
            // TODO: The user id should be fetched from the logged-in user.
            const data = await service.getAllUserFiles("test-user");
            console.log("Retrieved files:", data);
            setLoading(false);
        }

        getAllFiles();
    }, []);
    
    const toggleUploadDialog = () => {
        setUploadDialogOpen(!uploadDialogOpen);
    }
    
    const onFileSearch = (query: string) => {
        console.log("file search query submitted: ", query);
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[75vh]">
                <LoadingScreen text="Getting files..."/>
            </div>
        );
    }
    
    return (
        <div className="flex w-screen h-screen flex-col py-10 px-20">
            <h1 className="text-4xl font-bold mb-6">My Files</h1>
            <Separator />

            <div className="flex justify-between items-center w-full mt-3">
                <Breadcrumb className="">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/files">
                                <div className="flex items-center">
                                    <Vault className="w-4 mr-1"/>
                                    <p>Root</p>
                                </div>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex mt-1">
                    <FileSearch onSearch={onFileSearch} />
                </div>
            </div>

            <FileGrid/> {/*All directories/vaults*/}
            
            <Button className="fixed bottom-6 right-6 w-28 h-12 p-0 shadow-lg" onClick={toggleUploadDialog}>
                <div className="flex text-l items-center">
                    <File className="mr-1"/>
                    Upload
                </div>
            </Button>
            
            <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
        </div>
    );
}
