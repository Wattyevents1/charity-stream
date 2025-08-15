import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Donor ${i + 1}`,
  email: `donor${i + 1}@mail.com`,
  total: Math.round(100 + Math.random() * 2000),
  last: new Date().toLocaleDateString(),
}));

export default function DonorsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Donors</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search donors…" className="h-9 w-48" />
          <Button variant="outline" size="sm">Export</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Total Given</TableHead>
                <TableHead>Last Donation</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.email}</TableCell>
                  <TableCell>$ {r.total}</TableCell>
                  <TableCell>{r.last}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">Message</Button>
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}