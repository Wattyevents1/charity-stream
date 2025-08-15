import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { HandCoins, Users, FolderKanban, Repeat } from "lucide-react";

const stats = [
  { label: "Total Raised", value: "$1,248,530", change: "+12.4%", icon: HandCoins },
  { label: "Donors", value: "18,742", change: "+3.1%", icon: Users },
  { label: "Active Campaigns", value: "26", change: "+1", icon: FolderKanban },
  { label: "Recurring", value: "3,580", change: "+2.8%", icon: Repeat },
];

const donationsData = Array.from({ length: 12 }).map((_, i) => ({
  month: new Date(2024, i).toLocaleString("en", { month: "short" }),
  amount: Math.round(30000 + Math.random() * 50000),
}));

const progressData = [
  { name: "Water Wells", progress: 78 },
  { name: "Orphan Care", progress: 64 },
  { name: "Masjid", progress: 52 },
  { name: "Food Packs", progress: 83 },
  { name: "Qurbani", progress: 45 },
];

export default function AdminDashboard() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{s.value}</div>
              <p className="text-xs text-muted-foreground">{s.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Donations (last 12 months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ amount: { label: "Amount", color: "hsl(var(--primary))" } }}
              className="h-80"
            >
              <LineChart data={donationsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="amount" stroke="var(--color-amount)" strokeWidth={2} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Campaign Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{ progress: { label: "Progress", color: "hsl(var(--chart-2))" } }}
              className="h-80"
            >
              <BarChart data={progressData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis type="category" dataKey="name" width={100} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="progress" fill="var(--color-progress)" radius={[4, 4, 4, 4]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="font-medium">Donor #{1200 + i}</div>
                <div className="text-muted-foreground">{new Date().toLocaleDateString()}</div>
                <div>$ {Math.round(50 + Math.random() * 400)}</div>
                <div>
                  <div className="w-full">
                    <Progress value={40 + Math.random() * 60} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}