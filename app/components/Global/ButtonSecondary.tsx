interface Props {
  label?: string;
}

const ButtonSecondary = ({ label = "Click Me" }: Props) => {
  return (
    <button className="px-4 py-2 border border-sky-600 hover:border-sky-900 text-sm font-medium text-sky-600 hover:text-sky-900 whitespace-nowrap ">
      {label}
    </button>
  );
};

export default ButtonSecondary;
