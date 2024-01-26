import Calendar from "./page/Calendar.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

function App() {
  return (
    <DarkModeProvider>
      <Calendar />
    </DarkModeProvider>
  );
}

export default App;
