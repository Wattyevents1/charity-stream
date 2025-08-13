import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Organization</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Name</label>
            <Input placeholder="HopeAid" className="mt-1" />
          </div>
          <div>
            <label className="text-sm">Support Email</label>
            <Input placeholder="support@hopeaid.org" className="mt-1" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Address</label>
            <Input placeholder="123 Charity St, City, Country" className="mt-1" />
          </div>
          <div className="md:col-span-2">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payments</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">PayPal Client ID</label>
            <Input placeholder="pp-..." className="mt-1" />
          </div>
          <div>
            <label className="text-sm">PayPal Secret</label>
            <Input placeholder="secret" type="password" className="mt-1" />
          </div>
          <div>
            <label className="text-sm">Pesapal Consumer Key</label>
            <Input placeholder="ps-..." className="mt-1" />
          </div>
          <div>
            <label className="text-sm">Pesapal Consumer Secret</label>
            <Input placeholder="secret" type="password" className="mt-1" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between rounded-md border p-3">
            <div>
              <div className="font-medium">Enable Recurring Donations</div>
              <div className="text-sm text-muted-foreground">Allow donors to set monthly/annual plans.</div>
            </div>
            <Switch />
          </div>
          <div className="md:col-span-2">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm">Site Title</label>
            <Input placeholder="HopeAid Charity" className="mt-1" />
          </div>
          <div>
            <label className="text-sm">Default Description</label>
            <Input placeholder="Empowering communities..." className="mt-1" />
          </div>
          <div className="md:col-span-2">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}