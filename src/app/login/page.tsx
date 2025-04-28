import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


export default function Login() {
    return (
        <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-br from-slate-100 to-slate-300">
            <div>
                <Card className="flex flex-col justify-between w-100 h-120 bg-white">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-2xl mt-4">Welcome to LockBox</CardTitle>
                        <CardDescription className="text-center">Enter your account details to login to your LockBox account.</CardDescription>
                    </CardHeader>
                    <CardContent className="mb-4">
                        <form>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />

                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Password" />
                            </div>
                        </form>
                        <div className="flex mt-10 justify-center">
                            <Button className="mr-4">Login</Button>
                            <Button variant="secondary">Sign up</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
