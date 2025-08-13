import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarPlus } from "lucide-react";

const dates = ["02/10/2025", "03/10/2025", "04/10/2025", "05/10/2025", "06/10/2025", "07/10/2025"];
const registeredCounts = [120, 85, 240, 310, 98, 176];
const rows = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: `Fundraising Gala ${2025 + i}`,
  date: dates[i],
  location: ["Nairobi", "London", "New York", "Doha"][i % 4],
  registered: registeredCounts[i],
}));

export default function EventsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Events</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search events…" className="h-9 w-48" />
          <Button size="sm"><CalendarPlus className="mr-2 h-4 w-4" />Create</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Registered</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.date}</TableCell>
                  <TableCell>{r.location}</TableCell>
                  <TableCell>{r.registered}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}