import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { DataCardProps } from "@/components/dataFormConfig";
import { selfEvalCardStyles } from "@/components/styles";

export default function SelfEvalCard({ form }: DataCardProps) {
    return (
        <Card className={selfEvalCardStyles.card}>
            <CardHeader>
                <CardTitle>Self-evaluation</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="interships"
                        render={({ field }) => (
                            <FormItem className={selfEvalCardStyles.item}>
                                <FormLabel className={selfEvalCardStyles.label}>Internships completed:</FormLabel>
                                <FormControl>
                                    <Slider className={selfEvalCardStyles.slider} min={0} max={11} value={[field.value]} onValueChange={(value) => field.onChange(value[0])} step={1} />
                                </FormControl>
                                <Label className={selfEvalCardStyles.sliderLabel}>{field.value === 11 ? "10+" : field.value}</Label>
                                <FormMessage className={selfEvalCardStyles.formMessage}/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="projects"
                        render={({ field }) => (
                            <FormItem className={selfEvalCardStyles.item}>
                                <FormLabel className={selfEvalCardStyles.label}>Projects completed:</FormLabel>
                                <FormControl>
                                    <Slider className={selfEvalCardStyles.slider} min={0} max={11} value={[field.value]} onValueChange={(value) => field.onChange(value[0])} step={1} />
                                </FormControl>
                                <Label className={selfEvalCardStyles.sliderLabel}>{field.value === 11 ? "10+" : field.value}</Label>
                                <FormMessage className={selfEvalCardStyles.formMessage}/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="certifications"
                        render={({ field }) => (
                            <FormItem className={selfEvalCardStyles.item}>
                                <FormLabel className={selfEvalCardStyles.label}>Certifications obtained:</FormLabel>
                                <FormControl>
                                    <Slider className={selfEvalCardStyles.slider} min={0} max={11} value={[field.value]} onValueChange={(value) => field.onChange(value[0])} step={1} />
                                </FormControl>
                                <Label className={selfEvalCardStyles.sliderLabel}>{field.value === 11 ? "10+" : field.value}</Label>
                                <FormMessage className={selfEvalCardStyles.formMessage}/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="job_offers"
                        render={({ field }) => (
                            <FormItem className={selfEvalCardStyles.item}>
                                <FormLabel className={selfEvalCardStyles.label}>Job Offers:</FormLabel>
                                <FormControl>
                                    <Slider className={selfEvalCardStyles.slider} min={0} max={11} value={[field.value]} onValueChange={(value) => field.onChange(value[0])} step={1} />
                                </FormControl>
                                <Label className={selfEvalCardStyles.sliderLabel}>{field.value === 11 ? "10+" : field.value}</Label>
                                <FormMessage className={selfEvalCardStyles.formMessage}/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="soft_skills_score"
                        render={({ field }) => (
                            <FormItem className={selfEvalCardStyles.item}>
                                <FormLabel className={selfEvalCardStyles.label}>Soft Skills:</FormLabel>
                                <FormControl>
                                    <Slider className={selfEvalCardStyles.slider} min={0} max={10} value={[field.value]} onValueChange={(value) => field.onChange(value[0])} step={1} />
                                </FormControl>
                                <Label className={selfEvalCardStyles.sliderLabel}>{field.value}</Label>
                                <FormMessage className={selfEvalCardStyles.formMessage}/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="networking_score"
                        render={({ field }) => (
                            <FormItem className={selfEvalCardStyles.item}>
                                <FormLabel className={selfEvalCardStyles.label}>Networking Skills:</FormLabel>
                                <FormControl>
                                    <Slider className={selfEvalCardStyles.slider} min={0} max={10} value={[field.value]} onValueChange={(value) => field.onChange(value[0])} step={1} />
                                </FormControl>
                                <Label className={selfEvalCardStyles.sliderLabel}>{field.value}</Label>
                                <FormMessage className={selfEvalCardStyles.formMessage}/>
                            </FormItem>
                        )}
                    />
                </Form>
            </CardContent>
        </Card>
    );
}
