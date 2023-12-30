import Calendar from "./Component/calendar/Calendar";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import Typography from '@mui/material/Typography'

function App() {
  return (
    <DarkModeProvider>
      <Calendar />
     </DarkModeProvider>
  );
}

export default App;
