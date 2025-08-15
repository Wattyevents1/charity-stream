import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  src: `/placeholder.svg#${i}`,
  name: `image_${i + 1}.jpg`,
  size: `${Math.round(50 + Math.random() * 900)} KB`,
}));

export default function MediaPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Media Library</CardTitle>
        <Button size="sm">Upload</Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {images.map((img) => (
            <div key={img.id} className="group rounded-md border p-2">
              <img src={img.src} alt={img.name} className="h-28 w-full rounded object-cover" />
              <div className="mt-2 truncate text-xs">{img.name}</div>
              <div className="text-[10px] text-muted-foreground">{img.size}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}