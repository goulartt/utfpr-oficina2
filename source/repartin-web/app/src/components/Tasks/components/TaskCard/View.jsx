import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import styles from "./styles";
import Arrow from '@material-ui/icons/ArrowForward';
import { CardContent, Typography, IconButton } from "@material-ui/core";

const View = ( { classes } ) => {

  return (
    <Card color="secondary" raised={true} style={{margin: "16px 0px"}}>
      <CardContent className={classes.cardStyle}>
        <div>
          <Typography color="primary" component="h1" align="left" variant="h5">Título da tarefa</Typography>
          <Typography color="primary" component="h2" align="left" variant="h6">Usuários da tarefa</Typography>
          <Typography color="primary" component="h2" align="left" variant="h6">Aguardando / Atrasada / Feita</Typography>
        </div>
        <IconButton color="primary" className={classes.button} aria-label="Membros da república">
          <Arrow/>
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default withStyles( styles )( View );