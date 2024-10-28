import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";

const BottomSheetComponent = React.forwardRef(({children},refRBSheet) => {
  const height = Dimensions.get('screen').height;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <RBSheet
        ref={refRBSheet}
        height={height-200}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{ container: { padding: 16 } }}
      >
        {children}
      </RBSheet>
    </View>
  );
});

export default BottomSheetComponent;

const styles = StyleSheet.create({});
