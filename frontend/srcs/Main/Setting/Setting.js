import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate("CheckPassword")}
        >
          <Text style={styles.textstyle}>회원정보</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate("FoodList")}
        >
          <Text style={styles.textstyle}>음식리스트</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonalign: {
    justifyContent: "center",
    margin: "8%",
  },
  buttonstyle: {
    height: 55,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
  },
  textstyle: {
    fontSize: 20,
    fontFamily: "BlackHanSans_400Regular",
    color: "white",
    textAlign: "center",
  },
});
