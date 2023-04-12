import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginV2 = () => {
  return (
    <View style={styles.loginV2}>
      <View style={styles.blueBgPosition}>
        <LinearGradient
          style={[styles.blueBg, styles.blueBgPosition]}
          locations={[0, 1]}
          colors={["#2855ae", "#7292cf"]}
        />
        <Image
          style={[styles.curveBgIcon, styles.barsPosition]}
          resizeMode="cover"
          source={require("../assets/curve-bg.png")}
        />
      </View>
      <View style={[styles.barsStatusBarIphoneLight, styles.barsPosition]}>
        <View
          style={[styles.barsStatusBarIphoneLight1, styles.rectanglePosition]}
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
      <View style={[styles.password, styles.buttonPosition]}>
        <Image
          style={styles.pswdIcon}
          resizeMode="cover"
          source={require("../assets/pswd.png")}
        />
        <Text style={[styles.inputTitleCopy, styles.inputTitleCopyTypo]}>
          Password
        </Text>
        <Image
          style={styles.iconView}
          resizeMode="cover"
          source={require("../assets/icon-view.png")}
        />
        <View style={[styles.border, styles.borderLayout]} />
      </View>
      <View style={[styles.button, styles.buttonPosition]}>
        <View
          style={[styles.barsStatusBarIphoneLight1, styles.rectanglePosition]}
        >
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bg8.png")}
          />
          <Image
            style={[styles.rightIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/right1.png")}
          />
          <Text style={[styles.signIn, styles.signInTypo]}>SIGN IN</Text>
        </View>
      </View>
      <View style={[styles.mobileNumberEmail, styles.buttonPosition]}>
        <Text style={[styles.syalfreelanceGmailcom, styles.forgotPasswordTypo]}>
          rahul@gmail.com
        </Text>
        <Image
          style={[styles.border2Icon, styles.borderLayout]}
          resizeMode="cover"
          source={require("../assets/border21.png")}
        />
        <Text style={[styles.inputTitleCopy, styles.inputTitleCopyTypo]}>
          Mobile Number/Email
        </Text>
      </View>
      <Image
        style={[styles.group8037Icon, styles.group8037IconPosition]}
        resizeMode="cover"
        source={require("../assets/group-8037.png")}
      />
      <View style={[styles.headingContent, styles.group8037IconPosition]}>
        <Text style={[styles.signInToContinue, styles.inputTitleCopyTypo]}>
          Sign in to continue
        </Text>
        <Text style={[styles.hiStudent, styles.signInTypo]}>Hi Student</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.barsHomeIndicatorIphoneOn, styles.barsPosition]}>
        <View
          style={[styles.barsStatusBarIphoneLight1, styles.rectanglePosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  blueBgPosition: {
    height: 813,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
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
  buttonPosition: {
    width: 315,
    left: 30,
    position: "absolute",
  },
  inputTitleCopyTypo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  borderLayout: {
    height: 1,
    width: 315,
    left: 0,
    position: "absolute",
  },
  signInTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  forgotPasswordTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  group8037IconPosition: {
    left: 30,
    position: "absolute",
  },
  blueBg: {
    backgroundColor: "transparent",
  },
  curveBgIcon: {
    top: 215,
    height: 597,
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
  barsStatusBarIphoneLight1: {
    position: "absolute",
  },
  barsStatusBarIphoneLight: {
    height: 44,
    top: 0,
  },
  pswdIcon: {
    top: 29,
    left: 1,
    width: 90,
    height: 9,
    position: "absolute",
  },
  inputTitleCopy: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: Color.darkgray_100,
    top: 0,
  },
  iconView: {
    top: 25,
    left: 297,
    width: 18,
    height: 13,
    position: "absolute",
  },
  border: {
    top: 55,
    backgroundColor: Color.gainsboro_100,
  },
  password: {
    top: 504,
    height: 56,
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
    lineHeight: 23,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.white,
  },
  button: {
    top: 600,
    height: 54,
  },
  syalfreelanceGmailcom: {
    top: 23,
    color: Color.darkslategray_200,
    left: 0,
  },
  border2Icon: {
    top: 61,
  },
  mobileNumberEmail: {
    top: 407,
    height: 62,
  },
  group8037Icon: {
    top: 80,
    width: 321,
    height: 161,
  },
  signInToContinue: {
    top: 52,
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    color: Color.gray_100,
  },
  hiStudent: {
    fontSize: FontSize.size_11xl,
    lineHeight: 48,
    color: Color.darkslategray_100,
    left: 0,
    top: 0,
  },
  headingContent: {
    top: 289,
    width: 156,
    height: 77,
  },
  forgotPassword: {
    top: 674,
    left: 226,
    color: Color.darkslategray_300,
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
  barsHomeIndicatorIphoneOn: {
    top: 796,
    height: 16,
  },
  loginV2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginV2;
