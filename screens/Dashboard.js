import * as React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Image
        style={[styles.backgroundIcon, styles.barsPosition]}
        resizeMode="cover"
        source={require("../assets/background.png")}
      />
      <View style={[styles.barsStatusBarIphoneLight, styles.barsPosition]}>
        <View
          style={[styles.barsStatusBarIphoneLight1, styles.rectanglePosition]}
        >
          <View style={[styles.rectangle4, styles.rectanglePosition]} />
          <Image
            style={[styles.batteryIcon, styles.iconLayout3]}
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
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.dpIcon}
        resizeMode="cover"
        source={require("../assets/dp.png")}
      />
      <View style={[styles.headingContent, styles.dashboard1Position]}>
        <Text style={[styles.classXiBRollNo04, styles.textTypo]}>
          Class XI-B | Roll no: 04
        </Text>
        <Text style={[styles.hiAkshay, styles.textTypo]}>Hi Payal</Text>
        <Image
          style={styles.rectangle2388Icon}
          resizeMode="cover"
          source={require("../assets/rectangle-2388.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>2020-2021</Text>
      </View>
      <View style={[styles.dashboard1, styles.dashboard1Position]}>
        <View style={[styles.attendance, styles.feesDueLayout]}>
          <Image
            style={[styles.attendance, styles.feesDueLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-1856.png")}
          />
          <Image
            style={styles.icAttendanceIcon}
            resizeMode="cover"
            source={require("../assets/ic-attendance.png")}
          />
          <Text style={[styles.text1, styles.timeTypo]}>80.39 %</Text>
          <Text style={[styles.attendance2, styles.textTypo]}>Attendance</Text>
        </View>
        <View style={[styles.result, styles.resultLayout]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Result</Text>
          <Image
            style={styles.icResultsIcon}
            resizeMode="cover"
            source={require("../assets/ic-results.png")}
          />
        </View>
        <View style={[styles.askDoubts, styles.askDoubtsPosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Ask Doubts</Text>
          <Image
            style={[styles.icDoubtsIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/ic-doubts.png")}
          />
        </View>
        <View style={[styles.events, styles.eventsPosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Events</Text>
          <Image
            style={[styles.icEventIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-event.png")}
          />
        </View>
        <View style={[styles.schoolHoliday, styles.timeTablePosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>School Holiday</Text>
          <Image
            style={[styles.icHolidayIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/ic-holiday.png")}
          />
        </View>
        <View style={[styles.timeTable, styles.timeTablePosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Time Table</Text>
          <Image
            style={styles.icCalendraIcon}
            resizeMode="cover"
            source={require("../assets/ic-calendra.png")}
          />
        </View>
        <View style={[styles.feesDue, styles.feesDueLayout]}>
          <Image
            style={[styles.attendance, styles.feesDueLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-1856.png")}
          />
          <Image
            style={styles.icAttendanceIcon}
            resizeMode="cover"
            source={require("../assets/ic-fees-due.png")}
          />
          <Text style={[styles.text1, styles.timeTypo]}>₹6400</Text>
          <Text style={[styles.attendance2, styles.textTypo]}>Fees Due</Text>
        </View>
        <View style={[styles.dateSheet, styles.resultLayout]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Date Sheet</Text>
          <Image
            style={[styles.icDateSheetIcon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/ic-date-sheet.png")}
          />
        </View>
        <View style={[styles.schoolGallery, styles.askDoubtsPosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>School Gallery</Text>
          <Image
            style={[styles.icGalleryIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-gallery.png")}
          />
        </View>
        <View style={[styles.logout, styles.eventsPosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Logout</Text>
          <Image
            style={[styles.icLogoutIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-logout.png")}
          />
        </View>
        <View style={[styles.playQuiz, styles.playQuizPosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Play Quiz</Text>
          <Image
            style={[styles.icQuizIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-quiz.png")}
          />
        </View>
        <View style={[styles.assignment, styles.playQuizPosition]}>
          <Image
            style={[styles.bgIcon, styles.resultLayout]}
            resizeMode="cover"
            source={require("../assets/bg.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Assignment</Text>
          <Image
            style={[styles.icAssignmentIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/ic-assignment.png")}
          />
        </View>
        <View style={[styles.leaveApplication, styles.bg12IconLayout]}>
          <Image
            style={[styles.bg12Icon, styles.bg12IconLayout]}
            resizeMode="cover"
            source={require("../assets/bg12.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>
            Leave Application
          </Text>
          <Image
            style={[styles.icLeaveIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/ic-leave.png")}
          />
        </View>
        <View style={[styles.changePassword, styles.bg12IconLayout]}>
          <Image
            style={[styles.bg12Icon, styles.bg12IconLayout]}
            resizeMode="cover"
            source={require("../assets/bg12.png")}
          />
          <Text style={[styles.result2, styles.textTypo]}>Change Password</Text>
          <Image
            style={styles.icPasswordIcon}
            resizeMode="cover"
            source={require("../assets/ic-password.png")}
          />
        </View>
      </View>
      <View style={[styles.barsHomeIndicatorIphoneOn, styles.barsPosition]}>
        <View
          style={[styles.barsStatusBarIphoneLight1, styles.rectanglePosition]}
        >
          <View
            style={[
              styles.barsHomeIndicatorIphoneOn2,
              styles.rectanglePosition,
            ]}
          >
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Image
              style={[styles.homeIndicatorIcon, styles.iconLayout3]}
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
    top: "0%",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  dashboard1Position: {
    left: 16,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  feesDueLayout: {
    height: 202,
    width: 163,
    top: 0,
    position: "absolute",
  },
  resultLayout: {
    height: 132,
    width: 163,
    position: "absolute",
  },
  askDoubtsPosition: {
    top: 662,
    height: 132,
    width: 163,
    position: "absolute",
  },
  iconLayout1: {
    height: 38,
    position: "absolute",
  },
  eventsPosition: {
    top: 986,
    height: 132,
    width: 163,
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    left: 20,
  },
  timeTablePosition: {
    top: 366,
    height: 132,
    width: 163,
    position: "absolute",
  },
  iconPosition1: {
    top: 29,
    left: 20,
    position: "absolute",
  },
  iconPosition: {
    top: 27,
    position: "absolute",
  },
  playQuizPosition: {
    top: 218,
    height: 132,
    width: 163,
    position: "absolute",
  },
  bg12IconLayout: {
    height: 160,
    width: 163,
    position: "absolute",
  },
  backgroundIcon: {
    height: 1354,
    top: 0,
  },
  rectangle4: {
    backgroundColor: Color.gray_400,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
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
    color: Color.white,
    lineHeight: 18,
    left: "0%",
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
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
  barsStatusBarIphoneLight1: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  barsStatusBarIphoneLight: {
    height: 44,
    top: 0,
  },
  dpIcon: {
    left: 297,
    width: 62,
    height: 62,
    top: 89,
    position: "absolute",
  },
  classXiBRollNo04: {
    top: 47,
    opacity: 0.61,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    color: Color.white,
    left: 0,
  },
  hiAkshay: {
    fontSize: FontSize.size_11xl,
    lineHeight: 38,
    color: Color.white,
    left: 0,
    top: 0,
  },
  rectangle2388Icon: {
    top: 80,
    width: 84,
    height: 24,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 83,
    left: 12,
    fontSize: FontSize.size_xs,
    color: "#6184c7",
    lineHeight: 18,
  },
  headingContent: {
    top: 69,
    width: 170,
    height: 104,
  },
  attendance: {
    left: 0,
  },
  icAttendanceIcon: {
    top: 22,
    width: 72,
    height: 72,
    left: 20,
    position: "absolute",
  },
  text1: {
    top: 108,
    fontSize: FontSize.size_11xl,
    lineHeight: 43,
    color: Color.gray_300,
    left: 20,
  },
  attendance2: {
    top: 162,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.gray_100,
    left: 20,
  },
  bgIcon: {
    left: 0,
    top: 0,
  },
  result2: {
    color: Color.black,
    left: 20,
    lineHeight: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.openSans,
    top: 89,
  },
  icResultsIcon: {
    width: 33,
    height: 39,
    top: 28,
    left: 20,
    position: "absolute",
  },
  result: {
    top: 514,
    height: 132,
    left: 0,
  },
  icDoubtsIcon: {
    width: 38,
    height: 38,
    left: 20,
    top: 28,
  },
  askDoubts: {
    left: 0,
  },
  icEventIcon: {
    height: 38,
    position: "absolute",
    top: 28,
  },
  events: {
    left: 0,
  },
  icHolidayIcon: {
    width: 57,
    height: 33,
  },
  schoolHoliday: {
    left: 0,
  },
  icCalendraIcon: {
    width: 36,
    height: 39,
  },
  timeTable: {
    left: 180,
  },
  feesDue: {
    left: 180,
  },
  icDateSheetIcon: {
    width: 34,
    height: 35,
  },
  dateSheet: {
    left: 180,
    top: 514,
    height: 132,
  },
  icGalleryIcon: {
    left: 18,
    width: 42,
    height: 41,
  },
  schoolGallery: {
    left: 180,
  },
  icLogoutIcon: {
    width: 35,
    height: 37,
    left: 20,
  },
  logout: {
    left: 180,
  },
  icQuizIcon: {
    height: 40,
    width: 40,
    left: 20,
  },
  playQuiz: {
    left: 0,
  },
  icAssignmentIcon: {
    width: 28,
    height: 40,
    left: 20,
  },
  assignment: {
    left: 180,
  },
  bg12Icon: {
    left: 0,
    top: 0,
  },
  icLeaveIcon: {
    top: 30,
    width: 38,
    height: 38,
    left: 20,
  },
  leaveApplication: {
    top: 810,
    height: 160,
    left: 0,
  },
  icPasswordIcon: {
    width: 31,
    height: 40,
  },
  changePassword: {
    top: 810,
    height: 160,
    left: 180,
  },
  dashboard1: {
    top: 204,
    width: 343,
    height: 1118,
  },
  rectangle: {
    backgroundColor: Color.lightgray,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
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
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  barsHomeIndicatorIphoneOn: {
    top: 1338,
    height: 16,
  },
  dashboard: {
    backgroundColor: Color.white,
    flex: 1,
    height: 1352,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dashboard;
