import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { PredictionProps } from "@/components/dataFormConfig";
import { predictionCardStyles } from "@/components/styles";

export default function PredictionCard(prediction: PredictionProps) {
    return (
        <Card className={predictionCardStyles.card}>
            <CardHeader>
                <CardTitle>Career Prediction</CardTitle>
            </CardHeader>
            <CardContent>
                <Table className={predictionCardStyles.table}>
                    <TableBody>
                        {[
                            { label: "Starting Salary", value: `$${prediction.starting_salary.toLocaleString()}` },
                            { label: "Career Satisfaction", value: `${prediction.career_satisfaction}/10` },
                            { label: "Years to Promotion", value: `${prediction.years_to_promotion} years` },
                            { label: "Work-Life Balance", value: `${prediction.work_life_balance}/10` },
                            { label: "Entrepreneurship Rec.", value: `${prediction.enterp_rec}/10` }
                        ].map((item, index) => (
                            <TableRow key={index} className={predictionCardStyles.row}>
                                <TableCell className={predictionCardStyles.label}>{item.label}</TableCell>
                                <TableCell className={predictionCardStyles.value}>{item.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}