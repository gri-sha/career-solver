// form to send job description and parsed text from cv in pdf to open ai api (/compare)

import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

export interface JobFormValues {
    user_input: string;
    cv_text: string;
}

const jobErrorMessage = {
    user_input: "Please enter a valid description.",
    cv_text: "PDF was not parsed properly.",
};

export const jobFormSchema = z.object({
    user_input: z.string().min(1, { message: jobErrorMessage.user_input }),
    cv_text: z.string().min(1, { message: jobErrorMessage.cv_text }),
});

export const jobDefaultValues: JobFormValues = {
    user_input: "",
    cv_text: "",
};

export interface JobCardProps {
    form: UseFormReturn<JobFormValues>;
}

export interface ReviewCardProps {
    response: string;
}
