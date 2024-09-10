import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { loginSchema } from "@/schemas/auth-schema";
import { FormInput } from "@/components/custom";

const LoginPage = () => {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            emailOrPhone: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        console.log(values);
        // Here you would typically handle the login process
        // For now, we'll just navigate to the home page
        navigate(ROUTES.HOME);
    };

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <div className="w-full m-auto sm:max-w-lg px-4">
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">
                            Đăng nhập
                        </CardTitle>
                        <CardDescription className="text-center">
                            Nhập thông tin để tiếp tục.
                        </CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardContent className="grid gap-6">
                                <FormInput
                                    form={form}
                                    label="Email hoặc số điện thoại"
                                    name="emailOrPhone"
                                    placeholder="Email"
                                />
                                <FormInput
                                    form={form}
                                    label="Mật khẩu"
                                    name="password"
                                    placeholder="Mật khẩu"
                                />
                            </CardContent>
                            <CardFooter className="flex flex-col">
                                <Button className="w-full" type="submit">
                                    Đăng nhập
                                </Button>
                                <p className="mt-2 text-xs text-center text-gray-700">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/register"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
