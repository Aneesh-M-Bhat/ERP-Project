import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Holiday = () => {
  return (
    <View style={styles.holiday}>
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
      <View style={[styles.navigationBar, styles.navigationBarLayout]}>
        <View style={[styles.tabs, styles.tabsLayout]}>
          <Image
            style={[styles.tabBgIcon, styles.tabsLayout]}
            resizeMode="cover"
            source={require("../assets/tab-bg1.png")}
          />
          <Image
            style={[styles.tabActiveIcon, styles.navigationBarLayout]}
            resizeMode="cover"
            source={require("../assets/tab-active.png")}
          />
          <Text style={[styles.attendance, styles.holiday1Typo]}>
            ATTENDANCE
          </Text>
          <Text style={[styles.holiday1, styles.holiday1Typo]}>HOLIDAY</Text>
        </View>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={[styles.month, styles.monthLayout]}>
        <Text style={[styles.march2019, styles.holiday1Typo]}>
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
      <View style={[styles.calendar, styles.monthLayout]}>
        <Image
          style={[styles.festivalActiveBgIcon, styles.festivalIconLayout]}
          resizeMode="cover"
          source={require("../assets/festival-active-bg.png")}
        />
        <Image
          style={[styles.festivalActiveBg2Icon, styles.festivalIconLayout]}
          resizeMode="cover"
          source={require("../assets/festival-active-bg.png")}
        />
        <Image
          style={[styles.festivalActiveBg3Icon, styles.festivalIconLayout]}
          resizeMode="cover"
          source={require("../assets/festival-active-bg.png")}
        />
        <Image
          style={[styles.sundayActiveIcon, styles.sundayIconPosition]}
          resizeMode="cover"
          source={require("../assets/sunday-active.png")}
        />
        <Image
          style={[styles.sundayActive2Icon, styles.sundayIconPosition]}
          resizeMode="cover"
          source={require("../assets/sunday-active2.png")}
        />
        <Image
          style={[styles.sundayActive3Icon, styles.sundayIconPosition]}
          resizeMode="cover"
          source={require("../assets/sunday-active3.png")}
        />
        <Image
          style={[styles.sundayActive4Icon, styles.sundayIconPosition]}
          resizeMode="cover"
          source={require("../assets/sunday-active4.png")}
        />
        <Image
          style={[styles.sundayActive5Icon, styles.sundayIconPosition]}
          resizeMode="cover"
          source={require("../assets/sunday-active5.png")}
        />
        <View style={styles.calender}>
          <Text style={[styles.text, styles.textTypo8]}>31</Text>
          <Text style={[styles.text1, styles.textTypo8]}>1</Text>
          <Text style={[styles.text2, styles.textTypo8]}>30</Text>
          <Text style={[styles.text3, styles.textTypo8]}>29</Text>
          <Text style={[styles.text4, styles.textTypo8]}>28</Text>
          <Text style={[styles.text5, styles.textTypo8]}>27</Text>
          <Text style={[styles.text6, styles.textTypo8]}>26</Text>
          <Text style={[styles.text7, styles.textTypo7]}>25</Text>
          <Text style={[styles.text8, styles.textTypo7]}>24</Text>
          <Text style={[styles.text9, styles.textTypo7]}>23</Text>
          <Text style={[styles.text10, styles.textTypo6]}>22</Text>
          <Text style={[styles.text11, styles.textTypo6]}>21</Text>
          <Text style={[styles.text12, styles.textTypo7]}>19</Text>
          <Text style={[styles.text13, styles.textTypo7]}>20</Text>
          <Text style={[styles.text14, styles.textTypo8]}>18</Text>
          <Text style={[styles.text15, styles.textTypo5]}>17</Text>
          <Text style={[styles.text16, styles.textTypo5]}>16</Text>
          <Text style={[styles.text17, styles.textTypo5]}>15</Text>
          <Text style={[styles.text18, styles.textTypo5]}>14</Text>
          <Text style={[styles.text19, styles.textTypo5]}>13</Text>
          <Text style={[styles.text20, styles.textTypo5]}>12</Text>
          <Text style={[styles.text21, styles.textTypo4]}>11</Text>
          <Text style={[styles.text22, styles.textTypo4]}>10</Text>
          <Text style={[styles.text23, styles.textTypo3]}>9</Text>
          <Text style={[styles.text24, styles.textTypo3]}>8</Text>
          <Text style={[styles.text25, styles.textTypo4]}>7</Text>
          <Text style={[styles.text26, styles.textTypo3]}>6</Text>
          <Text style={[styles.text27, styles.textTypo4]}>5</Text>
          <Text style={[styles.text28, styles.textTypo2]}>4</Text>
          <Text style={[styles.text29, styles.textTypo2]}>3</Text>
          <Text style={[styles.text30, styles.textTypo1]}>2</Text>
          <Text style={[styles.text31, styles.textTypo1]}>1</Text>
          <Text style={styles.text32}>31</Text>
          <Text style={[styles.text33, styles.textTypo]}>30</Text>
          <Text style={[styles.text34, styles.textTypo]}>29</Text>
          <Text style={[styles.mo, styles.moTypo]}>Mo</Text>
          <Text style={[styles.tu, styles.moTypo]}>Tu</Text>
          <Text style={[styles.we, styles.moTypo]}>We</Text>
          <Text style={[styles.th, styles.moTypo]}>Th</Text>
          <Text style={[styles.fr, styles.moTypo]}>Fr</Text>
          <Text style={[styles.sa, styles.moTypo]}>Sa</Text>
          <Text style={[styles.su, styles.moTypo]}>Su</Text>
        </View>
      </View>
      <Text style={[styles.listOfHoliday, styles.diwaliTypo]}>
        List of Holiday
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.festivalList, styles.monthLayout]}>
        <View style={[styles.li, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg8.png")}
          />
          <Text style={[styles.thNovember, styles.sundayTypo]}>
            14th November
          </Text>
          <Text style={[styles.saturday, styles.sundayTypo]}>Saturday</Text>
          <Text style={[styles.diwali, styles.diwaliTypo]}>Diwali</Text>
        </View>
        <View style={[styles.li2, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg8.png")}
          />
          <Text style={[styles.thNovember, styles.sundayTypo]}>
            15th November
          </Text>
          <Text style={[styles.sunday, styles.sundayTypo]}>Sunday</Text>
          <Text style={[styles.diwali, styles.diwaliTypo]}>Govardhan Puja</Text>
        </View>
        <View style={[styles.li3, styles.liLayout]}>
          <Image
            style={[styles.li, styles.liLayout]}
            resizeMode="cover"
            source={require("../assets/card-bg8.png")}
          />
          <Text style={[styles.thNovember, styles.sundayTypo]}>
            16th November
          </Text>
          <Text style={[styles.sunday, styles.sundayTypo]}>Monday</Text>
          <Text style={[styles.diwali, styles.diwaliTypo]}>Bhaiya Dooj </Text>
        </View>
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
  navigationBarLayout: {
    height: 28,
    position: "absolute",
  },
  tabsLayout: {
    width: 178,
    height: 28,
    top: 0,
    position: "absolute",
  },
  holiday1Typo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  monthLayout: {
    width: 343,
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 8,
    top: 4,
    position: "absolute",
  },
  festivalIconLayout: {
    height: 32,
    width: 32,
    top: 145,
    position: "absolute",
  },
  sundayIconPosition: {
    left: 311,
    height: 32,
    width: 32,
    position: "absolute",
  },
  textTypo8: {
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo7: {
    top: 207,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  textTypo6: {
    top: 206,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo5: {
    top: 151,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  textTypo4: {
    top: 95,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo3: {
    top: 94,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    top: 42,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo1: {
    top: 44,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  textTypo: {
    top: 45,
    opacity: 0.5,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
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
  diwaliTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  liLayout: {
    height: 80,
    width: 343,
    left: 0,
    position: "absolute",
  },
  sundayTypo: {
    color: Color.gray_100,
    top: 45,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
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
    top: 0,
  },
  tabBgIcon: {
    left: 0,
  },
  tabActiveIcon: {
    left: 95,
    width: 83,
    top: 0,
  },
  attendance: {
    left: 13,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xsi,
    top: 5,
    fontFamily: FontFamily.openSans,
    color: Color.white,
  },
  holiday1: {
    color: Color.steelblue_200,
    left: 112,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xsi,
    top: 5,
    fontFamily: FontFamily.openSans,
  },
  tabs: {
    left: 83,
  },
  icBackIcon: {
    width: 12,
    height: 21,
    top: 4,
    left: 0,
    position: "absolute",
  },
  navigationBar: {
    top: 52,
    width: 261,
    left: 16,
  },
  march2019: {
    left: 118,
    lineHeight: 21,
    color: Color.darkslategray_300,
    fontWeight: "600",
    fontFamily: FontFamily.openSans,
    fontSize: FontSize.size_mini,
    top: 0,
  },
  icLeftIcon: {
    left: 0,
  },
  icRightIcon: {
    left: 335,
  },
  month: {
    top: 142,
    height: 21,
    left: 16,
  },
  festivalActiveBgIcon: {
    left: 101,
  },
  festivalActiveBg2Icon: {
    left: 155,
  },
  festivalActiveBg3Icon: {
    left: 205,
  },
  sundayActiveIcon: {
    top: 253,
  },
  sundayActive2Icon: {
    top: 201,
  },
  sundayActive3Icon: {
    top: 147,
  },
  sundayActive4Icon: {
    top: 88,
  },
  sundayActive5Icon: {
    top: 37,
  },
  text: {
    left: 268,
    top: 261,
    fontSize: FontSize.size_sm,
  },
  text1: {
    top: 259,
    left: 324,
  },
  text2: {
    left: 214,
    top: 261,
    fontSize: FontSize.size_sm,
  },
  text3: {
    left: 163,
    top: 261,
    fontSize: FontSize.size_sm,
  },
  text4: {
    left: 109,
    top: 261,
    fontSize: FontSize.size_sm,
  },
  text5: {
    left: 55,
    top: 261,
    fontSize: FontSize.size_sm,
  },
  text6: {
    left: 3,
    top: 261,
    fontSize: FontSize.size_sm,
  },
  text7: {
    left: 320,
    lineHeight: 18,
  },
  text8: {
    left: 268,
    lineHeight: 18,
  },
  text9: {
    lineHeight: 20,
    left: 214,
    fontWeight: "600",
  },
  text10: {
    left: 163,
  },
  text11: {
    left: 109,
  },
  text12: {
    left: 3,
    lineHeight: 18,
  },
  text13: {
    left: 55,
    lineHeight: 18,
  },
  text14: {
    top: 152,
    left: 320,
  },
  text15: {
    left: 268,
    color: Color.darkslategray_300,
    lineHeight: 18,
  },
  text16: {
    lineHeight: 20,
    left: 214,
    fontWeight: "600",
    color: Color.white,
  },
  text17: {
    lineHeight: 20,
    left: 163,
    fontWeight: "600",
    color: Color.white,
  },
  text18: {
    lineHeight: 20,
    left: 109,
    fontWeight: "600",
    color: Color.white,
  },
  text19: {
    left: 55,
    color: Color.darkslategray_300,
    lineHeight: 18,
  },
  text20: {
    left: 3,
    color: Color.darkslategray_300,
    lineHeight: 18,
  },
  text21: {
    left: 320,
  },
  text22: {
    left: 268,
  },
  text23: {
    left: 218,
    lineHeight: 18,
  },
  text24: {
    left: 167,
    lineHeight: 20,
    fontWeight: "600",
  },
  text25: {
    left: 112,
  },
  text26: {
    left: 59,
    lineHeight: 18,
  },
  text27: {
    left: 6,
  },
  text28: {
    left: 323,
  },
  text29: {
    left: 272,
  },
  text30: {
    left: 218,
  },
  text31: {
    left: 167,
  },
  text32: {
    opacity: 0.5,
    top: 44,
    left: 109,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  text33: {
    left: 55,
  },
  text34: {
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
    left: 17,
    height: 285,
  },
  listOfHoliday: {
    top: 505,
    color: Color.black,
    lineHeight: 20,
    left: 16,
  },
  vectorIcon: {
    top: 681,
    height: 132,
  },
  li: {
    top: 0,
  },
  thNovember: {
    left: 15,
  },
  saturday: {
    left: 272,
  },
  diwali: {
    top: 13,
    lineHeight: 23,
    color: Color.darkslategray_100,
    left: 15,
    fontWeight: "600",
  },
  sunday: {
    left: 281,
  },
  li2: {
    top: 92,
  },
  li3: {
    top: 184,
  },
  festivalList: {
    top: 539,
    height: 264,
    left: 16,
  },
  holiday: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Holiday;
