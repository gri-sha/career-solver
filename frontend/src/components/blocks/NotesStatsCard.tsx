import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DataCardProps } from "@/components/dataFormConfig";
import { notesStatsCardStyles } from "@/components/styles";

export default function NotesStatsCard({ form }: DataCardProps) {
    return (
        <Card className={notesStatsCardStyles.card}>
            <CardHeader>
                <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <div className={notesStatsCardStyles.container}>
                        <FormField
                            control={form.control}
                            name="high_school_gpa"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>High school GPA:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input} type="number" placeholder="3.75" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="high_school_gpa_max"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>Out of:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input} type="number" placeholder="4" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sat_score"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>SAT (or eq.) score:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input} type="number" placeholder="1550" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sat_score_max"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>Out of:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input} type="number" placeholder="1600" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="university_gpa"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>University GPA:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input} type="number" placeholder="3.75" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="university_gpa_max"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>Out of:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input} type="number" placeholder="4" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="university_ranking"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>University ranking:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input} type="number" placeholder="20" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="university_ranking_max"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={notesStatsCardStyles.label}>Out of:</FormLabel>
                                    <FormControl>
                                        <Input className={notesStatsCardStyles.input}type="number" placeholder="200" {...field} />
                                    </FormControl>
                                    {/* <FormMessage className={notesStatsCardStyles.formMessage}/> */}
                                </FormItem>
                            )}
                        />
                    </div>
                </Form>
            </CardContent>
        </Card>
    );
}
