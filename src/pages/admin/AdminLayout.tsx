import "./AdminLayout.scss";
import Dashboard from "@/widgets/admin/Dashboard/Dashboard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <Dashboard />
      <div className="admin-layout__container">{children}</div>
    </div>
  );
}
