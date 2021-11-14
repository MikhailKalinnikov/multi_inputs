import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { InsertDriveFile } from "@material-ui/icons";
import CloudUpload from "@material-ui/icons/CloudUpload";
import Dropzone from "react-dropzone";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "10px",
    marginTop: "20px",
  },
  icons: {
    fontSize: "42px",
    marginTop: "20px",
    color: "#888",
  },
}));

const FileUpload = ({ control, name }) => {
  const styles = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onblur, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.root}
                variant="outlined"
                {...getRootProps()}
              >
                <CloudUpload className={styles.icons} />
                <input {...getInputProps()} name={name} onBlur={onblur} />
                <p>Выберите файлы для загрузки</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value &&
              value.map((file, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    secondary={file.size + " КБ"}
                  />
                </ListItem>
              ))}
          </List>
        </>
      )}
    />
  );
};

export default FileUpload;
