import React, { useState } from "react";

import "./styles.css";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Masonry } from "@mui/lab";
import ImageViewer from "react-simple-image-viewer";

interface CompProps {
  pictures: string[];
}

const PicList: React.FC<CompProps> = (props: CompProps) => {
  const { pictures } = props;
  const [isViewerOpen, setisViewerOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(0);

  // insert your code here

  return (
    <Box sx={{ maxWidth: 500, minHeight: 100 }}>
      <Masonry columns={3} spacing={2}>
        {pictures.map((item, index) => (
          <div key={index}>
            <img
              src={`${item}?w=162&auto=format`}
              alt={item}
              loading="lazy"
              className="PicList-img"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
                borderRadius: 16,
              }}
              onClick={() => {
                setisViewerOpen(true);
                setClickedImage(index);
              }}
            />
          </div>
        ))}
      </Masonry>
      <Dialog
        open={isViewerOpen}
        keepMounted
        onClose={() => setisViewerOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          {isViewerOpen && (
            <ImageViewer
              src={pictures}
              currentIndex={clickedImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={() => {
                setisViewerOpen(false);
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setisViewerOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PicList;
