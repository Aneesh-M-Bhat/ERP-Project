import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Timetable = () => {
  return (
    <View style={styles.timetable}>
      <Image
        style={[styles.backgroundIcon, styles.barsPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
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
        <Text style={styles.filter}>Timetable</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={styles.timetable1}>
        <View style={[styles.li, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg2.png")}
          />
          <Text style={styles.computerScience}>Computer Science</Text>
          <Text style={styles.am900am}>08:15am - 9:00am</Text>
          <View style={styles.border} />
          <Text style={styles.cheriseJames}>Cherise James</Text>
          <Text style={[styles.period1, styles.period1Typo]}>Period 1</Text>
        </View>
        <View style={[styles.li2, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg21.png")}
          />
          <Text style={styles.computerScience}>English</Text>
          <Text style={styles.am900am}>09:45am - 10:30am</Text>
          <View style={styles.border} />
          <Text style={styles.cheriseJames}>Marta Magana</Text>
          <Text style={[styles.period1, styles.period1Typo]}>Period 3</Text>
        </View>
        <View style={[styles.li3, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg21.png")}
          />
          <Text style={styles.computerScience}>Science</Text>
          <Text style={styles.am900am}>11:00am - 11:45am</Text>
          <View style={styles.border} />
          <Text style={styles.cheriseJames}>Danica Partridge</Text>
          <Text style={[styles.period1, styles.period1Typo]}>Period 4</Text>
        </View>
        <View style={[styles.li4, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg21.png")}
          />
          <Text style={styles.computerScience}>{`Mathematics `}</Text>
          <Text style={styles.am900am}>09:00am - 09:45am</Text>
          <View style={styles.border} />
          <Text style={styles.cheriseJames}>Rivka Steadman</Text>
          <Text style={[styles.period1, styles.period1Typo]}>Period 2</Text>
        </View>
        <View style={[styles.li5, styles.li5Layout]}>
          <Image
            style={[styles.cardBg5Icon, styles.li5Layout]}
            resizeMode="cover"
            source={require("../assets/card-bg5.png")}
          />
          <Text style={styles.computerScience}>Lunch Break</Text>
          <Text style={styles.am900am}>10:30am - 11:00am</Text>
          <Image
            style={[styles.lunchBreak2Icon, styles.english2Position]}
            resizeMode="cover"
            source={require("../assets/lunch-break2.png")}
          />
        </View>
        <View style={[styles.li6, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg21.png")}
          />
          <Text style={styles.computerScience}>Social Study</Text>
          <Text style={styles.am900am}>11:45am - 12:30pm</Text>
          <View style={styles.border} />
          <Text style={styles.cheriseJames}>Cherise James</Text>
          <Text style={[styles.english2, styles.english2Position]}>
            English
          </Text>
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
      <View style={[styles.tabsWeeks, styles.tabIconLayout]}>
        <Image
          style={[styles.tabBgIcon, styles.tabIconLayout]}
          resizeMode="cover"
          source={require("../assets/tab-bg.png")}
        />
        <Image
          style={[styles.tabBgActiveIcon, styles.tabIconLayout]}
          resizeMode="cover"
          source={require("../assets/tab-bg-active.png")}
        />
        <Text style={[styles.tue, styles.tueTypo]}>TUE WED THU FRI SAT</Text>
        <Text style={[styles.mon, styles.tueTypo]}> MON</Text>
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
    height: 110,
    width: 343,
    left: 0,
    position: "absolute",
  },
  period1Typo: {
    color: Color.darkslategray_100,
    top: 82,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
  },
  li5Layout: {
    height: 77,
    width: 343,
    left: 0,
    position: "absolute",
  },
  english2Position: {
    left: 284,
    position: "absolute",
  },
  tabIconLayout: {
    height: 28,
    position: "absolute",
  },
  tueTypo: {
    lineHeight: 19,
    fontSize: FontSize.size_smi,
    top: 5,
    fontWeight: "600",
    fontFamily: FontFamily.openSans,
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
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.white,
    lineHeight: 18,
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
    width: 104,
    height: 23,
    left: 16,
    position: "absolute",
  },
  li: {
    top: 0,
  },
  computerScience: {
    top: 13,
    color: Color.darkslategray_300,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    left: 15,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  am900am: {
    top: 41,
    color: Color.gray_100,
    fontSize: FontSize.size_sm,
    left: 15,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  border: {
    top: 73,
    backgroundColor: Color.gainsboro_200,
    width: 313,
    height: 1,
    left: 15,
    position: "absolute",
  },
  cheriseJames: {
    top: 82,
    color: Color.gray_100,
    fontSize: FontSize.size_sm,
    left: 15,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  period1: {
    left: 278,
    position: "absolute",
  },
  li2: {
    top: 244,
  },
  li3: {
    top: 455,
  },
  li4: {
    top: 122,
  },
  cardBg5Icon: {
    top: 0,
  },
  lunchBreak2Icon: {
    top: 18,
    width: 38,
    height: 39,
  },
  li5: {
    top: 366,
  },
  english2: {
    color: Color.darkslategray_100,
    top: 82,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
  },
  li6: {
    top: 577,
  },
  timetable1: {
    top: 178,
    height: 687,
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
    top: 796,
    height: 16,
  },
  tabBgIcon: {
    width: 343,
    left: 0,
    top: 0,
  },
  tabBgActiveIcon: {
    width: 77,
    left: 0,
    top: 0,
  },
  tue: {
    left: 90,
    color: Color.black,
    width: 243,
    textAlign: "left",
  },
  mon: {
    left: 12,
    textAlign: "center",
    width: 52,
    color: Color.white,
  },
  tabsWeeks: {
    top: 137,
    width: 343,
    left: 16,
  },
  timetable: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Timetable;
