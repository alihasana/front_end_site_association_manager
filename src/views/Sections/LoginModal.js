import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import styles from "assets/jss/material-kit-react/views/modalStyles.js";

import dataJson from 'service/data/dataJsonDidacticiel.json';

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

Transition.displayName = "Transition";

export default function LoginModal(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(props.active);

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
        <div className={classes.title}>
            <h3>Login</h3>
        </div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={4}>
            <Dialog
                classes={{
                root: classes.center,
                paper: classes.modal
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
            >
                <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                >
                <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => setClassicModal(false)}
                >
                    <Close className={classes.modalClose} />
                </IconButton>
                <h4 className={classes.modalTitle}>Modal title</h4>
                </DialogTitle>
                <DialogContent
                id="classic-modal-slide-description"
                className={classes.modalBody}
                >
                <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth. Even the all-powerful Pointing has no control about
                    the blind texts it is an almost unorthographic life One
                    day however a small line of blind text by the name of
                    Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                </DialogContent>
            </Dialog>
            </GridItem>
        </GridContainer>
        </GridItem>
    </GridContainer>
  );
}
LoginModal.defaultProps = {
    active: false
}