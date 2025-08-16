import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { useCategory } from "../../../hooks/useCategory";
import Skeleton from "@mui/material/Skeleton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavItems } from "../../../Constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { data, isLoading } = useCategory();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      {/* Sticky/Fixed Navbar */}
      <div
        className={`${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 transform translate-y-0 shadow-2xl opacity-100"
            : "fixed top-0 left-0 right-0 transform -translate-y-full opacity-0 pointer-events-none"
        } w-full bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-500 ease-in-out`}
      >
        <nav className="hidden md:block">
          <div className="container mx-auto px-4 py-3 flex items-center gap-6">
            <button
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-bold flex items-center gap-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => setToggle(true)}
            >
              All Categories
              <MdKeyboardArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <ul className="flex items-center gap-6">
              {NavItems.map((item, index) => (
                <Link to={item.link}>
                  <li key={index}>
                    <span className="relative px-3 py-2 cursor-pointer text-gray-700 font-medium hover:text-purple-600 transition-all duration-300 group text-sm">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Regular Navbar */}
      <div className="w-full bg-white shadow-lg border-t border-gray-100">
        <nav className="hidden md:block">
          <div className="container mx-auto px-4 py-4 flex items-center gap-6">
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-bold flex items-center gap-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => setToggle(true)}
            >
              All Categories
              <MdKeyboardArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <ul className="flex items-center gap-8">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>
                    {" "}
                    <span className="relative px-4 py-2 cursor-pointer text-gray-700 font-medium hover:text-purple-600 transition-all duration-300 group">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Dialog */}
      <Dialog
        open={toggle}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "16px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <DialogTitle
          sx={{
            background: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          All Categories
        </DialogTitle>
        <List sx={{ padding: "16px" }}>
          {isLoading
            ? [...Array(6)].map((_, i) => (
                <ListItem
                  key={i}
                  sx={{ borderRadius: "8px", marginBottom: "8px" }}
                >
                  <Skeleton
                    width="100%"
                    height={40}
                    sx={{ borderRadius: "8px" }}
                  />
                </ListItem>
              ))
            : data.map((category: string, i: number) => (
                <ListItem disablePadding key={i} sx={{ marginBottom: "4px" }}>
                  <ListItemButton
                    onClick={handleClose}
                    sx={{
                      borderRadius: "12px",
                      padding: "12px 16px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                        transform: "translateX(8px)",
                        boxShadow: "0 4px 12px rgba(147, 51, 234, 0.15)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={category}
                      primaryTypographyProps={{
                        fontWeight: "medium",
                        fontSize: "0.95rem",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </Dialog>
    </>
  );
};

export default NavBar;
