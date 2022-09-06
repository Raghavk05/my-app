import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <>
    <div>
      <ChakraProvider>
      <Navbar />
      <Home/>
      </ChakraProvider>
    </div>
    </>
  );
}

export default App;
