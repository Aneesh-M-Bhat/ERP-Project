import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={[styles.background, styles.barsPosition]}>
        <LinearGradient
          style={[styles.blueBg, styles.barsPosition]}
          locations={[0, 1]}
          colors={["#2855ae", "#7292cf"]}
        />
        <Image
          style={[styles.curveBgIcon, styles.barsPosition]}
          resizeMode="cover"
          source={require("../assets/curve-bg1.png")}
        />
      </View>
      <View style={styles.headingContent}>
        <Text style={[styles.signInToContinue, styles.inputTitleCopyTypo]}>
          Sign in to continue
        </Text>
        <Text style={styles.hiStudent}>Hi Student</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot Password?
      </Text>
      <View style={[styles.password, styles.buttonPosition]}>
        <Image
          style={styles.pswdIcon}
          resizeMode="cover"
          source={require("../assets/pswd1.png")}
        />
        <Text style={[styles.inputTitleCopy, styles.inputTitleCopyTypo]}>
          Password
        </Text>
        <View style={[styles.border, styles.borderLayout]} />
        <Image
          style={styles.iconView}
          resizeMode="cover"
          source={require("../assets/icon-view1.png")}
        />
      </View>
      <View style={[styles.mobileNumberEmail, styles.buttonPosition]}>
        <Text style={[styles.syalfreelanceGmailcom, styles.forgotPasswordTypo]}>
          Syalfreelance@gmail.com
        </Text>
        <Image
          style={[styles.border2Icon, styles.borderLayout]}
          resizeMode="cover"
          source={require("../assets/border22.png")}
        />
        <Text style={[styles.inputTitleCopy, styles.inputTitleCopyTypo]}>
          Mobile Number/Email
        </Text>
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <View style={[styles.button, styles.buttonPosition]}>
        <View style={[styles.button1, styles.rectanglePosition]}>
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
          <Text style={styles.signIn}>SIGN IN</Text>
        </View>
      </View>
      <View style={[styles.barsStatusBarIphoneLight, styles.barsPosition]}>
        <View style={[styles.button1, styles.rectanglePosition]}>
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
            <Text style={[styles.time, styles.rectanglePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.barsHomeIndicatorIphoneOn, styles.barsPosition]}>
        <View style={[styles.button1, styles.rectanglePosition]}>
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
  inputTitleCopyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    left: 0,
    position: "absolute",
  },
  forgotPasswordTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    position: "absolute",
  },
  buttonPosition: {
    width: 315,
    left: 30,
    position: "absolute",
  },
  borderLayout: {
    height: 1,
    width: 315,
    left: 0,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  blueBg: {
    backgroundColor: "transparent",
    top: 0,
    width: 375,
    height: 812,
  },
  curveBgIcon: {
    top: 329,
    height: 483,
  },
  background: {
    top: 0,
    width: 375,
    height: 812,
  },
  signInToContinue: {
    top: 52,
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    opacity: 0.61,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.openSans,
  },
  hiStudent: {
    fontSize: FontSize.size_15xl,
    lineHeight: 48,
    fontWeight: "600",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.openSans,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headingContent: {
    top: 222,
    width: 156,
    height: 77,
    left: 30,
    position: "absolute",
  },
  forgotPassword: {
    top: 646,
    left: 226,
    color: Color.darkslategray_300,
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
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    top: 0,
  },
  border: {
    top: 55,
    backgroundColor: Color.gainsboro_100,
  },
  iconView: {
    top: 25,
    left: 297,
    width: 18,
    height: 13,
    position: "absolute",
  },
  password: {
    top: 476,
    height: 56,
  },
  syalfreelanceGmailcom: {
    top: 23,
    color: Color.darkslategray_200,
    left: 0,
    lineHeight: 20,
  },
  border2Icon: {
    top: 61,
  },
  mobileNumberEmail: {
    top: 379,
    height: 62,
  },
  vectorIcon: {
    top: 67,
    left: 64,
    width: 295,
    height: 131,
    position: "absolute",
  },
  bgIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
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
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.openSans,
    position: "absolute",
  },
  button1: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  button: {
    top: 572,
    height: 54,
  },
  rectangle4: {
    backgroundColor: Color.gray_400,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
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
    left: "0%",
    top: "0%",
    textAlign: "left",
    color: Color.white,
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
    width: 375,
  },
  rectangle: {
    backgroundColor: Color.lightgray,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
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
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  barsHomeIndicatorIphoneOn: {
    top: 796,
    height: 16,
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
  },
});

export default Login;
