import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SchoolGallery = () => {
  return (
    <View style={styles.schoolGallery}>
      <Image
        style={[styles.backgroundIcon, styles.backgroundIconPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View
        style={[styles.barsStatusBarIphoneLight, styles.backgroundIconPosition]}
      >
        <View style={[styles.barsStatusBarIphoneLight1, styles.timePosition]}>
          <View style={[styles.rectangle4, styles.timePosition]} />
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.navigationBar, styles.galleryIconPosition]}>
        <Text style={[styles.filter, styles.timeFlexBox]}>School Gallery</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <Image
        style={[styles.galleryIcon, styles.galleryIconPosition]}
        resizeMode="cover"
        source={require("../assets/gallery.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIconPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timePosition: {
    left: "0%",
    top: "0%",
  },
  timeFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  galleryIconPosition: {
    left: 16,
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
  },
  rectangle4: {
    backgroundColor: Color.gray_400,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "34.85%",
    right: "3.69%",
    bottom: "39.4%",
    left: "89.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontFamily: FontFamily.roboto,
    left: "0%",
    top: "0%",
    textAlign: "left",
    color: Color.white,
  },
  timeStyle: {
    height: "40.91%",
    width: "8%",
    top: "29.55%",
    right: "87.33%",
    bottom: "29.55%",
    left: "4.67%",
    position: "absolute",
  },
  barsStatusBarIphoneLight1: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  barsStatusBarIphoneLight: {
    height: 44,
  },
  filter: {
    left: 27,
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    color: Color.white,
    top: 0,
  },
  icBackIcon: {
    top: 3,
    width: 12,
    height: 21,
    left: 0,
    position: "absolute",
  },
  navigationBar: {
    top: 53,
    width: 136,
    height: 23,
  },
  galleryIcon: {
    top: 129,
    width: 343,
    height: 723,
  },
  schoolGallery: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SchoolGallery;
