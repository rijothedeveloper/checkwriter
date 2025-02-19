import ChooseCompany from "./components/chooseCompany/ChooseCompany";
import LogoutBtn from "./components/logoutBtn/LogoutBtn";

export default function CompanyManageDashboard() {
  return (
    <div className="flex h-screen m-2 px-5 py-20 border-2">
      <div className="border-2">
        <LogoutBtn />
      </div>
      <div className="flex flex-col grow items-center border-2">
        <h1>PLEASE SELECT A COMPANY YOU WOULD LIKE TO WORK NOW</h1>
        <ChooseCompany />
      </div>
    </div>
  );
}
