import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row gap-4 text-center">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$10,000</p>
            <p className="text-muted-foreground">Based on 100 charges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row gap-4 text-center">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-muted-foreground">Total Sales</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row gap-4 text-center">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="h-5 w-5 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">48</p>
            <p className="text-muted-foreground">Total Products</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row gap-4 text-center">
            <CardTitle>Total Users</CardTitle>
            <User2 className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-muted-foreground">Total Users</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
