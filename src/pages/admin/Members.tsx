import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  plan: ["Supporter", "Partner", "Patron"][i % 3],
  renewal: new Date(2025, i, 1).toLocaleDateString(),
  status: ["Active", "Expired"][i % 2],
}));

export default function MembersPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Members</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search members…" className="h-9 w-48" />
          <Select>
            <SelectTrigger className="h-9 w-32">
              <SelectValue placeholder="Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="supporter">Supporter</SelectItem>
              <SelectItem value="partner">Partner</SelectItem>
              <SelectItem value="patron">Patron</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm">Add</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Renewal</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.plan}</TableCell>
                  <TableCell>{r.renewal}</TableCell>
                  <TableCell>{r.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}