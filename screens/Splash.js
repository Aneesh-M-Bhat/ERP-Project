import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    top: 0,
    left: 0,
    width: 375,
    height: 813,
    position: "absolute",
  },
  logoIcon: {
    top: 161,
    left: 125,
    width: 126,
    height: 63,
    position: "absolute",
  },
  splash: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splash;
