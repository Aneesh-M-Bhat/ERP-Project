import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const PayOnline = () => {
  return (
    <View style={styles.payOnline}>
      <Image
        style={[styles.backgroundIcon, styles.barsPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View style={[styles.barsHomeIndicatorIphoneOn, styles.barsPosition]}>
        <View
          style={[styles.barsHomeIndicatorIphoneOn1, styles.rectanglePosition]}
        >
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
      <View style={[styles.barsStatusBarIphoneLight, styles.barsPosition]}>
        <View
          style={[styles.barsHomeIndicatorIphoneOn1, styles.rectanglePosition]}
        >
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
        <Text style={[styles.filter, styles.labelTypo]}>Pay Online</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={[styles.paymentForm, styles.button3Layout]}>
        <View style={[styles.totalFees, styles.dateLayout]}>
          <Text style={[styles.text, styles.textTypo]}>01 Feb 2020</Text>
          <Image
            style={[styles.borderIcon, styles.button3Layout]}
            resizeMode="cover"
            source={require("../assets/border1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Date</Text>
          <Image
            style={styles.icCalenderIcon}
            resizeMode="cover"
            source={require("../assets/ic-calender.png")}
          />
        </View>
        <View style={[styles.period, styles.dateLayout]}>
          <Text style={[styles.text, styles.textTypo]}>28 Feb 2020</Text>
          <Image
            style={[styles.borderIcon, styles.button3Layout]}
            resizeMode="cover"
            source={require("../assets/border1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Period</Text>
          <Image
            style={styles.icCalenderIcon}
            resizeMode="cover"
            source={require("../assets/ic-calender.png")}
          />
        </View>
        <View style={[styles.date, styles.dateLayout]}>
          <Text style={[styles.text, styles.textTypo]}>₹999</Text>
          <Image
            style={[styles.borderIcon, styles.button3Layout]}
            resizeMode="cover"
            source={require("../assets/border1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Total Fees</Text>
        </View>
      </View>
      <View style={[styles.button3, styles.button3Layout]}>
        <View
          style={[styles.barsHomeIndicatorIphoneOn1, styles.rectanglePosition]}
        >
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bg6.png")}
          />
          <Image
            style={[styles.rightIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/right.png")}
          />
          <Text style={[styles.signIn, styles.textTypo]}>PAY NOW</Text>
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
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  button3Layout: {
    width: 341,
    position: "absolute",
  },
  dateLayout: {
    height: 62,
    width: 341,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSans,
    lineHeight: 23,
    textAlign: "left",
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
    top: 0,
  },
  rectangle: {
    backgroundColor: Color.lightgray,
    position: "absolute",
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
    position: "absolute",
  },
  barsHomeIndicatorIphoneOn1: {
    position: "absolute",
  },
  barsHomeIndicatorIphoneOn: {
    top: 796,
    height: 16,
  },
  rectangle4: {
    backgroundColor: Color.gray_400,
    position: "absolute",
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
    fontFamily: FontFamily.openSans,
    color: Color.white,
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
    width: 108,
    height: 23,
    left: 16,
    position: "absolute",
  },
  text: {
    top: 23,
    color: Color.darkslategray_300,
    left: 0,
  },
  borderIcon: {
    top: 61,
    height: 1,
    left: 0,
  },
  label: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: Color.darkgray_100,
    left: 0,
  },
  icCalenderIcon: {
    top: 25,
    left: 320,
    height: 18,
    width: 17,
    position: "absolute",
  },
  totalFees: {
    top: 0,
  },
  period: {
    top: 91,
  },
  date: {
    top: 182,
  },
  paymentForm: {
    top: 142,
    height: 244,
    left: 16,
  },
  bgIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  rightIcon: {
    height: "33.26%",
    width: "8.12%",
    top: "33.25%",
    right: "9.02%",
    bottom: "33.49%",
    left: "82.86%",
  },
  signIn: {
    top: "29.47%",
    left: "41.89%",
    color: Color.white,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  button3: {
    top: 700,
    height: 54,
    left: 16,
  },
  payOnline: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PayOnline;
