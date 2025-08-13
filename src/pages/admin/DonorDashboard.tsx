import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DonorDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donor Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">This is a placeholder for donor self-service (history, receipts, recurring plans).</p>
      </CardContent>
    </Card>
  );
}