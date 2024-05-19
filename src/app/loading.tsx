import { Loader } from "@mantine/core";

import classes from "./loading.module.scss";

const Loading = () => {
  return <Loader className={classes.loader} color="blue" />;
};

export default Loading;
