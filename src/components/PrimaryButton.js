import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PrimaryButton = ({ children, props }) => {
  const styles = useStyles();
  return (
    <Button
      className={styles.root}
      type="submit"
      fullWidth
      color="primary"
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
