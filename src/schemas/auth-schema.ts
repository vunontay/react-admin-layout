import { z } from "zod";

const loginSchema = z.object({
    emailOrPhone: z.string().min(1, {
        message: "Trường này bắt là bắt buộc.",
    }),
    password: z.string().min(6, { message: "Tối thiểu 6 ký tự." }),
});

export { loginSchema };
