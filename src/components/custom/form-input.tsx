import React from "react";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn, FieldValues, FieldPath } from "react-hook-form";

interface IFormInput<TFieldValues extends FieldValues> {
    form: UseFormReturn<TFieldValues>;
    name: FieldPath<TFieldValues>;
    label: string;
    placeholder?: string;
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
    disabled?: boolean;
    className?: string;
    required?: boolean;
}

export const FormInput = <TFieldValues extends FieldValues>({
    form,
    name,
    label,
    placeholder,
    type = "text",
    disabled = false,
    className = "",
    required = false,
}: IFormInput<TFieldValues>) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={className}>
                    <FormLabel>
                        {label}
                        {required && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            disabled={disabled}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                </FormItem>
            )}
        />
    );
};
