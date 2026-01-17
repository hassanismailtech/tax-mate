import { BriefcaseBusiness, Store, Laptop, GraduationCap } from "lucide-react";
import { useState } from "react";

const employmentTypeArr = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    employmentType: "Salaried Employee",
    details: "I work for a company and get a monthly salary.",
  },
  {
    id: 2,
    icon: Store,
    employmentType: "Business Owner",
    details: "I run a registered business or company.",
  },
  {
    id: 3,
    icon: Laptop,
    employmentType: "Freelancer",
    details: "I work for myself or get multiple clients.",
  },
  {
    id: 4,
    icon: GraduationCap,
    employmentType: "First-Time Taxpayer",
    details: " I am new to the workforce or tax system.",
  },
];

export default function EmploymentTypeSelector() {
  const [userType, setUserType] = useState(null);

  const handleSelectType = (index) => {
    setUserType(employmentTypeArr[index]);
  };

  return (
    <ul className="flex flex-col gap-4">
      {employmentTypeArr.map((value, index) => {
        return (
          <li
            key={value.id}
            onClick={() => handleSelectType(index)}
            className={`flex items-center gap-4 bg-[hsl(var(--color-primary))] p-2 rounded-xl ring-2 hover:ring-[hsl(var(--color-accent))] cursor-pointer ${userType?.id === value.id ? "ring-[hsl(var(--color-accent))]" : "ring-[hsl(var(--color-secondary))]"}`}
          >
            <div className="bg-[hsl(var(--color-accent))] py-3 px-4 rounded-full">
              <value.icon />
            </div>
            <div>
              <h2>{value.employmentType}</h2>
              <p className="text-sm text-[hsl(var(--text-secondary))]">
                {value.details}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
