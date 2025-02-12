import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  title: string;
  icon?: React.ReactNode;
  value: string;
  label?: string;
};

export default function IndicatorCard({ title, icon, value, label }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon || null}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {label ? <p className="text-xs text-muted-foreground">{label}</p> : null}
      </CardContent>
    </Card>
  );
}
