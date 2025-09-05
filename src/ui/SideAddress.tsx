const SideAddress = ({title,description}: {title: string, description: string}) => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-gray-800 ">{title}</h2>
      <div className="border-b border-purple-600 font-bold w-64 h-1"></div>
      <p className="text-gray-600 text-sm mt-2">
        {description}
      </p>
    </>
  );
};
export default SideAddress;
