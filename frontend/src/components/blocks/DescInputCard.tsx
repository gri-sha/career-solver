import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormItem, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { JobCardProps } from "@/components/jobFormConfig";
import { descInputCardStyles } from "@/components/styles";

export default function DescInputCard({ form }: JobCardProps) {
    return (
        <Card className={descInputCardStyles.card}>
            <CardHeader>
                <CardTitle>Job post description:</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <FormField
                        control={form.control}
                        name="user_input"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea className={descInputCardStyles.textarea} id="desc" placeholder="Type something..." {...field}/>
                                </FormControl>
                                <FormMessage className={descInputCardStyles.formMessage} />
                            </FormItem>
                        )}
                    />
                </Form>
            </CardContent>
        </Card>
    );
}
