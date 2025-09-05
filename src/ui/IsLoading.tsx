import { CircularProgress } from "@mui/material";

  
const IsLoading = () => {
    return (
        <div className="center">
         <p>Loading...</p>
          <CircularProgress/>
         </div>
    );
};

export default IsLoading;