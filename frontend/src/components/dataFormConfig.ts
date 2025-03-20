// form to send student data to our model (/predict)

import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

export interface DataFormValues {
    age: number;
    gender: string;
    country: string;
    study_field: string;
    interships: number;
    projects: number;
    certifications: number;
    soft_skills_score: number;
    networking_score: number;
    job_offers: number;
    high_school_gpa: number;
    high_school_gpa_max: number;
    university_gpa: number;
    university_gpa_max: number;
    sat_score: number;
    sat_score_max: number;
    university_ranking: number;
    university_ranking_max: number;
}

const dataErrorMessage = {
    age: "Age must be valid.",
    gpa: "Enter a valid number (with precision up to 0.01).",
    gpa_max: "Enter a valid number.",
    rank: "Enter a valid number.",
    high_school_gpa: "High school GPA cannot exceed its max value.",
    university_gpa: "University GPA cannot exceed its max value.",
    sat_score: "SAT score cannot exceed its max value.",
    university_ranking: "University ranking cannot exceed its max value."
};

export interface DataCardProps {
    form: UseFormReturn<DataFormValues>;
}

export const dataFormSchema = z
    .object({
        age: z.coerce.number().min(1, { message: dataErrorMessage.age }).max(100, { message: dataErrorMessage.age }),
        gender: z.string().min(1),
        country: z.string().min(1),
        study_field: z.string().min(1),
        interships: z.coerce.number().min(0),
        projects: z.coerce.number().min(0),
        certifications: z.coerce.number().min(0),
        soft_skills_score: z.coerce.number().min(0).max(10),
        networking_score: z.coerce.number().min(0).max(10),
        job_offers: z.coerce.number().min(0),
        high_school_gpa: z.coerce.number().min(0).multipleOf(0.01, { message: dataErrorMessage.gpa }),
        high_school_gpa_max: z.coerce.number().min(1, { message: dataErrorMessage.gpa_max }),
        university_gpa: z.coerce.number().min(0).multipleOf(0.01, { message: dataErrorMessage.gpa }),
        university_gpa_max: z.coerce.number().min(1, { message: dataErrorMessage.gpa_max }),
        sat_score: z.coerce.number().min(0).int({ message: dataErrorMessage.sat_score }),
        sat_score_max: z.coerce.number().min(1).int({ message: dataErrorMessage.sat_score }),
        university_ranking: z.coerce.number().min(1).int({ message: dataErrorMessage.university_ranking }),
        university_ranking_max: z.coerce.number().min(1).int({ message: dataErrorMessage.university_ranking }),
    })
    .superRefine((data, ctx) => {
        if (data.high_school_gpa > data.high_school_gpa_max) {
            ctx.addIssue({
                path: ["high_school_gpa"],
                message: dataErrorMessage.high_school_gpa,
                code: z.ZodIssueCode.custom,
            });
        }
        if (data.university_gpa > data.university_gpa_max) {
            ctx.addIssue({
                path: ["university_gpa"],
                message: dataErrorMessage.university_gpa,
                code: z.ZodIssueCode.custom,
            });
        }
        if (data.sat_score > data.sat_score_max) {
            ctx.addIssue({
                path: ["sat_score"],
                message: dataErrorMessage.sat_score,
                code: z.ZodIssueCode.custom,
            });
        }
        if (data.university_ranking > data.university_ranking_max) {
            ctx.addIssue({
                path: ["university_ranking"],
                message: dataErrorMessage.university_ranking,
                code: z.ZodIssueCode.custom,
            });
        }
    });

export const dataDefaultValues: DataFormValues = {
    age: 0,
    gender: "",
    country: "",
    study_field: "",
    interships: 0,
    projects: 0,
    certifications: 0,
    soft_skills_score: 0,
    networking_score: 0,
    job_offers: 0,
    high_school_gpa: 0,
    high_school_gpa_max: 0,
    university_gpa: 0,
    university_gpa_max: 0,
    sat_score: 0,
    sat_score_max: 0,
    university_ranking: 1,
    university_ranking_max: 1,
};

export interface PredictionProps {
    starting_salary: number,
    career_satisfaction: number,
    years_to_promotion: number;
    work_life_balance: number;
    enterp_rec: number;
};
