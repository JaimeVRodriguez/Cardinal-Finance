import {Dialog, DialogContent, DialogContentText, DialogTitle, Divider, Typography} from "@mui/material";

interface CareerDialogProps {
    isOpen: boolean;
    handleClose: () => void;
}
//TODO: Add 3-4 more caree options
//TODO: Make careers clickable and put career salaries into "account"

export default function CareerDialog({isOpen, handleClose} : CareerDialogProps) {
    return(
        <>
        <Dialog
            open={isOpen}
            onClose={handleClose}
        >
            <DialogTitle>
                Career
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <DialogContentText>
                    Retail Store Manager
                </DialogContentText>
                <DialogContentText>
                    Software Developer
                </DialogContentText>
            {/*TODO:  Remove this divider*/}
            </DialogContent>
        <Divider/>
        </Dialog>
        </>
    )
}
