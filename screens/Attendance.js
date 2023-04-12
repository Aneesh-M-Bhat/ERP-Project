import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Attendance = () => {
  return (
    <View style={styles.attendance}>
      <Image
        style={[styles.backgroundIcon, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View style={[styles.barsStatusBarIphoneLight, styles.iconLayout3]}>
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
      <View style={[styles.navigationBar, styles.iconLayout2]}>
        <View style={[styles.tabs, styles.tabsLayout]}>
          <Image
            style={[styles.tabBgIcon, styles.tabsLayout]}
            resizeMode="cover"
            source={require("../assets/tab-bg1.png")}
          />
          <Image
            style={[styles.tabActiveIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/tab-active1.png")}
          />
          <Text style={[styles.attendance1, styles.holidayTypo]}>
            ATTENDANCE
          </Text>
          <Text style={[styles.holiday, styles.holidayTypo]}>HOLIDAY</Text>
        </View>
        <Image
          style={[styles.icBackIcon, styles.monthLayout]}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={[styles.absents, styles.iconLayout1]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/bg7.png")}
        />
        <Image
          style={[styles.bg2Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/bg23.png")}
        />
        <Text style={[styles.absent, styles.textTypo10]}>Absent</Text>
        <Image
          style={[styles.ellipse550Icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/ellipse-550.png")}
        />
        <Text style={[styles.text, styles.textTypo9]}>02</Text>
      </View>
      <View style={[styles.week, styles.iconLayout1]}>
        <Image
          style={[styles.bgIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/bg32.png")}
        />
        <Image
          style={[styles.bg2Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/bg42.png")}
        />
        <Text
          style={[styles.absent, styles.textTypo10]}
        >{`Festival  & Holidays`}</Text>
        <Image
          style={[styles.ellipse550Icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/ellipse-549.png")}
        />
        <Text style={[styles.text1, styles.textTypo9]}>01</Text>
      </View>
      <View style={styles.calendar}>
        <Image
          style={[styles.festivalActiveBgIcon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/festival-active-bg.png")}
        />
        <Image
          style={[styles.absentActiveBgIcon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/absent-active-bg.png")}
        />
        <Image
          style={[styles.absentActiveBg2Icon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/absent-active-bg.png")}
        />
        <Image
          style={[styles.sundayActiveIcon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/sunday-active.png")}
        />
        <Image
          style={[styles.sundayActive2Icon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/sunday-active21.png")}
        />
        <Image
          style={[styles.sundayActive3Icon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/sunday-active3.png")}
        />
        <Image
          style={[styles.sundayActive4Icon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/sunday-active21.png")}
        />
        <Image
          style={[styles.sundayActive5Icon, styles.sundayIconLayout]}
          resizeMode="cover"
          source={require("../assets/sunday-active21.png")}
        />
        <View style={styles.calender}>
          <Text style={[styles.text2, styles.textTypo8]}>31</Text>
          <Text style={[styles.text3, styles.textTypo10]}>1</Text>
          <Text style={[styles.text4, styles.textTypo8]}>30</Text>
          <Text style={[styles.text5, styles.textTypo8]}>29</Text>
          <Text style={[styles.text6, styles.textTypo8]}>28</Text>
          <Text style={[styles.text7, styles.textTypo8]}>27</Text>
          <Text style={[styles.text8, styles.textTypo8]}>26</Text>
          <Text style={[styles.text9, styles.textTypo7]}>25</Text>
          <Text style={[styles.text10, styles.textTypo7]}>24</Text>
          <Text style={[styles.text11, styles.textLayout]}>23</Text>
          <Text style={[styles.text12, styles.textTypo6]}>22</Text>
          <Text style={[styles.text13, styles.textTypo6]}>21</Text>
          <Text style={[styles.text14, styles.textTypo7]}>19</Text>
          <Text style={[styles.text15, styles.textTypo7]}>20</Text>
          <Text style={[styles.text16, styles.textTypo10]}>18</Text>
          <Text style={[styles.text17, styles.textTypo5]}>17</Text>
          <Text style={[styles.text18, styles.textTypo5]}>16</Text>
          <Text style={[styles.text19, styles.textTypo5]}>15</Text>
          <Text style={[styles.text20, styles.textTypo5]}>14</Text>
          <Text style={[styles.text21, styles.textTypo5]}>13</Text>
          <Text style={[styles.text22, styles.textTypo5]}>12</Text>
          <Text style={[styles.text23, styles.textTypo4]}>11</Text>
          <Text style={[styles.text24, styles.textTypo4]}>10</Text>
          <Text style={[styles.text25, styles.textTypo3]}>9</Text>
          <Text style={[styles.text26, styles.textTypo3]}>8</Text>
          <Text style={[styles.text27, styles.textTypo4]}>7</Text>
          <Text style={[styles.text28, styles.textTypo3]}>6</Text>
          <Text style={[styles.text29, styles.textTypo4]}>5</Text>
          <Text style={[styles.text30, styles.textTypo2]}>4</Text>
          <Text style={[styles.text31, styles.textTypo2]}>3</Text>
          <Text style={[styles.text32, styles.textTypo1]}>2</Text>
          <Text style={[styles.text33, styles.textTypo1]}>1</Text>
          <Text style={styles.text34}>31</Text>
          <Text style={[styles.text35, styles.textTypo]}>30</Text>
          <Text style={[styles.text36, styles.textTypo]}>29</Text>
          <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
          <Text style={[styles.tu, styles.moTypo]}>Tu</Text>
          <Text style={[styles.we, styles.moTypo]}>We</Text>
          <Text style={[styles.th, styles.moTypo]}>Th</Text>
          <Text style={[styles.fr, styles.moTypo]}>Fr</Text>
          <Text style={[styles.sa, styles.moTypo]}>Sa</Text>
          <Text style={[styles.su, styles.moTypo]}>Su</Text>
        </View>
      </View>
      <View style={[styles.month, styles.monthLayout]}>
        <Text style={[styles.march2019, styles.holidayTypo]}>
          NOVEMBER 2020
        </Text>
        <Image
          style={[styles.icLeftIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ic-left.png")}
        />
        <Image
          style={[styles.icRightIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/ic-right1.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout3: {
    width: 375,
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
  iconLayout2: {
    height: 28,
    position: "absolute",
  },
  tabsLayout: {
    width: 178,
    height: 28,
    top: 0,
    position: "absolute",
  },
  holidayTypo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  monthLayout: {
    height: 21,
    position: "absolute",
  },
  iconLayout1: {
    height: 47,
    position: "absolute",
  },
  textTypo10: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo9: {
    top: 15,
    left: 311,
    fontFamily: FontFamily.openSans,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  sundayIconLayout: {
    height: 32,
    width: 32,
    position: "absolute",
  },
  textTypo8: {
    top: 261,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo7: {
    top: 207,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 20,
    fontWeight: "600",
    color: Color.white,
  },
  textTypo6: {
    top: 206,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  textTypo5: {
    top: 151,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo4: {
    top: 95,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo3: {
    top: 94,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    top: 42,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo1: {
    top: 44,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo: {
    top: 45,
    opacity: 0.5,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  moTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 8,
    top: 4,
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
    left: 0,
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
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.white,
    lineHeight: 18,
    fontSize: FontSize.size_mini,
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
    left: 0,
    top: 0,
  },
  tabBgIcon: {
    left: 0,
  },
  tabActiveIcon: {
    width: 101,
    left: 0,
    top: 0,
  },
  attendance1: {
    left: 13,
    color: Color.steelblue_200,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xsi,
    top: 5,
    fontFamily: FontFamily.openSans,
  },
  holiday: {
    left: 112,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xsi,
    top: 5,
    fontFamily: FontFamily.openSans,
    color: Color.white,
  },
  tabs: {
    left: 83,
  },
  icBackIcon: {
    width: 12,
    top: 4,
    height: 21,
    left: 0,
  },
  navigationBar: {
    top: 52,
    width: 261,
    left: 16,
  },
  bgIcon: {
    width: 343,
    left: 0,
    top: 0,
  },
  bg2Icon: {
    width: 16,
    left: 0,
    top: 0,
  },
  absent: {
    top: 13,
    left: 28,
    color: Color.gray_200,
  },
  ellipse550Icon: {
    top: 9,
    left: 304,
    width: 28,
  },
  text: {
    color: "#e92020",
    left: 311,
  },
  absents: {
    top: 506,
    width: 343,
    left: 16,
  },
  text1: {
    color: "#0bac00",
    left: 311,
  },
  week: {
    top: 567,
    width: 343,
    left: 16,
  },
  festivalActiveBgIcon: {
    left: 46,
    top: 199,
    width: 32,
  },
  absentActiveBgIcon: {
    top: 88,
    left: 155,
  },
  absentActiveBg2Icon: {
    left: 205,
    top: 199,
    width: 32,
  },
  sundayActiveIcon: {
    top: 253,
    left: 311,
  },
  sundayActive2Icon: {
    top: 199,
    width: 32,
    left: 311,
  },
  sundayActive3Icon: {
    top: 147,
    left: 311,
  },
  sundayActive4Icon: {
    top: 87,
    left: 311,
  },
  sundayActive5Icon: {
    top: 35,
    left: 311,
  },
  text2: {
    color: Color.darkslategray_300,
    left: 268,
  },
  text3: {
    top: 259,
    left: 324,
    color: Color.darkslategray_300,
  },
  text4: {
    left: 214,
    color: Color.darkslategray_300,
  },
  text5: {
    left: 163,
    color: Color.darkslategray_300,
  },
  text6: {
    left: 109,
    color: Color.darkslategray_300,
  },
  text7: {
    left: 55,
    color: Color.darkslategray_300,
  },
  text8: {
    left: 3,
    color: Color.darkslategray_300,
  },
  text9: {
    left: 320,
    color: Color.darkslategray_300,
  },
  text10: {
    color: Color.darkslategray_300,
    left: 268,
  },
  text11: {
    fontWeight: "600",
    top: 206,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
    left: 214,
  },
  text12: {
    left: 163,
    color: Color.darkslategray_300,
    lineHeight: 18,
  },
  text13: {
    left: 109,
    color: Color.darkslategray_300,
    lineHeight: 18,
  },
  text14: {
    left: 3,
    color: Color.darkslategray_300,
  },
  text15: {
    left: 55,
    color: Color.white,
  },
  text16: {
    top: 152,
    left: 320,
    color: Color.darkslategray_300,
  },
  text17: {
    left: 268,
  },
  text18: {
    left: 214,
  },
  text19: {
    left: 163,
  },
  text20: {
    left: 109,
  },
  text21: {
    left: 55,
  },
  text22: {
    left: 3,
  },
  text23: {
    left: 320,
  },
  text24: {
    left: 268,
  },
  text25: {
    left: 218,
    color: Color.darkslategray_300,
    lineHeight: 18,
  },
  text26: {
    left: 167,
    fontWeight: "600",
    lineHeight: 20,
    color: Color.white,
  },
  text27: {
    left: 112,
  },
  text28: {
    left: 59,
    color: Color.darkslategray_300,
    lineHeight: 18,
  },
  text29: {
    left: 6,
  },
  text30: {
    left: 323,
  },
  text31: {
    left: 272,
  },
  text32: {
    left: 218,
  },
  text33: {
    left: 167,
  },
  text34: {
    opacity: 0.5,
    top: 44,
    left: 109,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  text35: {
    left: 55,
  },
  text36: {
    left: 3,
  },
  mo: {
    top: 1,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  tu: {
    left: 55,
    top: 0,
  },
  we: {
    left: 104,
    top: 1,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
  },
  th: {
    left: 162,
    top: 0,
  },
  fr: {
    left: 215,
    top: 0,
  },
  sa: {
    left: 267,
    top: 0,
  },
  su: {
    left: 320,
    top: 0,
  },
  calender: {
    width: 334,
    height: 279,
    left: 0,
    top: 0,
    position: "absolute",
  },
  calendar: {
    top: 196,
    height: 285,
    width: 343,
    left: 16,
    position: "absolute",
  },
  march2019: {
    left: 115,
    lineHeight: 21,
    fontWeight: "600",
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    fontSize: FontSize.size_mini,
    top: 0,
  },
  icLeftIcon: {
    left: 0,
  },
  icRightIcon: {
    left: 332,
  },
  month: {
    top: 142,
    left: 19,
    width: 340,
  },
  vectorIcon: {
    top: 680,
    left: 1,
    height: 132,
  },
  attendance: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Attendance;
