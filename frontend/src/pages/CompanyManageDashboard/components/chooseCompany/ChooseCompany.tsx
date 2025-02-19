import Company from "../company/Company";
import CompanyTabs from "../companyTabs/CompanyTabs";

export default function ChooseCompany() {
  return (
    <div className="m-8 flex flex-col grow">
      <CompanyTabs />
      <div className="grow">
        <CompanyList />
      </div>
      <div className="flex justify-center">
        <Button title="Add Companies" />
        <Button title="Manage Companies" />
      </div>
    </div>
  );
}

function CompanyList() {
  return (
    <div className="my-4">
      <Company name="orangesoft" />
      <Company name="orangesoft2" />
      <Company name="orangesoft3" />
    </div>
  );
}

type Props = { title: string };
function Button({ title }: Props) {
  return (
    <button className="bg-transparent border-2 border-blue-500 mx-4 px-4 py-1 rounded-md">
      {title}
    </button>
  );
}
