"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

import NavBar from "@/components/blocks/NavBar";
import AboutInfoCard from "@/components/blocks/AboutInfoCard";
import SelfEvalCard from "@/components/blocks/SelfEvalCard";
import NotesStatsCard from "@/components/blocks/NotesStatsCard";
import PredictionCard from "@/components/blocks/PredictionCard";
import { DataFormValues, dataFormSchema, dataDefaultValues, PredictionProps, DataSendValues } from "@/components/dataFormConfig";
import { dataFormStyles } from "@/components/styles";

export default function Predict() {
    const [predictionData, setPredictionData] = useState<PredictionProps | null>(null);


    const form = useForm<DataFormValues>({
        resolver: zodResolver(dataFormSchema),
        defaultValues: dataDefaultValues,
    });

    async function onSubmit(values: z.infer<typeof dataFormSchema>) {
        try {
            const request: DataSendValues = {
                age: values.age,
                gender: values.gender,
                country: values.country,
                field_of_study: values.field_of_study,
                internships: values.interships,
                projects: values.projects,
                certifications: values.certifications,
                soft_skills_score: values.soft_skills_score,
                networking_score: values.networking_score,
                job_offers: values.job_offers,
                current_job_level: values.current_job_level,
                high_school_gpa: values.high_school_gpa / values.high_school_gpa_max,
                university_gpa: values.university_gpa / values.university_gpa_max,
                sat_score: values.sat_score / values.sat_score_max,
                university_ranking: values.university_ranking / values.university_ranking_max,
            };

            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(request),
            });

            if (!response.ok) {
                throw new Error("API error: no response");
            }

            const data: PredictionProps = await response.json();
            console.log("Prediction result:", data);

            setPredictionData(data);

            toast("Success", { description: "Prediction received" });
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to get prediction. Please try again.");
        }
    }
    
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
