import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image
        style={[styles.backgroundIcon, styles.barsLayout]}
        resizeMode="cover"
        source={require("../assets/background5.png")}
      />
      <View style={styles.navigationBar}>
        <Text style={[styles.filter, styles.labelTypo]}>My Profile</Text>
        <Image
          style={[styles.icBackIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
        <View style={[styles.done, styles.doneLayout]}>
          <Image
            style={[styles.doneBgIcon, styles.doneLayout]}
            resizeMode="cover"
            source={require("../assets/done-bg.png")}
          />
          <Image
            style={[styles.icCheckedIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/ic-checked.png")}
          />
          <Text style={[styles.done2, styles.done2Typo]}>DONE</Text>
        </View>
      </View>
      <View style={[styles.profile1, styles.profile1Layout]}>
        <Image
          style={[styles.cardBgIcon, styles.profile1Layout]}
          resizeMode="cover"
          source={require("../assets/card-bg9.png")}
        />
        <Image
          style={styles.dpIcon}
          resizeMode="cover"
          source={require("../assets/dp1.png")}
        />
        <Text style={[styles.classXiBRollNo04, styles.textTypo]}>
          Class XI-B | Roll no: 04
        </Text>
        <Text style={[styles.akshaySyal, styles.done2Typo]}>Rahul</Text>
        <Image
          style={styles.icCameraIcon}
          resizeMode="cover"
          source={require("../assets/ic-camera.png")}
        />
      </View>
      <View style={styles.profileEdit}>
        <View style={[styles.adharNo, styles.nameLayout]}>
          <Text style={[styles.text, styles.textTypo]}>
            1234 4325 4567 1234
          </Text>
          <Image
            style={[styles.borderIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border2.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Aadhar No</Text>
        </View>
        <View style={[styles.academicYear, styles.nameLayout]}>
          <Text style={[styles.text, styles.textTypo]}>2020-2021</Text>
          <Image
            style={[styles.borderIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border2.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Academic Year</Text>
        </View>
        <View style={[styles.admissionClass, styles.admissionPosition]}>
          <Text style={[styles.text, styles.textTypo]}>VI</Text>
          <Image
            style={[styles.borderIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border3.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Admission Class</Text>
          <Image
            style={[styles.icLockIcon, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
        <View style={[styles.dateOfAdmission, styles.datePosition]}>
          <Text style={[styles.text, styles.textTypo]}>01 Apr 2018</Text>
          <Image
            style={[styles.borderIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border3.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>
            Date of Admission
          </Text>
          <Image
            style={[styles.icLockIcon, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
        <View style={[styles.oldAdmissionNo, styles.admissionPosition]}>
          <Text style={[styles.text, styles.textTypo]}>T00221</Text>
          <Image
            style={[styles.borderIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border5.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Old Admission No</Text>
          <Image
            style={[styles.icLockIcon, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
        <View style={[styles.dateOfBirth, styles.datePosition]}>
          <Text style={[styles.text, styles.textTypo]}>22 July 1996</Text>
          <Image
            style={[styles.borderIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border5.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Date of Birth</Text>
          <Image
            style={[styles.icLockIcon, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
        <View style={[styles.parentMailId, styles.nameLayout]}>
          <Text style={[styles.text, styles.textTypo]}>
            parentboth84@gmail.com
          </Text>
          <Image
            style={[styles.border7Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Parent Mail ID</Text>
          <Image
            style={[styles.icLockIcon4, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
        <View style={[styles.fatherName, styles.nameLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Bernard Taylor</Text>
          <Image
            style={[styles.border7Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Father Name</Text>
          <Image
            style={[styles.icLockIcon4, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
        <View style={[styles.motherName, styles.nameLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Monica Larson</Text>
          <Image
            style={[styles.border7Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Mother Name</Text>
          <Image
            style={[styles.icLockIcon4, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
        <View style={[styles.parmanentAdd, styles.nameLayout]}>
          <Text style={[styles.text, styles.textTypo]}>Karol Bagh, Delhi</Text>
          <Image
            style={[styles.border7Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/border1.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Parmanent Add.</Text>
          <Image
            style={[styles.icLockIcon4, styles.lockIconLayout]}
            resizeMode="cover"
            source={require("../assets/ic-lock.png")}
          />
        </View>
      </View>
      <View style={[styles.barsStatusBarIphoneLight, styles.barsLayout]}>
        <View
          style={[styles.barsStatusBarIphoneLight1, styles.rectanglePosition]}
        >
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
            <Text style={[styles.time, styles.rectanglePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.barsHomeIndicatorIphoneOn, styles.lockIconLayout]}>
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
  barsLayout: {
    width: 375,
    left: 0,
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: 12,
    position: "absolute",
  },
  doneLayout: {
    height: 28,
    width: 86,
    position: "absolute",
  },
  done2Typo: {
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    position: "absolute",
  },
  profile1Layout: {
    height: 100,
    width: 341,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    position: "absolute",
  },
  nameLayout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    height: 1,
    top: 61,
    left: 0,
    position: "absolute",
  },
  admissionPosition: {
    top: 91,
    height: 62,
    width: 161,
    position: "absolute",
  },
  lockIconLayout: {
    height: 16,
    position: "absolute",
  },
  datePosition: {
    top: 182,
    height: 62,
    width: 161,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backgroundIcon: {
    top: 0,
    position: "absolute",
    height: 918,
    width: 375,
  },
  filter: {
    left: 27,
    fontSize: FontSize.size_lg,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    lineHeight: 23,
  },
  icBackIcon: {
    top: 2,
    height: 21,
    left: 0,
  },
  doneBgIcon: {
    left: 0,
    top: 0,
  },
  icCheckedIcon: {
    top: 10,
    left: 13,
    height: 9,
  },
  done2: {
    top: 5,
    left: 32,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    color: Color.steelblue_200,
  },
  done: {
    top: 1,
    left: 257,
  },
  navigationBar: {
    top: 54,
    width: 343,
    height: 29,
    left: 16,
    position: "absolute",
  },
  cardBgIcon: {
    left: 0,
    top: 0,
  },
  dpIcon: {
    top: 12,
    left: 12,
    width: 75,
    height: 75,
    position: "absolute",
  },
  classXiBRollNo04: {
    top: 50,
    lineHeight: 20,
    color: Color.gray_100,
    left: 99,
  },
  akshaySyal: {
    top: 16,
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    color: Color.black,
    left: 99,
  },
  icCameraIcon: {
    top: 18,
    left: 302,
    width: 21,
    height: 18,
    position: "absolute",
  },
  profile1: {
    top: 131,
    left: 16,
  },
  text: {
    top: 23,
    fontWeight: "600",
    color: Color.darkslategray_200,
    lineHeight: 23,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  borderIcon: {
    width: 161,
  },
  label: {
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: Color.darkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.openSans,
    left: 0,
  },
  adharNo: {
    width: 161,
    left: 0,
    top: 0,
  },
  academicYear: {
    left: 181,
    width: 161,
    top: 0,
  },
  icLockIcon: {
    top: 26,
    left: 148,
    width: 13,
    height: 16,
  },
  admissionClass: {
    left: 0,
  },
  dateOfAdmission: {
    left: 0,
  },
  oldAdmissionNo: {
    left: 181,
  },
  dateOfBirth: {
    left: 181,
  },
  border7Icon: {
    width: 341,
  },
  icLockIcon4: {
    top: 24,
    left: 329,
    width: 13,
    height: 16,
  },
  parentMailId: {
    top: 273,
    width: 341,
    left: 0,
  },
  fatherName: {
    top: 455,
    width: 341,
    left: 0,
  },
  motherName: {
    top: 364,
    width: 341,
    left: 0,
  },
  parmanentAdd: {
    top: 546,
    width: 341,
    left: 0,
  },
  profileEdit: {
    top: 261,
    width: 342,
    height: 608,
    left: 16,
    position: "absolute",
  },
  rectangle4: {
    backgroundColor: Color.gray_400,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
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
    lineHeight: 18,
    fontFamily: FontFamily.roboto,
    left: "0%",
    top: "0%",
    textAlign: "left",
    color: Color.white,
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
    width: "100%",
  },
  barsStatusBarIphoneLight: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.lightgray,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
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
    width: "100%",
  },
  barsHomeIndicatorIphoneOn: {
    top: 902,
    width: 375,
    left: 0,
  },
  profile: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 918,
  },
});

export default Profile;
