// import { StatusBar } from "expo-status-bar";
import MainNavigationContainer from "./src/components/navigation/MainNavigationContainer";
import Main from "./src/navigation/Main";
import MainWrapper from "./src/components/MainWrapper";
import { StatusBar } from "react-native";
import appThemeColors from "./src/utils/Colors";

export default function App() {
  return (
    <MainNavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={appThemeColors.cerulean[100]} />
      <MainWrapper>
        <Main />
      </MainWrapper>
    </MainNavigationContainer>
  );
}
