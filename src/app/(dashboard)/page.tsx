import IndicatorCard from '@/components/commons/indicator-card';
import { PageBreadcrumb } from '@/components/commons/page-breadcrumb';
import PageHeader from '@/components/commons/page-header';
import { Overview } from '@/components/demo/overview';
import { RecentSales } from '@/components/demo/recent-sales';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DatePickerRange } from '@/components/ui/date-picker-range';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';

export default function Page() {
  return (
    <>
      <PageBreadcrumb
        items={[{ title: 'Dashboard', link: '/' }, { title: 'Overview' }]}
      />

      <PageHeader title="Dashboard">
        <DatePickerRange />
        <Button>Download</Button>
      </PageHeader>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <IndicatorCard
              title="Total Revenue"
              value="$45,231.89"
              label="+20.1% from last month"
              icon={<DollarSign />}
            />

            <IndicatorCard
              title="Subscriptions"
              value="+2350"
              label="+180.1% from last month"
              icon={<Users />}
            />

            <IndicatorCard
              title="Sales"
              value="+12,234"
              label="+19% from last month"
              icon={<CreditCard />}
            />

            <IndicatorCard
              title="Active Now"
              value="+573"
              label="+201 since last hour"
              icon={<Activity />}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>

              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>

              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
