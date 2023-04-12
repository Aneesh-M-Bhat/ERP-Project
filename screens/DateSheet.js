import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const DateSheet = () => {
  return (
    <View style={styles.dateSheet}>
      <Image
        style={[styles.backgroundIcon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View style={[styles.barsStatusBarIphoneLight, styles.iconPosition1]}>
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
        <Text style={styles.filter}>Datesheet</Text>
        <Image
          style={styles.icBackIcon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={[styles.datesheet, styles.datesheetLayout]}>
        <View style={[styles.calendarLi, styles.datesheetLayout]}>
          <Text style={[styles.jan, styles.janTypo]}>JAN</Text>
          <Text style={[styles.text, styles.textTypo]}>11</Text>
          <Text style={[styles.pauljamesonWorkco, styles.pauljamesonTypo]}>
            Science
          </Text>
          <View style={[styles.border, styles.borderLayout]} />
          <View style={[styles.border2, styles.borderLayout]} />
          <Text style={[styles.inputTitleCopy, styles.inputTypo]}>Monday</Text>
          <Text style={[styles.am, styles.amTypo]}>09:00 AM</Text>
          {/* <Image
            style={styles.icTimeIcon}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          /> */}
          <Image
            style={[styles.icTime2Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          />
        </View>
        <View style={[styles.calendarLi2, styles.calendarLayout]}>
          <Text style={[styles.jan2, styles.janTypo]}>JAN</Text>
          <Text style={[styles.text1, styles.textTypo]}>13</Text>
          <Text style={[styles.pauljamesonWorkco2, styles.pauljamesonTypo]}>
            English
          </Text>
          <View style={[styles.border1, styles.borderLayout]} />
          <Text style={[styles.inputTitleCopy2, styles.inputTypo]}>
            Wednesday
          </Text>
          <Text style={[styles.am2, styles.amTypo]}>09:00 AM</Text>
          <Image
            style={[styles.icTime4Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          />
        </View>
        <View style={[styles.calendarLi3, styles.calendarLayout]}>
          <Text style={[styles.jan2, styles.janTypo]}>JAN</Text>
          <Text style={[styles.text1, styles.textTypo]}>20</Text>
          <Text style={[styles.pauljamesonWorkco2, styles.pauljamesonTypo]}>
            Social Study
          </Text>
          <View style={[styles.border1, styles.borderLayout]} />
          <Text style={[styles.inputTitleCopy2, styles.inputTypo]}>
            Wednesday
          </Text>
          <Text style={[styles.am2, styles.amTypo]}>09:00 AM</Text>
          <Image
            style={[styles.icTime4Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          />
        </View>
        <View style={[styles.calendarLi4, styles.calendarLayout]}>
          <Text style={[styles.jan2, styles.janTypo]}>JAN</Text>
          <Text style={[styles.text1, styles.textTypo]}>15</Text>
          <Text style={[styles.pauljamesonWorkco2, styles.pauljamesonTypo]}>
            Hindi
          </Text>
          <View style={[styles.border1, styles.borderLayout]} />
          <Text style={[styles.inputTitleCopy2, styles.inputTypo]}>Friday</Text>
          <Text style={[styles.am2, styles.amTypo]}>09:00 AM</Text>
          <Image
            style={[styles.icTime4Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          />
        </View>
        <View style={[styles.calendarLi5, styles.calendarLayout]}>
          <Text style={[styles.jan2, styles.janTypo]}>JAN</Text>
          <Text style={[styles.text1, styles.textTypo]}>22</Text>
          <Text style={[styles.pauljamesonWorkco2, styles.pauljamesonTypo]}>
            Drawing
          </Text>
          <View style={[styles.border1, styles.borderLayout]} />
          <Text style={[styles.inputTitleCopy2, styles.inputTypo]}>Friday</Text>
          <Text style={[styles.am2, styles.amTypo]}>09:00 AM</Text>
          <Image
            style={[styles.icTime4Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          />
        </View>
        <View style={[styles.calendarLi6, styles.calendarLayout]}>
          <Text style={[styles.jan2, styles.janTypo]}>JAN</Text>
          <Text style={[styles.text1, styles.textTypo]}>18</Text>
          <Text style={[styles.pauljamesonWorkco2, styles.pauljamesonTypo]}>
            Math
          </Text>
          <View style={[styles.border1, styles.borderLayout]} />
          <Text style={[styles.inputTitleCopy2, styles.inputTypo]}>Monday</Text>
          <Text style={[styles.am2, styles.amTypo]}>09:00 AM</Text>
          <Image
            style={[styles.icTime4Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          />
        </View>
        <View style={[styles.calendarLi7, styles.calendarLayout]}>
          <Text style={[styles.jan2, styles.janTypo]}>JAN</Text>
          <Text style={[styles.text1, styles.textTypo]}>25</Text>
          <Text style={[styles.pauljamesonWorkco2, styles.pauljamesonTypo]}>
            Computer
          </Text>
          <View style={[styles.border1, styles.borderLayout]} />
          <Text style={[styles.inputTitleCopy2, styles.inputTypo]}>Monday</Text>
          <Text style={[styles.am2, styles.amTypo]}>09:00 AM</Text>
          <Image
            style={[styles.icTime4Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-time2.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
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
  datesheetLayout: {
    width: 313,
    position: "absolute",
  },
  janTypo: {
    color: Color.darkslategray_300,
    fontWeight: "600",
    lineHeight: 19,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.darkslategray_100,
    lineHeight: 28,
    fontSize: FontSize.size_7xl,
    left: 1,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  pauljamesonTypo: {
    color: Color.darkslategray_200,
    fontSize: FontSize.size_base,
    left: 56,
    fontWeight: "600",
    fontFamily: FontFamily.openSans,
    lineHeight: 23,
    textAlign: "left",
    position: "absolute",
  },
  borderLayout: {
    height: 1,
    width: 271,
    backgroundColor: Color.gainsboro_200,
    left: 42,
    position: "absolute",
  },
  inputTypo: {
    color: Color.darkgray_100,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 56,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  amTypo: {
    left: 263,
    color: Color.darkgray_100,
    fontWeight: "600",
    lineHeight: 19,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: 244,
    height: 13,
    width: 13,
    position: "absolute",
  },
  calendarLayout: {
    height: 60,
    width: 313,
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
    textAlign: "left",
    color: Color.white,
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
  },
  filter: {
    left: 27,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSans,
    lineHeight: 23,
    textAlign: "left",
    color: Color.white,
    top: 0,
    position: "absolute",
  },
  icBackIcon: {
    width: 12,
    height: 21,
    top: 3,
    left: 0,
    position: "absolute",
  },
  navigationBar: {
    top: 53,
    left: 16,
    width: 103,
    height: 23,
    position: "absolute",
  },
  jan: {
    top: 39,
  },
  text: {
    top: 9,
  },
  pauljamesonWorkco: {
    top: 12,
  },
  border: {
    top: 68,
  },
  border2: {
    top: 0,
  },
  inputTitleCopy: {
    top: 36,
  },
  am: {
    top: 25,
  },
  icTimeIcon: {
    height: 13,
    width: 13,
  },
  icTime2Icon: {
    top: 28,
  },
  calendarLi: {
    height: 69,
    left: 0,
    top: 0,
  },
  jan2: {
    top: 30,
  },
  text1: {
    top: 0,
  },
  pauljamesonWorkco2: {
    top: 3,
  },
  border1: {
    top: 59,
  },
  inputTitleCopy2: {
    top: 27,
  },
  am2: {
    top: 16,
  },
  icTime4Icon: {
    top: 19,
  },
  calendarLi2: {
    top: 77,
  },
  calendarLi3: {
    top: 281,
  },
  calendarLi4: {
    top: 145,
  },
  calendarLi5: {
    top: 349,
  },
  calendarLi6: {
    top: 213,
  },
  calendarLi7: {
    top: 417,
  },
  datesheet: {
    top: 134,
    left: 32,
    height: 477,
  },
  vectorIcon: {
    top: 680,
    height: 132,
  },
  dateSheet: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DateSheet;
