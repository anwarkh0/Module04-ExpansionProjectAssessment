import AppRoutes from "./routes/AppRoutes";
import Navbar from './layout/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes />
    </div>
  );
}

export default App;
