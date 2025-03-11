import { ActionFunction, Form, redirect } from "react-router-dom"
import { login } from "../utils/authFetch"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Input } from "./ui/input"
import { userCredentials } from "../utils/types"
import { Dialog, DialogContent } from "./ui/dialog"

export const action: ActionFunction = async ({ request }) => {
    console.log('itt'); // Check if this prints
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
        const response = await login(data as userCredentials);
        console.log(response);
        return redirect("/");
    } catch (error) {
        console.log(error);
        return null;
    }
};

function Login({ isOpen, handleModal }: { isOpen: boolean, handleModal: () => void }) {
    const onLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = await login({ username: "emilys", password: "emilyspass" })
        if (data.accessToken) handleModal()
    }
    return (
        <Dialog open={isOpen} onOpenChange={handleModal}>
            <DialogContent>
                <Card className="pt-8 border-none shadow-none">
                    <CardHeader className="text-4xl pb-12">Login</CardHeader>
                    <CardContent>
                        <Form className="flex flex-col gap-5 mb-6 justify-center" method="post">
                            <Input type="text" placeholder="Username" name="username" required />
                            <Input type="password" placeholder="Password" name="password" required />
                            <Button variant={"destructive"} type="submit">Go</Button>
                            <Button onClick={onLogin}>Im a guest</Button>
                        </Form>
                        <div className="flex flex-col text-gray-400 gap-24 items-center [&>*]:cursor-pointer">
                            <a>Forgot password?</a>
                            <a>Sign up!</a>
                        </div>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}
export default Login