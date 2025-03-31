"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

import NavBar from "@/components/blocks/NavBar";
import AboutInfoCard from "@/components/blocks/AboutInfoCard";
import SelfEvalCard from "@/components/blocks/SelfEvalCard";
import NotesStatsCard from "@/components/blocks/NotesStatsCard";
import PredictionCard from "@/components/blocks/PredictionCard";
import { DataFormValues, dataFormSchema, dataDefaultValues, PredictionProps } from "@/components/dataFormConfig";
import { dataFormStyles } from "@/components/styles";

export default function Predict() {
    const form = useForm<DataFormValues>({
        resolver: zodResolver(dataFormSchema),
        defaultValues: dataDefaultValues,
    });

    function onSubmit(values: z.infer<typeof dataFormSchema>) {
        try {
            console.log(values);
            toast("Success", { description: "Form has been submitted" });
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    const predictionData: PredictionProps = {
        starting_salary: 60000,
        career_satisfaction: 8,
        years_to_promotion: 3,
        work_life_balance: 7,
        enterp_rec: true,
    };
    return (
        <>
            <NavBar />
            <div className={dataFormStyles.container}>
                <Card className={dataFormStyles.card}>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className={dataFormStyles.form}>
                            <div className={dataFormStyles.innerContainer}>
                                <AboutInfoCard form={form} />
                                <NotesStatsCard form={form} />
                                <SelfEvalCard form={form} />
                            </div>
                            <Button type="submit" className={dataFormStyles.button}>
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                {predictionData && <PredictionCard {...predictionData} />}
            </div>
        </>
    );
}
