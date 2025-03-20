"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card} from "@/components/ui/card";

import NavBar from "@/components/blocks/NavBar";
import DescInputCard from "@/components/blocks/DescInputCard";
import CvInputCard from "@/components/blocks/CvInputCard";
import ReviewCard from "@/components/blocks/ReviewCard";
import { JobFormValues, jobFormSchema, jobDefaultValues, ReviewCardProps } from "@/components/jobFormConfig";
import { jobFormStyles } from "@/components/styles";

export default function Compare() {
    const form = useForm<JobFormValues>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: jobDefaultValues,
    });

    function onSubmit(values: z.infer<typeof jobFormSchema>) {
        try {
            console.log(values);
            toast("Success", { description: "Form has been submitted" });
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    const text: ReviewCardProps = {response: "Hello, World!"};

    return (
        <>
            <NavBar />
            <div className={jobFormStyles.container}>
                <Card className={jobFormStyles.card}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={jobFormStyles.form}>
                        <DescInputCard form={form} />
                        <CvInputCard />
                        <Button type="submit" className={jobFormStyles.button}>
                                Submit
                        </Button>
                    </form>
                </Card>
                {<ReviewCard {...text}/>}
            </div>
        </>
    );
}
