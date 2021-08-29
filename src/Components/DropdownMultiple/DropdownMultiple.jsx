import "./DropdownMultiple.sass";

export const DropdownMultiple = (props) => {
  const { title, options } = props;
  const id = (Math.random() * 10).toString();
  console.log(id);
  const handleChange = () => {
    const list = document.getElementById(id);
    const arrayOptions = [...list.children];
    const arrayOptionsEnabled = arrayOptions.filter(
      (option) => option.children[0].children[0].checked
    );
    const enabledFilters = arrayOptionsEnabled.map(
      (filter) => filter.children[0].textContent
    );
    props.getActiveOptions(enabledFilters);
  };
  return (
    <div
      className="container"
      onMouseLeave={() =>
        document.getElementById(id).classList.remove("dropdownShow")
      }
    >
      <h2
        onMouseOver={() =>
          document.getElementById(id).classList.add("dropdownShow")
        }
        className="title"
      >
        {title}
      </h2>
      <ul className="dropdown" id={id} onChange={handleChange} multiple>
        {options.map((option, index) => (
          <li key={index}>
            <label className="option" htmlFor={option}>
              <input className="checkbox" id={option} type="checkbox" />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
