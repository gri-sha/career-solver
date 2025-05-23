import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { reviewCardStyles } from "@/components/styles";
import { ReviewCardProps } from "@/components/jobFormConfig";


export default function ReviewCard({ response }: ReviewCardProps) {
    return (
        <Card className={reviewCardStyles.card}>
            <CardHeader className={reviewCardStyles.header}>
                <CardTitle>Review</CardTitle>
            </CardHeader>
            <CardContent className={reviewCardStyles.content}>{response}</CardContent>
        </Card>
    );
} 