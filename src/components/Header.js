import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily:'Permanent Marker',
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: '1px 1px darkmagenta'
  },
}));

const Header = () => {
  const styles = useStyles();

  return <Typography className={styles.root}>form with multiple inputs</Typography>;
};

export default Header;