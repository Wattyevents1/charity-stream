import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  donor: `Donor ${i + 1}`,
  amount: Math.round(20 + Math.random() * 500),
  currency: ["USD", "KES", "GBP", "EUR"][i % 4],
  campaign: ["General Fund", "Water Wells", "Orphans"][i % 3],
  type: ["One-time", "Monthly"][i % 2],
  date: new Date().toLocaleDateString(),
}));

export default function DonationsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Donations</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search donors…" className="h-9 w-48" />
          <Select>
            <SelectTrigger className="h-9 w-32">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="kes">KES</SelectItem>
              <SelectItem value="gbp">GBP</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">Export</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Donor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Currency</TableHead>
                <TableHead>Campaign</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.donor}</TableCell>
                  <TableCell>$ {r.amount}</TableCell>
                  <TableCell>{r.currency}</TableCell>
                  <TableCell>{r.campaign}</TableCell>
                  <TableCell>{r.type}</TableCell>
                  <TableCell>{r.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}