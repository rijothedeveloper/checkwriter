import companyIcon from "../../../../assets/company.svg";
import rightArrow from "../../../../assets/rightArrow.svg";

type Props = { name: string };
export default function Company({ name }: Props) {
  return (
    <div className="flex cursor-pointer p-4 border-b-1 border-gray-300">
      <img src={companyIcon} className="mx-4" alt="companyIcon" />
      <span className="flex-grow">{name}</span>
      <img src={rightArrow} className="" alt="right arrow" />
    </div>
  );
}
