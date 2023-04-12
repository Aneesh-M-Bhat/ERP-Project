import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Events = () => {
  return (
    <View style={styles.events}>
      <Image
        style={[styles.backgroundIcon, styles.barsPosition]}
        resizeMode="cover"
        source={require("../assets/background2.png")}
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
        <Text style={styles.filter}>{`Events & Programs`}</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={styles.events1}>
        <View style={[styles.li, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg.png")}
          />
          <Text style={styles.sleepoverNight}>Sleepover Night</Text>
          <Text style={styles.jan210900Am}>06 Jan 21, 09:00 AM</Text>
          <Image
            style={styles.icTimeIcon}
            resizeMode="cover"
            source={require("../assets/ic-time1.png")}
          />
          <Text
            style={[
              styles.aSleepoverIsAGreatTreatF,
              styles.aprilIsAlsoPosition,
            ]}
          >{`A sleepover is a great treat for kids. Many schools use such an event as the culminating activity of the school year. `}</Text>
          <Image
            style={styles.dpIcon}
            resizeMode="cover"
            source={require("../assets/dp1.png")}
          />
        </View>
        <View style={[styles.li2, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg.png")}
          />
          <Text style={styles.sleepoverNight}>Fishing Tournament</Text>
          <Text style={styles.jan210900Am}>12 Jan 21, 09:00 AM</Text>
          <Image
            style={styles.icTimeIcon}
            resizeMode="cover"
            source={require("../assets/ic-time1.png")}
          />
          <Text
            style={[
              styles.silverSandsMiddleSchoolIn,
              styles.aprilIsAlsoPosition,
            ]}
          >
            Silver Sands Middle School in Port Orange, Florida, offers many
            special events, but one of the most unique ones is a springtime...
          </Text>
          <Image
            style={styles.dpIcon}
            resizeMode="cover"
            source={require("../assets/dp1.png")}
          />
        </View>
        <View style={[styles.li3, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg.png")}
          />
          <Text style={styles.sleepoverNight}>
            Rhyme Time: A Night of Poetry
          </Text>
          <Text style={styles.jan210900Am}>24 Jan 21, 09:00 AM</Text>
          <Image
            style={styles.icTimeIcon}
            resizeMode="cover"
            source={require("../assets/ic-time1.png")}
          />
          <Text style={[styles.aprilIsAlso, styles.aprilIsAlsoPosition]}>
            April is also National Poetry Month. Now there is a great theme for
            a fun family night! Combine poetry readings by students...
          </Text>
          <Image
            style={styles.dpIcon}
            resizeMode="cover"
            source={require("../assets/dp1.png")}
          />
        </View>
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
  liLayout: {
    height: 130,
    width: 343,
    left: 0,
    position: "absolute",
  },
  aprilIsAlsoPosition: {
    color: Color.gray_100,
    lineHeight: 16,
    left: 95,
    top: 64,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
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
    width: 168,
    height: 23,
    left: 16,
    position: "absolute",
  },
  li: {
    top: 0,
  },
  sleepoverNight: {
    top: 12,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.darkslategray_300,
    fontWeight: "600",
    left: 12,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  jan210900Am: {
    top: 41,
    left: 114,
    lineHeight: 19,
    color: Color.steelblue_100,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  icTimeIcon: {
    width: 0,
    height: 0,
  },
  aSleepoverIsAGreatTreatF: {
    width: 226,
  },
  dpIcon: {
    top: 42,
    width: 75,
    height: 75,
    left: 12,
    position: "absolute",
  },
  silverSandsMiddleSchoolIn: {
    width: 239,
  },
  li2: {
    top: 142,
  },
  aprilIsAlso: {
    width: 241,
  },
  li3: {
    top: 284,
  },
  events1: {
    top: 129,
    height: 414,
    width: 343,
    left: 16,
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
  events: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Events;
