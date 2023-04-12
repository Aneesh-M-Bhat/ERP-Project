import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Fees = () => {
  return (
    <View style={styles.fees}>
      <Image
        style={[styles.backgroundIcon, styles.backgroundIconPosition]}
        resizeMode="cover"
        source={require("../assets/background1.png")}
      />
      <View
        style={[styles.barsStatusBarIphoneLight, styles.backgroundIconPosition]}
      >
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
        <Text style={styles.filter}>Fees Due</Text>
        <Image
          style={styles.icBack2Icon}
          resizeMode="cover"
          source={require("../assets/ic-back1.png")}
        />
      </View>
      <View style={[styles.li, styles.liLayout]}>
        <Image
          style={[styles.cardBgIcon, styles.liLayout]}
          resizeMode="cover"
          source={require("../assets/card-bg7.png")}
        />
        <Text style={[styles.receiptNo, styles.totalClr]}>Receipt No.</Text>
        <Text style={[styles.month, styles.totalClr]}>Month</Text>
        <Text style={[styles.payMode, styles.totalClr]}>Pay Mode</Text>
        <Text style={[styles.paymentDate, styles.totalClr]}>Payment Date </Text>
        <Text style={[styles.totalAmount, styles.text1Typo]}>
          Total Amount{" "}
        </Text>
        <Image
          style={[styles.buttonBgIcon, styles.buttonIconLayout]}
          resizeMode="cover"
          source={require("../assets/button-bg.png")}
        />
        <Text style={[styles.donwload, styles.monthTypo]}>DONWLOAD</Text>
        <Text style={[styles.text, styles.textTypo]}>#98761</Text>
        <Text style={[styles.august, styles.textTypo]}>August</Text>
        <Text style={[styles.cashOnCounter, styles.textTypo]}>
          Cash on Counter
        </Text>
        <Text style={[styles.aug20, styles.textTypo]}>10 Aug 20</Text>
        <Text style={[styles.text1, styles.textPosition]}>₹999</Text>
        <View style={[styles.border, styles.borderLayout]} />
        <View style={[styles.border2, styles.borderLayout]} />
      </View>
      <View style={[styles.li2, styles.liLayout]}>
        <Image
          style={[styles.cardBgIcon, styles.liLayout]}
          resizeMode="cover"
          source={require("../assets/card-bg7.png")}
        />
        <Text style={[styles.receiptNo, styles.totalClr]}>Receipt No.</Text>
        <Text style={[styles.month, styles.totalClr]}>Month</Text>
        <Text style={[styles.payMode, styles.totalClr]}>Pay Mode</Text>
        <Text style={[styles.paymentDate, styles.totalClr]}>Payment Date </Text>
        <Text style={[styles.totalAmount, styles.text1Typo]}>
          Total Amount{" "}
        </Text>
        <Image
          style={[styles.buttonBgIcon, styles.buttonIconLayout]}
          resizeMode="cover"
          source={require("../assets/button-bg.png")}
        />
        <Text style={[styles.donwload2, styles.payNowTypo]}>DONWLOAD</Text>
        <Text style={[styles.text, styles.textTypo]}>#98431</Text>
        <Text style={[styles.september, styles.textTypo]}>September</Text>
        <Text style={[styles.cashOnCounter, styles.textTypo]}>
          Cash on Counter
        </Text>
        <Text style={[styles.aug20, styles.textTypo]}>10 Sep 20</Text>
        <Text style={[styles.text1, styles.textPosition]}>₹999</Text>
        <View style={[styles.border, styles.borderLayout]} />
        <View style={[styles.border2, styles.borderLayout]} />
        <Image
          style={styles.icDownloadIcon}
          resizeMode="cover"
          source={require("../assets/ic-download.png")}
        />
      </View>
      <View style={[styles.li3, styles.li3Layout]}>
        <Image
          style={[styles.cardBg3Icon, styles.li3Layout]}
          resizeMode="cover"
          source={require("../assets/card-bg31.png")}
        />
        <Text style={[styles.receiptNo, styles.totalClr]}>Receipt No.</Text>
        <Text style={[styles.month, styles.totalClr]}>Month</Text>
        <Text style={[styles.paymentDate, styles.totalClr]}>Payment Date </Text>
        <Text style={[styles.totalPendingAmount, styles.text5Typo]}>
          Total Pending Amount{" "}
        </Text>
        <Image
          style={[styles.buttonBg3Icon, styles.buttonIconLayout]}
          resizeMode="cover"
          source={require("../assets/button-bg.png")}
        />
        <Text style={[styles.payNow, styles.payNowTypo]}>PAY NOW</Text>
        <Text style={[styles.text, styles.textTypo]}>#98761</Text>
        <Text style={[styles.october, styles.textTypo]}>October</Text>
        <Text style={[styles.oct20, styles.textTypo]}>10 Oct 20</Text>
        <Text style={[styles.text5, styles.text5Typo]}>₹999</Text>
        <View style={[styles.border, styles.borderLayout]} />
        <View style={[styles.border6, styles.borderLayout]} />
        <Image
          style={styles.icRightIcon}
          resizeMode="cover"
          source={require("../assets/ic-right.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundIconPosition: {
    width: 375,
    left: 0,
    top: 0,
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
  liLayout: {
    height: 241,
    width: 343,
    position: "absolute",
  },
  totalClr: {
    color: Color.gray_100,
    left: 15,
    lineHeight: 18,
  },
  text1Typo: {
    top: 166,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  buttonIconLayout: {
    height: 45,
    width: 343,
    left: 0,
    position: "absolute",
  },
  monthTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.darkslategray_100,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    left: 299,
    color: Color.darkslategray_100,
    fontWeight: "600",
    lineHeight: 20,
  },
  borderLayout: {
    height: 1,
    width: 313,
    backgroundColor: Color.gainsboro_200,
    left: 15,
    position: "absolute",
  },
  payNowTypo: {
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  li3Layout: {
    height: 209,
    width: 343,
    position: "absolute",
  },
  text5Typo: {
    top: 134,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  backgroundIcon: {
    height: 813,
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
  icBack2Icon: {
    top: 3,
    width: 12,
    height: 21,
    left: 0,
    position: "absolute",
  },
  navigationBar: {
    top: 53,
    width: 95,
    height: 23,
    left: 16,
    position: "absolute",
  },
  cardBgIcon: {
    left: 0,
    top: 0,
  },
  receiptNo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
    top: 12,
  },
  month: {
    top: 57,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  payMode: {
    top: 121,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  paymentDate: {
    top: 89,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  totalAmount: {
    color: Color.gray_100,
    left: 15,
    lineHeight: 18,
  },
  buttonBgIcon: {
    top: 196,
  },
  donwload: {
    top: 209,
    left: 129,
    color: Color.white,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
  },
  text: {
    left: 285,
    top: 12,
  },
  august: {
    left: 286,
    top: 57,
  },
  cashOnCounter: {
    left: 229,
    top: 121,
  },
  aug20: {
    left: 271,
    top: 89,
  },
  text1: {
    top: 166,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSans,
    textAlign: "left",
    position: "absolute",
  },
  border: {
    top: 42,
  },
  border2: {
    top: 154,
  },
  li: {
    top: 611,
    left: 16,
  },
  donwload2: {
    top: 208,
    left: 125,
  },
  september: {
    left: 261,
    top: 57,
  },
  icDownloadIcon: {
    top: 211,
    left: 206,
    width: 14,
    height: 14,
    position: "absolute",
  },
  li2: {
    top: 354,
    left: 16,
  },
  cardBg3Icon: {
    left: 0,
    top: 0,
  },
  totalPendingAmount: {
    color: Color.gray_100,
    left: 15,
    lineHeight: 18,
  },
  buttonBg3Icon: {
    top: 164,
  },
  payNow: {
    top: 176,
    left: 141,
  },
  october: {
    left: 279,
    top: 57,
  },
  oct20: {
    left: 273,
    top: 89,
  },
  text5: {
    left: 299,
    color: Color.darkslategray_100,
    fontWeight: "600",
    lineHeight: 20,
  },
  border6: {
    top: 122,
  },
  icRightIcon: {
    top: 181,
    left: 207,
    width: 18,
    height: 12,
    position: "absolute",
  },
  li3: {
    top: 129,
    left: 16,
  },
  fees: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Fees;
