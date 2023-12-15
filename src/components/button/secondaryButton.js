export default function SecondaryButton({loading, children, onClick, icon }) {
    return (
      <button disabled={loading} onClick={onClick} className="disabled:text-gray-600 disabled:cursor-not-allowed text-white hover:text-accent  px-10 py-4 rounded-lg text-sm duration-150">
        <span className="hover:text-accent">
          {icon}
        </span>
        {children}
      </button>
    );
  }