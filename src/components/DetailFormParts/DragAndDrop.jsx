import React from 'react';
import {useDropzone} from 'react-dropzone';
import { BsPaperclip } from "react-icons/bs";

function DragAndDrop({
    setBrochurePreview,
    setFieldValue,
    values,
    brochurePreview
}) {

    const onDrop = (acceptedFiles) => {
        const files = acceptedFiles

        const something = () => {
                const currentFiles = values.broucher || [];
                const totalFiles = [...currentFiles, ...files];
          
                if (totalFiles.length > 3) {
                  alert("You can't upload more than 3 files.");
                  return currentFiles;
                } else {
                  return totalFiles;
                }
              };
        setFieldValue("broucher", something());

       
        const totalLength = brochurePreview.length + files.length
        setBrochurePreview((prev) => {
          if (totalLength > 3) {
            return prev;
          } else {
            const filesToPreview = files.map((file) => {
              return {
                url: URL.createObjectURL(file),
                fileFormate: file.type,
              };
            });
    
            return prev.concat(filesToPreview);
          }
        })
}

  const { getRootProps, getInputProps,isDragActive} = useDropzone({onDrop,
    accepted: "image/*,application/pdf",
    multiple: true
  });
  

 
  


  return (
    
      <div {...getRootProps()}
      className='w-4/12 bg-[#254E7E17] h-full min-h-12 flex flex-row items-center justify-center px-2 rounded-lg'>
        <input {...getInputProps()} />
        {isDragActive ? (
              <p className='whitespace-nowrap text-base text-gray-400'>Drop the files here...</p>
            ) : (
              <p className='whitespace-nowrap text-base text-gray-400'>Upload your Broucher</p>
            )}
            <BsPaperclip className='ml-4' style={{fontSize: '30'}}/>
      </div>
     
   
  );
}

export default DragAndDrop