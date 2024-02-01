import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const InputFileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files (acceptedFiles)
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.csv, .xls, .xlsx, .txt' });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload arq.
      </Button>
    </div>
  );
};

export default InputFileUpload;
