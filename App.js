// import { StatusBar } from "expo-status-bar";
import MainNavigationContainer from "./src/components/navigation/MainNavigationContainer";
import Main from "./src/navigation/Main";
import MainWrapper from "./src/components/MainWrapper";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <MainNavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor="#ffffff" />
      <MainWrapper>
        <Main />
      </MainWrapper>
    </MainNavigationContainer>
  );
}
