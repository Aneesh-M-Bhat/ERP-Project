import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AskDoubts = () => {
  return (
    <View style={styles.askDoubts}>
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
        <View style={[styles.selectTeacher, styles.selectLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.sendTypo]}>
            Alexa Clark
          </Text>
          <Image
            style={[styles.borderIcon, styles.formLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Select Teacher</Text>
          <Image
            style={styles.icBottomArrowIcon}
            resizeMode="cover"
            source={require("../assets/ic-bottom-arrow.png")}
          />
        </View>
        <View style={[styles.selectSubject, styles.selectLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.sendTypo]}>Math</Text>
          <Image
            style={[styles.borderIcon, styles.formLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Select Subject</Text>
          <Image
            style={styles.icBottomArrowIcon}
            resizeMode="cover"
            source={require("../assets/ic-bottom-arrow.png")}
          />
        </View>
        <View style={[styles.title, styles.selectLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.sendTypo]}>
            Factoring a sum or difference of two cubes
          </Text>
          <Image
            style={[styles.borderIcon, styles.formLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Title</Text>
        </View>
        <View style={[styles.doubtDescription, styles.selectLayout]}>
          <Text style={[styles.pauljamesonWorkco, styles.sendTypo]}>--</Text>
          <Image
            style={[styles.borderIcon, styles.formLayout]}
            resizeMode="cover"
            source={require("../assets/border.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>
            Doubt Description
          </Text>
        </View>
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={[styles.bgIcon, styles.buttonLayout]}
            resizeMode="cover"
            source={require("../assets/bg3.png")}
          />
          <Text style={[styles.send, styles.sendTypo]}>SEND</Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
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
  selectLayout: {
    height: 62,
    width: 315,
    left: 0,
    position: "absolute",
  },
  sendTypo: {
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
    left: 0,
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
    top: 2,
    width: 12,
    height: 21,
    left: 0,
    position: "absolute",
  },
  navigationBar: {
    top: 54,
    left: 16,
    width: 104,
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
  icBottomArrowIcon: {
    top: 30,
    left: 301,
    width: 14,
    height: 8,
    position: "absolute",
  },
  selectTeacher: {
    top: 0,
  },
  selectSubject: {
    top: 87,
  },
  title: {
    top: 174,
  },
  doubtDescription: {
    top: 261,
  },
  bgIcon: {
    top: 0,
  },
  send: {
    top: 16,
    left: 139,
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  button: {
    top: 348,
  },
  form: {
    top: 138,
    left: 30,
    height: 402,
  },
  vectorIcon: {
    top: 680,
    height: 132,
  },
  askDoubts: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AskDoubts;
