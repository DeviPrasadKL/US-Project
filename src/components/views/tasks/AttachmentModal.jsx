import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { IconButton, Stack } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function AttachmentModal({ open, handleClose }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack gap={2}>
                        <Typography id="modal-modal-title" variant="h6">
                            Attachments
                        </Typography>
                        <Box>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload files
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={(event) => console.log(event.target.files)}
                                    multiple
                                />
                            </Button>
                        </Box>

                        <Stack flexDirection='row' justifyContent='space-between' alignItems="center">
                            <Typography variant='p'>Sample.jpg</Typography>
                            <IconButton>
                                <CloseOutlinedIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
