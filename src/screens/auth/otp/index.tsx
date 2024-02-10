import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, LightCOLORS } from '../../../constants/colors';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import CodeInput from './codeInput';
import TextCustom from '../../../components/textStyle';
import { textStyle } from '../../../components/textStyle/textStyle';
import Back from '../../../components/back';
import Button from '../../../components/button';
import { setLoading } from '../../../store/loading';
import { registerUser, sendOtp } from '../../../store/auth';
import sizer from '../../../helpers/sizer';
import CustomModal from '../../../components/modal';


const OTPverify = ({ navigation }: any) => {

  const { darkMode, signupData } = useSelector((state: any) => state.other)

  const { loading } = useSelector((state: any) => state.load)
  const [loader, setLoader] = useState(false)
  const [code, setCode] = useState("")
  const [codeReady, setCodeReady] = useState(false)

  console.log(code, "code");
  console.log(codeReady, "codeReday");
  const dispatch = useDispatch()





  const handleSignup = async () => {

    const formData = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      password: signupData.password,
      otp: code,

      confirmPassword: signupData.password,
    };

    console.log(formData, "formdata");



    dispatch(setLoading(true));
    try {
      const { payload } = await dispatch(registerUser(formData));
      console.log(payload, 'payload');
      if (payload?.status === 200) {
        setModalOpen(true)
        
      } else {
        console.error('Auth Api Error');
      }
    } catch (err) {
      console.error('Auth Api: ', err);
    } finally {
      dispatch(setLoading(false));
    }

  };

  // resend logic
  const [isOtpSent, setIsOtpSent] = useState<boolean>(true);

  const [timer, setTimer] = useState<number>(10);

  useEffect(() => {
    if (isOtpSent) {
      let interval: any;

      if (timer > 0) {
        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      }

      else if (timer == 0) {
        setIsOtpSent(false)
      }
      else {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [timer, isOtpSent]);

  const handleResendOTP = async () => {

    setLoader(true);
    try {
      const { payload } = await dispatch(sendOtp({ email: signupData.email }));
      console.log(payload, 'payload');
      if (payload.status === 200) {
        setIsOtpSent(true);
      } else {
        console.error('Auth Api Error');
      }
    } catch (err) {
      console.error('Auth Api: ', err);
    } finally {
      setLoader(false)
    }

  };


  console.log(isOtpSent, "otp send");

  const [modalOpen, setModalOpen] = useState(false)


  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? COLORS.blackyish : COLORS.white }}>
      <Back onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={[styles.top_container, { backgroundColor: darkMode ? COLORS.lightBlack : LightCOLORS.primaryReduced }]}>
          <Icon name="lock" size={128} color={darkMode ? COLORS.white : LightCOLORS.primary} />
        </View>


        <View style={styles.otp_text}>
          <TextCustom customStyle={textStyle.fs_700_32} color={darkMode ? COLORS.buttonSecondary : LightCOLORS.primary}>Verify OTP</TextCustom>
          <TextCustom color={darkMode ? COLORS.whiteSecondary : LightCOLORS.textSecondary} >We have sent an OTP to </TextCustom>
          <TextCustom customStyle={textStyle.fs_700_14} color={darkMode ? COLORS.whiteSecondary : LightCOLORS.textSecondary} > {signupData?.email}</TextCustom>
        </View>

        <View>
          <CodeInput code={code} setCode={setCode} setCodeReddy={setCodeReady} />
        </View>


        <View style={styles.btn_container}>
          <Button loading={loading} onPress={handleSignup} disabled={!codeReady}>Verify</Button>
        </View>

        <View style={styles.resend}>
          {!isOtpSent ? (

            loader ? (<ActivityIndicator size={sizer.horizontalScale(25)} color={darkMode ? COLORS.buttonSecondary : LightCOLORS.primary} />) : (<TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }} onPress={() => { setTimer(10); handleResendOTP() }}>
              <TextCustom color={darkMode ? COLORS.white : LightCOLORS.blackyish}>Didn't receive the otp on email?</TextCustom>
              <TextCustom customStyle={{ borderBottomColor: darkMode ? COLORS.buttonSecondary : LightCOLORS.primary, borderBottomWidth: sizer.horizontalScale(1) }} color={darkMode ? COLORS.buttonSecondary : LightCOLORS.primary}>Resend OTP</TextCustom>
            </TouchableOpacity>)



          ) : (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TextCustom color={darkMode ? COLORS.white : LightCOLORS.blackyish}>Didn't receive the otp on email?</TextCustom>
              <TextCustom color={darkMode ? COLORS.textSecondary : LightCOLORS.blackyish}>Resend OTP in {timer} seconds</TextCustom>
            </View>
          )}
        </View>
      </View>

      <CustomModal onClose={()=>{setModalOpen(false);navigation.navigate('Login');}}  heading='Reminder' visible={modalOpen} >

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Icon name="check-circle" size={sizer.horizontalScale(100)} color={LightCOLORS.success} />


          <TextCustom customStyle={[textStyle.fs_700_22, { color: darkMode ? COLORS.white : LightCOLORS.blackyish, textAlign: 'center', marginTop: sizer.horizontalScale(10) }]}>
            Registration Complete!
          </TextCustom>
          <TextCustom customStyle={[textStyle.fs_600_22, { color: darkMode ? COLORS.white : LightCOLORS.blackyish, textAlign: 'center', marginTop: sizer.horizontalScale(10) }]}>
            Hey {signupData.firstName}, now login with same email and password
          </TextCustom>
          <View style={{ marginTop: sizer.horizontalScale(16) }}>
            <Button onPress={()=>{setModalOpen(false);navigation.navigate('Login');}} smallWidth>Ok</Button>
          </View>
        </View>
      </CustomModal>

    </View>
  );
};



export default OTPverify;
