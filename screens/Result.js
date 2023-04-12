import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Result = () => {
  return (
    <View style={styles.result}>
      <Image
        style={[styles.backgroundIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/background3.png")}
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
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.navigationBarIcon}
        resizeMode="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <View style={[styles.gradePertange, styles.groupIconLayout]}>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <Image
          style={styles.greyCircleIcon}
          resizeMode="cover"
          source={require("../assets/grey-circle.png")}
        />
        <Image
          style={styles.circleBgIcon}
          resizeMode="cover"
          source={require("../assets/circle-bg.png")}
        />
        <Text style={styles.text}>85%</Text>
        <Text style={styles.gradeA}>GRADE A</Text>
        <Image
          style={styles.starIcon}
          resizeMode="cover"
          source={require("../assets/star.png")}
        />
      </View>
      <Text
        style={[styles.youAreExcellent, styles.akshaySyalClr]}
      >{`You are Excellent, `}</Text>
      <Text style={[styles.akshaySyal, styles.akshaySyalClr]}>Shivani</Text>
      <View style={[styles.resultCard, styles.cardLayout]}>
        <Image
          style={[styles.cardBgIcon, styles.cardLayout]}
          resizeMode="cover"
          source={require("../assets/card-bg1.png")}
        />
        <Text style={[styles.english, styles.mathTypo]}>English</Text>
        <Text style={[styles.science, styles.mathTypo]}>Science</Text>
        <Text style={[styles.socialStudy, styles.mathTypo]}>Social Study</Text>
        <Text style={[styles.hindi, styles.mathTypo]}>Hindi</Text>
        <Text style={[styles.math, styles.mathTypo]}>Math</Text>
        <Text style={[styles.drawing, styles.mathTypo]}>Drawing</Text>
        <Text style={[styles.computer, styles.mathTypo]}>Computer</Text>
        <Image
          style={[styles.blueBg2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/blue-bg2.png")}
        />
        <Image
          style={[styles.greenBgIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/green-bg.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>100</Text>
        <Text style={[styles.b, styles.bTypo]}>74 - B</Text>
        <Text style={[styles.b2, styles.bTypo]}>74 - B</Text>
        <Text style={[styles.b1, styles.bTypo]}>89 - B</Text>
        <Text style={[styles.text2, styles.textTypo]}>100</Text>
        <Text style={[styles.text3, styles.textTypo]}>100</Text>
        <Text style={[styles.text4, styles.textTypo]}>100</Text>
        <Text style={[styles.b3, styles.bTypo]}>87 - B</Text>
        <Text style={[styles.b21, styles.bTypo]}>87 - B</Text>
        <Text style={[styles.b4, styles.bTypo]}>78 - B</Text>
        <Text style={[styles.a, styles.bTypo]}>96 - A</Text>
        <Text style={[styles.text5, styles.textTypo]}>100</Text>
        <Text style={[styles.text6, styles.textTypo]}>100</Text>
        <Text style={[styles.text7, styles.textTypo]}>100</Text>
      </View>
      <View style={[styles.downloadButton, styles.bgIconLayout]}>
        <Image
          style={[styles.bgIcon, styles.bgIconLayout]}
          resizeMode="cover"
          source={require("../assets/bg4.png")}
        />
        <Text style={styles.downloadPdf}>DOWNLOAD PDF</Text>
        {/* <Image
          style={styles.icPdfIcon}
          resizeMode="cover"
          source={require("../assets/ic-pdf.png")}
        /> */}
      </View>
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
  groupIconLayout: {
    height: 136,
    width: 136,
    position: "absolute",
  },
  akshaySyalClr: {
    color: Color.darkslategray_300,
    position: "absolute",
  },
  cardLayout: {
    height: 218,
    width: 343,
    position: "absolute",
  },
  mathTypo: {
    fontSize: FontSize.size_sm,
    left: 15,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  iconLayout: {
    width: 80,
    height: 218,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.darkslategray_100,
    left: 211,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  bTypo: {
    left: 280,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  bgIconLayout: {
    height: 39,
    width: 217,
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
    top: 0,
    width: 375,
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
    textAlign: "left",
    color: Color.white,
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.roboto,
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
    width: 375,
  },
  vectorIcon: {
    top: 681,
    height: 132,
  },
  navigationBarIcon: {
    top: 56,
    height: 21,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupIcon: {
    left: 0,
    top: 0,
  },
  greyCircleIcon: {
    top: 6,
    left: 6,
    width: 124,
    height: 124,
    position: "absolute",
  },
  circleBgIcon: {
    top: 13,
    left: 13,
    width: 108,
    height: 108,
    position: "absolute",
  },
  text: {
    top: 34,
    left: 36,
    fontSize: 35,
    lineHeight: 49,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  gradeA: {
    top: 80,
    left: 44,
    lineHeight: 19,
    fontFamily: FontFamily.openSans,
    fontWeight: "700",
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  starIcon: {
    top: 83,
    left: 1,
    width: 37,
    height: 37,
    position: "absolute",
  },
  gradePertange: {
    left: 119,
    top: 99,
  },
  youAreExcellent: {
    top: 300,
    left: 128,
    lineHeight: 21,
    fontWeight: "600",
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  akshaySyal: {
    top: 321,
    fontSize: FontSize.size_11xl,
    lineHeight: 32,
    textAlign: "center",
    left: 135,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.roboto,
  },
  cardBgIcon: {
    left: 0,
    top: 0,
  },
  english: {
    top: 15,
  },
  science: {
    top: 71,
  },
  socialStudy: {
    top: 127,
  },
  hindi: {
    top: 43,
  },
  math: {
    top: 99,
  },
  drawing: {
    top: 155,
  },
  computer: {
    top: 183,
  },
  blueBg2Icon: {
    left: 182,
  },
  greenBgIcon: {
    left: 262,
  },
  text1: {
    top: 15,
  },
  b: {
    top: 15,
  },
  b2: {
    top: 71,
  },
  b1: {
    top: 127,
  },
  text2: {
    top: 71,
  },
  text3: {
    top: 127,
  },
  text4: {
    top: 43,
  },
  b3: {
    top: 43,
  },
  b21: {
    top: 99,
  },
  b4: {
    top: 155,
  },
  a: {
    top: 183,
  },
  text5: {
    top: 99,
  },
  text6: {
    top: 155,
  },
  text7: {
    top: 183,
  },
  resultCard: {
    top: 378,
    left: 16,
    height: 218,
  },
  bgIcon: {
    left: 0,
    top: 0,
  },
  downloadPdf: {
    top: 10,
    left: 55,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  icPdfIcon: {
    width: 14,
    height: 18,
  },
  downloadButton: {
    top: 623,
    left: 79,
  },
  result: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Result;
