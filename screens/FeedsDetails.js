import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FeedsDetails = () => {
  return (
    <View style={styles.feedsDetails}>
      <View style={styles.bg2Position}>
        <View style={[styles.bg2, styles.bg2Position]} />
        <View style={[styles.overlay, styles.bg2Position]} />
      </View>
      <View style={styles.bg3Position}>
        <View style={[styles.bg3, styles.bg3Position]} />
        <Image
          style={[styles.icBackIcon, styles.icBackIconPosition]}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
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
      <View style={[styles.detailsContents, styles.icBackIconPosition]}>
        <Text style={styles.training}>Rhyme Time: A Night of Poetry</Text>
        <Text
          style={[styles.aprilIsAlsoNationalPoetry, styles.jan210900AmTypo]}
        >
          April is also National Poetry Month. Now there is a great theme for a
          fun family night! Combine poetry readings by students and adults.
          Invite guest readers and poets. Sell a book of student poems as a
          fund-raiser. Display portfolios of students' best poetry. Present your
          oldest students in a poetry slam competition, like teacher Brenda Dyck
          staged with her students (see the Education World article, A Poetry
          Slam Cures Midwinter Blahs). For more ideas for great poetry writing
          activities, don't miss Education World's special Poetry Month archive.
        </Text>
        <Text style={[styles.jan210900Am, styles.jan210900AmTypo]}>
          12 Jan 21, 09:00 AM
        </Text>
        <Image
          style={styles.icTimeIcon}
          resizeMode="cover"
          source={require("../assets/ic-time.png")}
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
  bg2Position: {
    height: 320,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg3Position: {
    height: 90,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icBackIconPosition: {
    left: 16,
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
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jan210900AmTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  bg2: {
    backgroundColor: Color.white,
    height: 320,
  },
  overlay: {
    backgroundColor: Color.black,
    opacity: 0.21,
  },
  bg3: {
    backgroundColor: Color.gray_400,
  },
  icBackIcon: {
    top: 56,
    width: 12,
    height: 21,
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
    color: Color.white,
    textAlign: "left",
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
  training: {
    top: 28,
    fontSize: FontSize.size_base,
    lineHeight: 23,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    fontWeight: "600",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  aprilIsAlsoNationalPoetry: {
    top: 60,
    lineHeight: 22,
    color: Color.gray_100,
    width: 343,
    fontSize: FontSize.size_smi,
    left: 0,
  },
  jan210900Am: {
    left: 19,
    lineHeight: 19,
    color: Color.steelblue_100,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    top: 0,
  },
  icTimeIcon: {
    width: 13,
    height: 13,
  },
  detailsContents: {
    top: 338,
    height: 280,
    width: 343,
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
  feedsDetails: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default FeedsDetails;
