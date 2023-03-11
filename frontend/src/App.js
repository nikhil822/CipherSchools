import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import SignIn from "./components/Signin";

const App = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#1E1E1E' }}>
        
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/video/:id" exact element={ <VideoDetail /> } />
        </Routes>
      </Box>
    </>
  )
}

export default App;
