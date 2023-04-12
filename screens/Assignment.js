import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Assignment = () => {
  return (
    <View style={styles.assignment}>
      <Image
        style={[styles.backgroundIcon, styles.barsPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
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
        <Text style={styles.filter}>Assignment</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={styles.assignment1}>
        <View style={[styles.li, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg3.png")}
          />
          <Text style={[styles.surfaceAreasAndVolumes, styles.mathematicsTypo]}>
            Surface Areas and Volumes
          </Text>
          <Text style={[styles.assignDate, styles.dateTypo]}>Assign Date</Text>
          <Text style={[styles.lastSubmissionDate, styles.dateTypo]}>
            Last Submission Date
          </Text>
          <Text style={[styles.nov20, styles.nov20Typo]}>10 Nov 20</Text>
          <Text style={[styles.dec20, styles.nov20Typo]}>10 Dec 20</Text>
          <Image
            style={[styles.subjectBgIcon, styles.subjectIconPosition]}
            resizeMode="cover"
            source={require("../assets/subject-bg.png")}
          />
          <Text style={[styles.mathematics, styles.mathematicsTypo]}>
            Mathematics
          </Text>
          <View style={[styles.button, styles.buttonLayout]}>
            <Image
              style={[styles.bgIcon, styles.buttonLayout]}
              resizeMode="cover"
              source={require("../assets/bg5.png")}
            />
            <Text style={[styles.toBeSubmitted, styles.mathematicsTypo]}>
              TO BE SUBMITTED
            </Text>
          </View>
        </View>
        <View style={[styles.li2, styles.li2Layout]}>
          <Image
            style={[styles.cardBgIcon1, styles.li2Layout]}
            resizeMode="cover"
            source={require("../assets/card-bg4.png")}
          />
          <Text style={[styles.surfaceAreasAndVolumes, styles.mathematicsTypo]}>
            My Bestfriend Essay
          </Text>
          <Text style={[styles.assignDate, styles.dateTypo]}>Assign Date</Text>
          <Text style={[styles.lastSubmissionDate, styles.dateTypo]}>
            Last Submission Date
          </Text>
          <Text style={[styles.sep20, styles.sepTypo]}>10 Sep 20</Text>
          <Text style={[styles.sep201, styles.sepTypo]}>30 Sep 20</Text>
          <Image
            style={[styles.subjectBgIcon1, styles.subjectIconPosition]}
            resizeMode="cover"
            source={require("../assets/subject-bg1.png")}
          />
          <Text style={[styles.mathematics, styles.mathematicsTypo]}>
            English
          </Text>
        </View>
        <View style={[styles.li3, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg6.png")}
          />
          <Text style={[styles.surfaceAreasAndVolumes, styles.mathematicsTypo]}>
            Structure of Atoms
          </Text>
          <Text style={[styles.assignDate, styles.dateTypo]}>Assign Date</Text>
          <Text style={[styles.lastSubmissionDate, styles.dateTypo]}>
            Last Submission Date
          </Text>
          <Text style={[styles.oct20, styles.octTypo]}>10 Oct 20</Text>
          <Text style={[styles.oct201, styles.octTypo]}>30 Oct 20</Text>
          <Image
            style={[styles.subjectBgIcon1, styles.subjectIconPosition]}
            resizeMode="cover"
            source={require("../assets/subject-bg1.png")}
          />
          <Text style={[styles.mathematics, styles.mathematicsTypo]}>
            Science
          </Text>
          <View style={[styles.button, styles.buttonLayout]}>
            <Image
              style={[styles.bgIcon, styles.buttonLayout]}
              resizeMode="cover"
              source={require("../assets/bg21.png")}
            />
            <Text style={[styles.toBeSubmitted, styles.mathematicsTypo]}>
              TO BE SUBMITTED
            </Text>
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
  liLayout: {
    height: 186,
    width: 343,
    left: 0,
    position: "absolute",
  },
  mathematicsTypo: {
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  dateTypo: {
    color: Color.gray_100,
    fontSize: FontSize.size_sm,
    left: 15,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  nov20Typo: {
    color: Color.darkslategray_100,
    left: 270,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  subjectIconPosition: {
    top: 13,
    left: 15,
    height: 23,
    position: "absolute",
  },
  buttonLayout: {
    height: 39,
    width: 313,
    position: "absolute",
  },
  li2Layout: {
    height: 135,
    width: 343,
    left: 0,
    position: "absolute",
  },
  sepTypo: {
    left: 271,
    color: Color.darkslategray_100,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  octTypo: {
    left: 273,
    color: Color.darkslategray_100,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
    top: 0,
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
    top: 796,
    height: 16,
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
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    lineHeight: 18,
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
    textAlign: "left",
    color: Color.white,
    top: 0,
    position: "absolute",
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
    width: 116,
    height: 23,
    left: 16,
    position: "absolute",
  },
  li: {
    top: 0,
  },
  surfaceAreasAndVolumes: {
    top: 44,
    color: Color.darkslategray_300,
    left: 15,
  },
  assignDate: {
    top: 72,
  },
  lastSubmissionDate: {
    top: 100,
  },
  nov20: {
    top: 72,
  },
  dec20: {
    top: 100,
  },
  subjectBgIcon: {
    width: 98,
  },
  mathematics: {
    top: 15,
    left: 25,
    color: Color.steelblue_100,
  },
  bgIcon: {
    left: 0,
    top: 0,
  },
  toBeSubmitted: {
    top: 10,
    left: 101,
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  button: {
    top: 132,
    left: 15,
  },
  cardBgIcon1: {
    top: 0,
  },
  sep20: {
    top: 70,
  },
  sep201: {
    top: 98,
  },
  subjectBgIcon1: {
    width: 66,
  },
  li2: {
    top: 396,
  },
  oct20: {
    top: 72,
  },
  oct201: {
    top: 100,
  },
  li3: {
    top: 198,
  },
  assignment1: {
    top: 129,
    height: 531,
    width: 343,
    left: 16,
    position: "absolute",
  },
  assignment: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Assignment;
