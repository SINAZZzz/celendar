import Calendar from "./Component/calendar/Calendar";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

function App() {
  return (
    <DarkModeProvider>
      <Calendar />
    </DarkModeProvider>
  );
}

export default App;
