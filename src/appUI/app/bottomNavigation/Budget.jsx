import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import Scroller from "../../../components/Scroller";
import TopNavigation from "../../../components/app/TopNavigation";
import BudgetCard from "../../../components/app/BudgetCard";
import { Button, Text, TextInput } from "react-native-paper";
import appThemeColors from "../../../utils/Colors";
import OverViewCard from "../../../components/app/OverViewCard";
import GoalsCard from "../../../components/app/GoalsCard";
import BottomSheetComponent from "../../../components/app/BottomSheet";
import { Picker } from "@react-native-picker/picker";

const Budget = () => {
  const incomeRef = useRef();
  const expenseRef = useRef();

  function handleIncomeBottom(btnType) {
    incomeRef.current.open();
  }
  function handleExpenseBottom(btnType) {
    incomeRef.current.open();
  }

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <TopNavigation isHome={false} />
      <Scroller>
        <View style={styles.con}>
          <BudgetCard />
          <View style={styles.btnsCon}>
            <Button
              style={styles.btns}
              icon="arrow-up"
              mode="contained"
              onPress={handleIncomeBottom}
            >
              Add income
            </Button>
            <Button
              style={styles.btns}
              icon="arrow-down"
              mode="contained"
              onPress={handleExpenseBottom}
            >
              Add Expense
            </Button>
          </View>

          {/* overview */}
          <Text variant="titleMedium">Budget Overview</Text>
          <View style={styles.overviewCon}>
            <OverViewCard isInCome={true} />
            <OverViewCard isInCome={false} />
          </View>

          {/* goals */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text variant="titleMedium" style={styles.title}>
              My Goals
            </Text>
            <Button mode="text" style={styles.btn} contentStyle={styles.btn}>
              View all
            </Button>
          </View>
          <GoalsCard />

          {/* bills */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text variant="titleMedium" style={styles.title}>
              My Bills
            </Text>
            <Button mode="text" style={styles.btn} contentStyle={styles.btn}>
              View all
            </Button>
          </View>
          <GoalsCard />
        </View>
        <BottomSheetComponent ref={incomeRef}>
          <Text variant="titleMedium" style={styles.title}>
            Add Income
          </Text>
          <Scroller>
            <View>
              <TextInput label="Title" />
              <TextInput label="Amount" />
              <TextInput label="Description" multiline={true} />
              <Picker mode="dropdown">
                <Picker.Item value={"1"} label="option1" />
                <Picker.Item value={"2"} label="option2" />
                <Picker.Item value={"3"} label="option2" />
              </Picker>
              <Picker mode="dropdown">
                <Picker.Item value={"1"} label="option1" />
                <Picker.Item value={"2"} label="option2" />
                <Picker.Item value={"3"} label="option2" />
              </Picker>
              <Button mode="contained-tonal" buttonColor="#000" background={'#000'} textColor="#eee">Submit</Button>
            </View>
          </Scroller>
        </BottomSheetComponent>
        <BottomSheetComponent ref={expenseRef}>
          <Text variant="titleMedium" style={styles.title}>
            Add Expense
          </Text>
          <Scroller>
            <View>
              <TextInput label="Title" />
              <TextInput label="Amount" />
              <TextInput label="Description" multiline={true} />
              <Picker mode="dropdown">
                <Picker.Item value={"1"} label="option1" />
                <Picker.Item value={"2"} label="option2" />
                <Picker.Item value={"3"} label="option2" />
              </Picker>
              <Picker mode="dropdown">
                <Picker.Item value={"1"} label="option1" />
                <Picker.Item value={"2"} label="option2" />
                <Picker.Item value={"3"} label="option2" />
              </Picker>

              <Button mode="contained-tonal" buttonColor="#000" background={'#000'} textColor="#eee">Submit</Button>
            </View>
          </Scroller>
        </BottomSheetComponent>
      </Scroller>
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
  },
  btnsCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 10,
    gap: 10,
  },
  btns: {
    backgroundColor: appThemeColors.cerulean[500],
    flex: 1,
  },
  overviewCon: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    // Gap:8
    marginVertical: 5,
  },
  title: {
    marginVertical: 10,
  },
  btn: {
    color: appThemeColors.cerulean[400],
  },
});
