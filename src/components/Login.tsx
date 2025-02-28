import { ActionFunction, Form, redirect } from "react-router-dom"
import { authFetch, login } from "../utils/authFetch"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Input } from "./ui/input"
import { userCredentials } from "../utils/types"

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

function Login() {
    // const onLogin = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     const data = await login({ username: "emilys", password: "emilyspass" })
    //     console.log(data)
    // }
    return (
        <Card className="bg-muted w-80 h-3/6 pt-8">
            <CardHeader className="text-4xl pb-12">Login</CardHeader>
            <CardContent>
                <Form className="flex flex-col gap-5 mb-6 justify-center" method="post">
                    <Input type="text" placeholder="Username" name="username" />
                    <Input type="password" placeholder="Password" name="password" />
                    <Button type="submit">Go</Button>
                    {/* <Button onClick={onLogin}>Im a guest</Button> */}
                </Form>
                <div className="flex flex-col text-gray-400 gap-24 items-center [&>*]:cursor-pointer">
                    <a>Forgot password?</a>
                    <a>Sign up!</a>
                </div>
            </CardContent>
        </Card>
    )
}
export default Login