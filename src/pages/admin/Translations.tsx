import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = [
  { key: "nav.home", en: "Home", ar: "الرئيسية" },
  { key: "nav.donate", en: "Donate", ar: "تبرع" },
  { key: "footer.contact", en: "Contact", ar: "اتصل" },
];

export default function TranslationsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Translations</CardTitle>
        <div className="flex items-center gap-2">
          <Input placeholder="Search keys…" className="h-9 w-48" />
          <Button size="sm">Import/Export</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead>English</TableHead>
                <TableHead>Arabic</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.key}>
                  <TableCell className="font-mono text-xs">{r.key}</TableCell>
                  <TableCell>{r.en}</TableCell>
                  <TableCell>{r.ar}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}