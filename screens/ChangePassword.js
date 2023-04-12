import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ChangePassword = () => {
  return (
    <View style={styles.changePassword}>
      <Image
        style={[styles.backgroundIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View style={[styles.barsStatusBarIphoneLight, styles.iconPosition]}>
        <View style={styles.rectangle4Position}>
          <View style={[styles.rectangle4, styles.rectangle4Position]} />
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
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationBar}>
        <Text style={[styles.filter, styles.labelTypo]}>Change Password</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back2.png")}
        />
      </View>
      <View style={[styles.form, styles.formLayout]}>
        <View style={[styles.oldPassword, styles.passwordLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.changePassword1Typo]}>
            --
          </Text>
          <Image
            style={[styles.borderIcon, styles.formLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Old Password</Text>
        </View>
        <View style={[styles.newPassword, styles.passwordLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.changePassword1Typo]}>
            --
          </Text>
          <Image
            style={[styles.borderIcon, styles.formLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>New Password</Text>
        </View>
        <View style={[styles.retypePassword, styles.passwordLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.changePassword1Typo]}>
            --
          </Text>
          <Image
            style={[styles.borderIcon, styles.formLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Retype Password</Text>
        </View>
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <Image
          style={[styles.bgIcon, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/bg1.png")}
        />
        <Text style={[styles.changePassword1, styles.changePassword1Typo]}>
          CHANGE PASSWORD
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangle4Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  labelTypo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  formLayout: {
    width: 315,
    position: "absolute",
  },
  passwordLayout: {
    height: 62,
    width: 315,
    left: 0,
    position: "absolute",
  },
  changePassword1Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSans,
    lineHeight: 23,
    textAlign: "left",
    position: "absolute",
  },
  buttonLayout: {
    height: 54,
    width: 315,
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
    top: 52,
    left: 16,
    width: 160,
    height: 23,
    position: "absolute",
  },
  pauljamesonWorkco: {
    top: 23,
    color: Color.darkslategray_200,
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
  oldPassword: {
    top: 0,
  },
  newPassword: {
    top: 87,
  },
  retypePassword: {
    top: 174,
  },
  form: {
    top: 138,
    height: 236,
    left: 30,
  },
  bgIcon: {
    left: 0,
    top: 0,
  },
  changePassword1: {
    top: 15,
    left: 88,
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  button: {
    top: 399,
    left: 30,
  },
  vectorIcon: {
    top: 680,
    height: 132,
  },
  changePassword: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChangePassword;
