import AdminLayout from "../../../components/admin/layout/admin-layout";
import ManageOrderList from "../../../components/admin/order/manage-order-list";

const ManageOrderListPage = () => {
  return (
    <AdminLayout title="주문 관리">
      <ManageOrderList />
    </AdminLayout>
  );
};

export default ManageOrderListPage;
