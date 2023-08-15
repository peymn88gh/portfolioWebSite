import React from "react";
import PropTypes from "prop-types";

function Input({type, label, name, value, onChange, placeholder, error, icon, customClass, ref, options}) {
    let inputClass =
            "text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400  mt-1" +
            (error ? " border-red-500" : " border-gray-400") + (icon ? " pl-10" : " ");
    if (customClass) inputClass=customClass;

    const getInput = () => {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={inputClass}
          />
        );
        case "password":
        return (
          <input
            type="password"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={inputClass}
          />
        );
      case "toggle":
        return (
          <label htmlFor={name} className="toggle-container">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={value}
              onChange={onChange}
              className="toggle-checkbox"
            />
            <span className="toggle-slider"></span>
          </label>
        );
      case "file":
        return (
          <input
              ref = {ref}
            type="file"
            id={name}
            name={name}
            onChange={onChange}
            className="input-file bg-emerald-600 border-emerald-600 text-gray-100 px-3.5 py-2.5 rounded-lg shadow-lg text-sm text-center gap-2 items-center hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          />
        );
      case "select":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={'text-sm placeholder-gray-500 rounded-lg border border-gray-400  focus:outline-none focus:border-emerald-400'}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

    return (
        <div className="flex flex-col">
            {label && <label htmlFor={name} className="text-sm text-gray-600">{label}</label>}
            <div className="relative">
                {icon && <div
                    className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    {icon}
                </div>}
                {getInput()}
            </div>
            {error && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{error}</div>}
        </div>
    );
}


Input.propTypes = {
  type: PropTypes.oneOf(["text", "toggle", "file", "select"]).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default Input;
