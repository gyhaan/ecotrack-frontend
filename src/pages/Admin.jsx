import AdminUserSearch from "../UI/Admin/AdminUserSearch";

function Admin() {
  return (
   
    <div className="flex flex-col items-center gap-4 w-fit font-body">
      <h3 className="font-bold text-xl">Welcome to EcoTrack, Admin</h3>
      <AdminUserSearch/>
    </div>
  
  );
}

export default Admin;
