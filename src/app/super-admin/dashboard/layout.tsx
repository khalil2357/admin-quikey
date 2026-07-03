import AdminLayout from "@/components/dashboard/AdminLayout";

export default function SuperAdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout isSuperAdmin={true}>{children}</AdminLayout>;
}
