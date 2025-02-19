import logoutIcon from "../../../../assets/logoutIcon.svg";

export default function LogoutBtn() {
  return (
    <div className="flex cursor-pointer">
      <img src={logoutIcon} className="mx-4" alt="logout" />
      Logout
    </div>
  );
}
