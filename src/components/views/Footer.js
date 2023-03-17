import styles from "../../styles/App.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer1}>
      <hr />
      <p className="text-center text-muted mt-2 mb-2">
        Copyright &copy; CrudApp 2023
      </p>
    </div>
  );
};
