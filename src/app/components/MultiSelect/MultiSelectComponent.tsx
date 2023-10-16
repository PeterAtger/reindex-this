type MutliSelectComponentProps = {
  options: string[]
};

export default function MultiSelectComponent({ options }: MutliSelectComponentProps) {
  return (
    <select defaultValue="choose" id="countries" className="block w-full p-4 bg-opacity-70 resize-none bg-white rounded-md text-gray-600 placeholder-gray-400 focus:ring border-r-8 border-transparent">
      <option value="choose">Choose a Project</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}
