import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cvInputCardStyles } from "@/components/styles";

export default function CvInputCard() {
    return (
        <Card className={cvInputCardStyles.card}>
            <CardHeader>
                <CardTitle>Your CV:</CardTitle>
            </CardHeader>
            <CardContent>
                <Input className={cvInputCardStyles.input} id="cv" type="file" placeholder="Type something..." />
            </CardContent>
        </Card>
    );
}