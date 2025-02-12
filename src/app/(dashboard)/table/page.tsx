import { getPayments, Payment } from '@/actions/payments/get-payments';
import { DataTable } from '@/components/commons/data-table';
import { PageBreadcrumb } from '@/components/commons/page-breadcrumb';
import PageHeader from '@/components/commons/page-header';
import { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];

export default async function Page() {
  const data = await getPayments();

  return (
    <>
      <PageBreadcrumb items={[{ title: 'Table' }]} />
      <PageHeader title="Table"></PageHeader>
      <DataTable columns={columns} data={data} />
    </>
  );
}
