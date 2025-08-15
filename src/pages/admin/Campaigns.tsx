import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const rows = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: ["Orphan Sponsorship", "Water Wells", "Masjid Construction", "Food Packs"][i % 4] + " #" + (100 + i),
  goal: 50000 + i * 1000,
  raised: 25000 + i * 1500,
  status: ["Active", "Paused", "Draft"][i % 3],
}));

export default function CampaignsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Campaigns</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search campaigns…" className="h-9 w-48" />
          <Button size="sm"><Plus className="mr-2 h-4 w-4" />New</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Goal</TableHead>
                <TableHead>Raised</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>$ {r.goal.toLocaleString()}</TableCell>
                  <TableCell>$ {r.raised.toLocaleString()}</TableCell>
                  <TableCell>{r.status}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="mr-2">Edit</Button>
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