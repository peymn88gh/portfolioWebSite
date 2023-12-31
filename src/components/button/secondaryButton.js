export default function SecondaryButton({loading, children, onClick, icon }) {
    return (
      <button disabled={loading} onClick={onClick} className="disabled:text-gray-600 disabled:cursor-not-allowed text-white hover:text-accent px-4 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-lg text-sm duration-150">
        <span className="hover:text-accent">
          {icon}
        </span>
        {children}
      </button>
    );
  }