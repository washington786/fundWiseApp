import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import RBSheet from 'react-native-raw-bottom-sheet';
// import { Modalize } from "react-native-modalize";
// import { Button } from "react-native-paper";
// import BottomSheet from "reanimated-bottom-sheet";

const BottomSheetComponent = () => {
    const refRBSheet = useRef();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Open Bottom Sheet" onPress={() => refRBSheet.current.open()} />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{ container: { padding: 16 } }}
        >
          <Text>Bottom Sheet Content</Text>
        </RBSheet>
      </View>
    );
};

export default BottomSheetComponent;

const styles = StyleSheet.create({});
