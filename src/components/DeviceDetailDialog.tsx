import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  changelog?: string[];
  note?: string[];
}

const DeviceDetailDialog = ({ open, onClose, changelog, note }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Change Log:</DialogTitle>

      <DialogContent>
        {changelog?.map((str, index) => (
          <DialogContentText key={index}>{str}</DialogContentText>
        ))}
      </DialogContent>

      {Number(note?.length) > 0 && (
        <>
          <DialogTitle>Notes:</DialogTitle>

          <DialogContent>
            {note?.map((str, index) => (
              <DialogContentText key={index}>{str}</DialogContentText>
            ))}
          </DialogContent>
        </>
      )}

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeviceDetailDialog;
