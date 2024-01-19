const SmallBtn = ({ children }) => {
  return (
    <div>
      <button className="px-3 py-1 bg-gray-800 rounded-full text-white text-sm">
        {children}
      </button>
    </div>
  );
};

export default SmallBtn;
