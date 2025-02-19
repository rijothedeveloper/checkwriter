export default function CompanyTabs() {
  return (
    <div className="flex">
      <Tab title="All" />
      <Tab title="My Companies" />
      <Tab title="Invited Companies" />
    </div>
  );
}

type Props = { title: string };

function Tab({ title }: Props) {
  return (
    <div className="min-w-20 px-8 flex justify-center items-center border-b-2 border-blue-500 mx-2 pb-2">
      {title}
    </div>
  );
}
