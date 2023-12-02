import styles from "../styles/SearchForm.module.css";
import { IconArrow } from "./";

const SearchForm = ({ submitHandler }: SearchFormProps) => {
  return (
    <form action="" className={styles.mainForm} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        name="ipInput"
        id="ipInput"
      />
      <button>
        <IconArrow />
      </button>
    </form>
  );
};

export default SearchForm;
