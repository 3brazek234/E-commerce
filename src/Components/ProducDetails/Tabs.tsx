import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import type { Product } from "../../types/interfaces";
import { RatingStars } from "../../ui/RatingStars";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ product }: { product: Product }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="More Details" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="mb-6">
          <p className="text-gray-500 font-light text-base leading-relaxed">
            {product.description}
          </p>
        </div>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={2}>
        <div className="mb-6">
          <p className="text-gray-500 font-light text-base leading-relaxed">
            No reviews yet. Be the first to review this product!
          </p>
         <div className="flex flex-col gap-2 mt-4">
          <RatingStars />
          <textarea className="input-bg rounded p-2 mt-2 w-full" rows={4} placeholder="Write your review here..."></textarea>
          <div className="flex">
            <input
              type="text"
              className="input-bg rounded p-2 mt-2 w-full"
              placeholder="Your Name"
            />
            <input  
              type="email"
              className="border border-gray-300 rounded p-2 mt-2 w-full ml-2 input-bg"
              placeholder="Your Email"/>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 transition-colors w-2/6">
            Submit Review
          </button> 
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
