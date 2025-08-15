import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus } from "lucide-react";

const rows = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Update from field #${i + 1}`,
  author: ["Aisha", "Omar", "Zainab", "Khalid"][i % 4],
  status: ["Draft", "Published"][i % 2],
  date: new Date().toLocaleDateString(),
}));

export default function BlogPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Blog & News</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search posts…" className="h-9 w-48" />
          <Button size="sm"><Plus className="mr-2 h-4 w-4" />New Post</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.title}</TableCell>
                  <TableCell>{r.author}</TableCell>
                  <TableCell>{r.status}</TableCell>
                  <TableCell>{r.date}</TableCell>
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