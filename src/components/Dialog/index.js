import React, { Component } from 'react';
import { Dialog as MaterialDialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

import Button from 'components/Button';

class Dialog extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { buttonContent, dialogContent } = this.props;
    return (
      <div>
        <Button onClick={this.handleOpen}>{buttonContent}</Button>
        <MaterialDialog
          aria-labelledby='Dialog'
          onClose={this.handleClose}
          open={open}
          fullWidth
          maxWidth='sm'
        >
          <DialogContent
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.8), white 150px)'
            }}
          >
            {dialogContent}
          </DialogContent>
        </MaterialDialog>
      </div>
    );
  }
}

export default Dialog;
