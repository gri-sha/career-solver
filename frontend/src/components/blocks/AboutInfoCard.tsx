import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { DataCardProps } from "@/components/dataFormConfig";
import { aboutInfoCardStyles } from "@/components/styles";

import genders from "@/data/genders.json";
import countries from "@/data/countries.json";
import studyFields from "@/data/studyFields.json";

export default function AboutInfoCard({ form }: DataCardProps) {
    return (
        <Card className={aboutInfoCardStyles.card}>
            <CardHeader>
                <CardTitle>Student Info</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <div className={aboutInfoCardStyles.container}>
                        <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={aboutInfoCardStyles.label}>Age</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="25" className={aboutInfoCardStyles.input} {...field} />
                                    </FormControl>
                                    <FormMessage className={aboutInfoCardStyles.formMessage} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={aboutInfoCardStyles.label}>Gender</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className={aboutInfoCardStyles.selectTrigger}>
                                                <SelectValue placeholder="Select gender" className={aboutInfoCardStyles.placeholder} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {genders.map((option) => (
                                                        <SelectItem key={option} value={option}>
                                                            {option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className={aboutInfoCardStyles.formMessage} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={aboutInfoCardStyles.label}>Country</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className={aboutInfoCardStyles.selectTrigger}>
                                                <SelectValue placeholder="Select country" className={aboutInfoCardStyles.placeholder} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {countries.map((option) => (
                                                        <SelectItem key={option} value={option}>
                                                            {option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className={aboutInfoCardStyles.formMessage} />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="study_field"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={aboutInfoCardStyles.label}>Field of Study</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className={aboutInfoCardStyles.selectTrigger}>
                                                <SelectValue placeholder="Select field of study" className={aboutInfoCardStyles.placeholder} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {studyFields.map((option) => (
                                                        <SelectItem key={option} value={option}>
                                                            {option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage className={aboutInfoCardStyles.formMessage} />
                                </FormItem>
                            )}
                        />
                    </div>
                </Form>
            </CardContent>
        </Card>
    );
}
