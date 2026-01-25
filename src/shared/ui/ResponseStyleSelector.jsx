const responseStyleArr = [
  {
    id: 1,
    key: "standard",
    responseStyle: "Standard English",
  },
  {
    id: 2,
    key: "eli5",
    responseStyle: "Explain Like I am 5 (ELI5)",
  },
  {
    id: 3,
    key: "pidgin",
    responseStyle: "Pidgin",
  },
  {
    id: 4,
    key: "hybrid",
    responseStyle: "Hybrid",
  },
];

export default function ResponseStyleSelector({ response, setResponse }) {
  const handleClick = (index) => {
    setResponse(responseStyleArr[index]);
  };

  return (
    <ul className="flex flex-col gap-4">
      {responseStyleArr.map((value, index) => {
        return (
          <li
            key={value.id}
            onClick={() => handleClick(index)}
            className={`flex items-center justify-between bg-[hsl(var(--color-primary))] py-2 px-4 md:py-4 rounded-xl ring-2 hover:ring-[hsl(var(--color-accent))] ${response?.id === value.id ? "ring-[hsl(var(--color-accent))]" : "ring-[hsl(var(--color-secondary))]"} cursor-pointer`}
          >
            {value.responseStyle}

            <span
              className={`p-4 rounded-full ${response?.id === value.id ? "bg-[hsl(var(--color-accent))]" : ""}`}
            ></span>
          </li>
        );
      })}
    </ul>
  );
}
