import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Quiz = () => {
  return (
    <View style={styles.quiz}>
      <Image
        style={[styles.backgroundIcon, styles.barsLayout]}
        resizeMode="cover"
        source={require("../assets/background4.png")}
      />
      <View style={[styles.barsHomeIndicatorIphoneOn, styles.barsLayout]}>
        <View style={styles.rectanglePosition}>
          <View
            style={[
              styles.barsHomeIndicatorIphoneOn2,
              styles.rectanglePosition,
            ]}
          >
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.homeIndicatorIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/home-indicator.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.barsStatusBarIphoneLight, styles.barsLayout]}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle4, styles.rectanglePosition]} />
          <Image
            style={[styles.batteryIcon, styles.iconLayout1]}
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
      <View style={[styles.navigationBar, styles.quizLayout]}>
        <Text style={[styles.filter, styles.filterTypo]}>Play Quiz</Text>
        <Text style={[styles.filter2, styles.filterTypo]}>Skip</Text>
        <Image
          style={[styles.icBackIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={[styles.time1, styles.timeLayout]}>
        <Image
          style={[styles.timeBgIcon, styles.timeLayout]}
          resizeMode="cover"
          source={require("../assets/time-bg.png")}
        />
        <Image
          style={[styles.runningTimeBgIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/running-time-bg.png")}
        />
        {/* <Image
          style={styles.icClockIcon}
          resizeMode="cover"
          source={require("../assets/ic-clock.png")}
        /> */}
        <Text style={[styles.sec, styles.secPosition]}>18 Sec</Text>
      </View>
      <View style={[styles.quiz1, styles.quizLayout]}>
        <Image
          style={[styles.quizSwipeBgIcon, styles.quizIconLayout]}
          resizeMode="cover"
          source={require("../assets/quiz-swipe-bg.png")}
        />
        <Image
          style={[styles.quizSwipeBg2Icon, styles.quizIconLayout]}
          resizeMode="cover"
          source={require("../assets/quiz-swipe-bg2.png")}
        />
        <Image
          style={[styles.quizCardBgIcon, styles.quizLayout]}
          resizeMode="cover"
          source={require("../assets/quiz-card-bg.png")}
        />
        <Text style={[styles.in2017Which, styles.filterTypo]}>
          In 2017, which player became the leading run scorer of all tie in
          women's ODI cricket?
        </Text>
        <View style={[styles.option, styles.optionLayout]}>
          <Image
            style={[styles.bg2Icon, styles.optionLayout]}
            resizeMode="cover"
            source={require("../assets/bg22.png")}
          />
          <Image
            style={styles.checkbxIcon}
            resizeMode="cover"
            source={require("../assets/checkbx.png")}
          />
          <Text style={[styles.aStefanieTaylor, styles.cSuziaBetesTypo]}>
            A. Stefanie Taylor
          </Text>
        </View>
        <View style={[styles.option2, styles.optionLayout]}>
          <Image
            style={[styles.bg2Icon, styles.optionLayout]}
            resizeMode="cover"
            source={require("../assets/bg31.png")}
          />
          <Image
            style={styles.checkbxIcon}
            resizeMode="cover"
            source={require("../assets/checkbx.png")}
          />
          <Text style={[styles.cSuziaBetes, styles.cSuziaBetesTypo]}>
            C. Suzia Betes
          </Text>
          <Image
            style={[styles.cancelRedIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cancel-red.png")}
          />
        </View>
        <View style={[styles.option3, styles.optionLayout]}>
          <Image
            style={[styles.bg2Icon, styles.optionLayout]}
            resizeMode="cover"
            source={require("../assets/bg41.png")}
          />
          <Image
            style={styles.checkbxIcon}
            resizeMode="cover"
            source={require("../assets/checkbx.png")}
          />
          <Text style={[styles.bMithaliRaj, styles.cSuziaBetesTypo]}>
            B. Mithali Raj
          </Text>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/confirm-tick.png")}
          />
        </View>
        <View style={[styles.option4, styles.optionLayout]}>
          <Image
            style={[styles.bg2Icon, styles.optionLayout]}
            resizeMode="cover"
            source={require("../assets/bg22.png")}
          />
          <Image
            style={styles.checkbxIcon}
            resizeMode="cover"
            source={require("../assets/checkbx.png")}
          />
          <Text style={[styles.aStefanieTaylor, styles.cSuziaBetesTypo]}>
            D. Harmanpreet Kaur
          </Text>
        </View>
      </View>
      <View style={[styles.questions, styles.quizLayout]}>
        <Text style={[styles.question1, styles.filterTypo]}>Question 1</Text>
        <Text style={[styles.text, styles.filterTypo]}>/10</Text>
        <Image
          style={styles.line1Icon}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={[styles.users, styles.usersLayout]}>
          <Image
            style={[styles.groupIcon, styles.usersLayout]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.text1, styles.secPosition]}>265</Text>
          <Image
            style={styles.icQuesionIcon}
            resizeMode="cover"
            source={require("../assets/ic-quesion.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barsLayout: {
    width: 375,
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
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  quizLayout: {
    width: 343,
    position: "absolute",
  },
  filterTypo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    top: 3,
    position: "absolute",
  },
  timeLayout: {
    height: 35,
    width: 343,
    position: "absolute",
  },
  secPosition: {
    top: 8,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  quizIconLayout: {
    height: 473,
    position: "absolute",
  },
  optionLayout: {
    height: 60,
    width: 303,
    position: "absolute",
  },
  cSuziaBetesTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    left: 25,
    top: 20,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 27,
    width: 27,
  },
  usersLayout: {
    height: 32,
    width: 82,
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
    left: 0,
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
    left: 0,
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
    top: -1,
    left: -1,
    height: 44,
  },
  filter: {
    left: 27,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSans,
    color: Color.white,
    top: 0,
  },
  filter2: {
    left: 310,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSans,
    color: Color.white,
    top: 0,
  },
  icBackIcon: {
    width: 12,
    height: 21,
    left: 0,
  },
  navigationBar: {
    top: 52,
    height: 23,
    left: 15,
  },
  timeBgIcon: {
    left: 0,
    top: 0,
  },
  runningTimeBgIcon: {
    left: 3,
    width: 175,
    height: 29,
  },
  icClockIcon: {
    width: 20,
    height: 20,
  },
  sec: {
    left: 24,
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    top: 8,
  },
  time1: {
    top: 135,
    left: 15,
  },
  quizSwipeBgIcon: {
    left: 30,
    width: 283,
    top: 11,
  },
  quizSwipeBg2Icon: {
    width: 313,
    left: 15,
    top: 0,
  },
  quizCardBgIcon: {
    height: 459,
    left: 0,
    top: 0,
  },
  in2017Which: {
    top: 23,
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    color: "#101010",
    width: 308,
    fontWeight: "700",
    left: 20,
  },
  bg2Icon: {
    left: 0,
    top: 0,
  },
  checkbxIcon: {
    top: 17,
    left: 260,
    width: 26,
    height: 26,
    position: "absolute",
  },
  aStefanieTaylor: {
    color: Color.darkgray_200,
  },
  option: {
    top: 134,
    left: 20,
  },
  cSuziaBetes: {
    color: "#e92e30",
  },
  cancelRedIcon: {
    top: 16,
    left: 259,
    position: "absolute",
  },
  option2: {
    top: 294,
    left: 20,
  },
  bMithaliRaj: {
    color: "#6ac259",
    fontWeight: "700",
  },
  option3: {
    top: 214,
    left: 20,
  },
  option4: {
    top: 374,
    left: 20,
  },
  quiz1: {
    top: 277,
    height: 484,
    left: 15,
  },
  question1: {
    fontSize: FontSize.size_11xl,
    lineHeight: 38,
    color: Color.white,
    fontFamily: FontFamily.openSans,
    left: 0,
    top: 0,
  },
  text: {
    left: 146,
    top: 11,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSans,
    color: Color.white,
  },
  line1Icon: {
    top: 51,
    left: 2,
    width: 342,
    height: 2,
    position: "absolute",
  },
  groupIcon: {
    left: 0,
    top: 0,
  },
  text1: {
    left: 35,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
  },
  icQuesionIcon: {
    height: 12,
    width: 17,
  },
  users: {
    top: 4,
    left: 261,
  },
  questions: {
    top: 196,
    height: 53,
    left: 15,
  },
  quiz: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Quiz;
