import FileGrid from "@/components/file-grid";
import {Separator} from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Vault } from "lucide-react";


export default function FilesPage() {
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
                    <Input id="upload" type="file" />
                </div>
            </div>

            <FileGrid/> {/*All directories/vaults*/}
        </div>
    );
}
