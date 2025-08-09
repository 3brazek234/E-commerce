import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useCategory } from "../../../hooks/useCategory";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Dialog = () => {
  const [toggle, setToggle] = useState < boolean > false;
  const { data, isLoading, isError } = useCategory();
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <>
      <nav className="boreder-btn hidden md:block">
        <div className="container center py-2 items-center gap-3">
          <button
            className="p-5 bg-[#7A55C1] text-white text-sm text-center flex items-center gap-3 rounded-3xl"
            onClick={() => setToggle(true)}
          >
            All Categories
            <MdKeyboardArrowDown />
          </button>

          <ul className="center">
            {isLoading ? (
              <>
                {[...Array(4)].map((_, i) => (
                  <Box key={i} sx={{ mx: 1 }}>
                    <Skeleton
                      variant="rounded"
                      width={80}
                      height={30}
                      sx={{ borderRadius: "9999px" }}
                    />
                  </Box>
                ))}
              </>
            ) : (
              data?.categories.map((item, i) => (
                <li
                  key={i}
                  className="menu list-none flex gap-1 p-3 mx-3 font-bold hover:bg-[#F1F1F1] rounded-3xl hover:cursor-pointer transition-all duration-200"
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        </div>
      </nav>

      {/* Dialog */}
      <Dialog open={toggle} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>All Categories</DialogTitle>
        <List>
          {isLoading
            ? [...Array(6)].map((_, i) => (
                <ListItem key={i}>
                  <Skeleton width="100%" height={30} />
                </ListItem>
              ))
            : data?.categories.map((category: string, i: number) => (
                <ListItem disablePadding key={i}>
                  <ListItemButton onClick={handleClose}>
                    <ListItemText primary={category} />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Dialog>
    </>
  );
};

export default Dialog;
