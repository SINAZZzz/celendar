import Calendar from "./Component/calendar/Calendar";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Calendar />
    </DarkModeProvider>
  );
}

export default App;
