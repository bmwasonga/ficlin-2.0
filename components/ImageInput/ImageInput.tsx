import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react';
import { FC } from 'react';
import ImageUploading from 'react-images-uploading';

import { storage } from '@/utils/nhost';

const FileUpload: FC = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log('The imageList is, ', imageList, addUpdateIndex);
    setImages(imageList);
  };

  //define the interface for the params below

  const onSubmit = async () => {
    const img = images.map((image) => {
      return image.file;
    });

    console.log('this is  madness ', img);

    try {
      await storage.put('/', img);
    } catch (error) {
      console.log('Error is: ', error);
    }
  };

  return (
    <Box className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url">
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <Box bg="gray.200" p={2}>
            <Button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}>
              Click or Drop here
            </Button>
            &nbsp;
            <Button onClick={onImageRemoveAll} colorScheme="red">
              Remove all images
            </Button>
            {imageList.map((image, index) => (
              <Box key={index} m={2}>
                <Center>
                  <img src={image['data_url']} alt="" width="100" />
                  <Box>
                    <Button m={2} onClick={() => onImageUpdate(index)}>
                      Update
                    </Button>
                    <Button m={2} onClick={() => onImageRemove(index)} colorScheme="red">
                      Remove
                    </Button>
                  </Box>
                </Center>
              </Box>
            ))}
          </Box>
        )}
      </ImageUploading>

      <Button m={2} onClick={onSubmit} type="submit">
        Submit
      </Button>
    </Box>
  );
};
export default FileUpload;
