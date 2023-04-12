import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Support = () => {
  return (
    <View style={styles.support}>
      <Image
        style={[styles.backgroundIcon, styles.barsPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View style={[styles.barsStatusBarIphoneLight, styles.barsPosition]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle4, styles.rectanglePosition]} />
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
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
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationBar}>
        <Text style={[styles.filter, styles.filterTypo]}>Support</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back.png")}
        />
      </View>
      <View style={styles.supportContent}>
        <Text style={[styles.getSupport, styles.filterTypo]}>Get Support</Text>
        <Text style={[styles.forAnySupportRequestRegard, styles.callUsTypo]}>
          For any support request regards your orders or deliveries please feel
          free to speak with us at below.
        </Text>
        <Text
          style={[styles.callUs, styles.callUsTypo]}
        >{`Call us - +91 7838XXXXXX
Mail us - syalfreelance@gmail.com`}</Text>
        <Image
          style={styles.blobIcon}
          resizeMode="cover"
          source={require("../assets/blob.png")}
        />
        <Image
          style={styles.supportIcon}
          resizeMode="cover"
          source={require("../assets/support.png")}
        />
      </View>
      <View style={[styles.barsHomeIndicatorIphoneOn, styles.barsPosition]}>
        <View style={styles.rectanglePosition}>
          <View
            style={[
              styles.barsHomeIndicatorIphoneOn2,
              styles.rectanglePosition,
            ]}
          >
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.homeIndicatorIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/home-indicator.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barsPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  filterTypo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  callUsTypo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSans,
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
    top: 0,
  },
  rectangle4: {
    backgroundColor: Color.gray_400,
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "34.85%",
    right: "3.69%",
    bottom: "39.4%",
    left: "89.82%",
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
    textAlign: "left",
    color: Color.white,
    left: "0%",
    top: "0%",
    position: "absolute",
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
  barsStatusBarIphoneLight: {
    height: 44,
    top: 0,
  },
  filter: {
    left: 27,
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    color: Color.white,
    fontFamily: FontFamily.openSans,
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
    left: 16,
    width: 89,
    height: 23,
    position: "absolute",
  },
  getSupport: {
    top: 216,
    left: 80,
    fontSize: 24,
    lineHeight: 30,
    color: Color.darkslategray_300,
  },
  forAnySupportRequestRegard: {
    top: 270,
    color: Color.darkgray_100,
    width: 277,
    left: 0,
  },
  callUs: {
    top: 442,
    left: 26,
    color: Color.darkslategray_300,
  },
  blobIcon: {
    left: 53,
    width: 171,
    height: 176,
    top: 0,
    position: "absolute",
  },
  supportIcon: {
    left: 57,
    width: 162,
    height: 170,
    top: 0,
    position: "absolute",
  },
  supportContent: {
    top: 242,
    left: 49,
    height: 482,
    width: 277,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.lightgray,
  },
  homeIndicatorIcon: {
    height: "31.25%",
    width: "35.73%",
    top: "18.75%",
    right: "32.27%",
    bottom: "50%",
    left: "32%",
  },
  barsHomeIndicatorIphoneOn2: {
    opacity: 0.1,
  },
  barsHomeIndicatorIphoneOn: {
    top: 797,
    height: 16,
  },
  support: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Support;
