import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { useState } from "react";
import { People } from "./pages/People";
import { Chores } from "./pages/Chores";
import { NameProvider } from "./contexts/NameContext";
import { ChoreProvider } from "./contexts/ChoreContext";
import { Champion } from "./pages/Champion";

export const App = ({ toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("champion");
  return (
    <>
      <Header toggleTheme={toggleTheme}>
        <Nav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </Header>
      {activeSection === "champion" ? (
        <Champion />
      ) : activeSection === "people" ? (
        <NameProvider>
          <People />
        </NameProvider>
      ) : (
        <ChoreProvider>
          <Chores />
        </ChoreProvider>
      )}
    </>
  );
};

export default App;
