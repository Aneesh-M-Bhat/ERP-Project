import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const LeaveApplication = () => {
  return (
    <View style={styles.leaveApplication}>
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
        <Text style={[styles.filter, styles.labelTypo]}>Ask Doubt</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={[styles.form, styles.formLayout]}>
        <View style={[styles.classTeacherField, styles.fieldLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.sendRequestTypo]}>
            Alexa Clark
          </Text>
          <Image
            style={[styles.borderIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Class Teacher</Text>
        </View>
        <View style={[styles.applicationTitleField, styles.fieldLayout]}>
          <Text style={styles.dearSirAsTypo}>Fever</Text>
          <Image
            style={[styles.borderIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>
            Application Title
          </Text>
        </View>
        <View style={[styles.descriptionField, styles.formLayout]}>
          <Text style={[styles.dearSirAs, styles.dearSirAsTypo]}>
            Dear Sir, As I am suffering with viral fever I will not be able to
            attend the classes for Today. Please accept this request and kindly
            grant me leave.
          </Text>
          <Image
            style={[styles.border3Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Description</Text>
        </View>
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <Image
          style={[styles.bgIcon, styles.buttonLayout]}
          resizeMode="cover"
          source={require("../assets/bg2.png")}
        />
        <Text style={[styles.sendRequest, styles.sendRequestTypo]}>
          SEND REQUEST
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
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
  fieldLayout: {
    height: 62,
    width: 315,
    left: 0,
    position: "absolute",
  },
  sendRequestTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSans,
    lineHeight: 23,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 1,
    width: 315,
    left: 0,
    position: "absolute",
  },
  dearSirAsTypo: {
    color: Color.darkslategray_200,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 23,
    fontFamily: FontFamily.openSans,
    lineHeight: 23,
    textAlign: "left",
    left: 0,
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
    left: 26,
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
    left: 17,
    width: 103,
    height: 23,
    position: "absolute",
  },
  pauljamesonWorkco: {
    color: Color.gray_100,
    top: 23,
    fontSize: FontSize.size_base,
    left: 0,
  },
  borderIcon: {
    top: 61,
  },
  label: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: Color.darkgray_100,
    left: 0,
  },
  classTeacherField: {
    top: 0,
  },
  applicationTitleField: {
    top: 87,
  },
  dearSirAs: {
    width: 314,
  },
  border3Icon: {
    top: 127,
  },
  descriptionField: {
    top: 174,
    height: 128,
    left: 0,
  },
  form: {
    top: 138,
    height: 302,
    left: 30,
  },
  bgIcon: {
    left: 0,
    top: 0,
  },
  sendRequest: {
    top: 16,
    left: 104,
    fontSize: FontSize.size_base,
    color: Color.white,
  },
  button: {
    top: 465,
    left: 30,
  },
  vectorIcon: {
    top: 681,
    height: 132,
  },
  leaveApplication: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LeaveApplication;
