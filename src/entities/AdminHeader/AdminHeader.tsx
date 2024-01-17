import "./AdminHeader.scss";

interface IAdminHeader {
  header: string;
}

const AdminHeader: React.FC<IAdminHeader> = ({
  header,
}: IAdminHeader) => {
  return <h2 className="admin-header">{header}</h2>;
};

export default AdminHeader;
