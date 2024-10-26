import { StatusBar } from "expo-status-bar";
import MainNavigationContainer from "./src/components/navigation/MainNavigationContainer";
import Main from "./src/navigation/Main";
import MainWrapper from "./src/components/MainWrapper";

export default function App() {
  return (
    <MainNavigationContainer>
      <StatusBar style="auto" />
      <MainWrapper>
        <Main />
      </MainWrapper>
    </MainNavigationContainer>
  );
}
