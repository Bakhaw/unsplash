import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Button from 'components/Button';

class SimpleDialogDemo extends React.Component {
  state = {
    open: true
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
        <Dialog
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
        </Dialog>
      </div>
    );
  }
}

export default SimpleDialogDemo;
