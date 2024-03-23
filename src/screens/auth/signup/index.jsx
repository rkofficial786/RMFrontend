import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import {COLORS, LightCOLORS} from '../../../constants/colors';
import Input from '../../../components/input';
import Button from '../../../components/button';
import sizer from '../../../helpers/sizer';
import Icon from 'react-native-vector-icons/FontAwesome';
import asset from '../../../assets/images/login/login.png';
import {useDispatch, useSelector} from 'react-redux';
import {sendOtp} from '../../../store/auth';
import {validateSignupForm} from '../../../utils/validator';
import {setLoading} from '../../../store/loading';
import {setSignupData} from '../../../store/others';
import {styles} from './styles';
import TextCustom from '../../../components/textStyle';
import {textStyle} from '../../../components/textStyle/textStyle';
import {container} from '../../../utils/containerStyle';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const {loading} = useSelector(state => state.load);

  const {darkMode} = useSelector(state => state.other);
  const handleSignup = async () => {
    const signupData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log('Sign Up Pressed with Data:', signupData);
    dispatch(setSignupData(signupData));

    const validationErrors = validateSignupForm(
      firstName,
      lastName,
      email,
      password,
    );

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(setLoading(true));
      try {
        const {payload} = await dispatch(sendOtp({email: email}));
        console.log(payload, 'payload');
        if (payload.status === 200) {
          navigation.navigate('OTP');
        } else {
          console.error('Auth Api Error');
        }
      } catch (err) {
        console.error('Auth Api: ', err);
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkMode ? COLORS.blackyish : LightCOLORS.white,
      }}>
      <ScrollView>
        <View style={[styles.container, {}]}>
          <TextCustom
            customStyle={textStyle.fs_700_32}
            color={darkMode ? COLORS.white : LightCOLORS.primary}>
            App Name
          </TextCustom>
          <TextCustom
            customStyle={textStyle.fs_600_24}
            color={darkMode ? COLORS.white : LightCOLORS.blackyish}>
            Signup{' '}
          </TextCustom>
          <View style={styles.main_container}>
            <Input
              leftIcon={
                <Icon
                  name="user"
                  size={28}
                  color={darkMode ? COLORS.white : LightCOLORS.primary}
                />
              }
              label="First Name"
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={text => setFirstName(text)}
              error={errors?.firstName}
            />

            {/* Last Name */}
            <Input
              leftIcon={
                <Icon
                  name="user"
                  size={28}
                  color={darkMode ? COLORS.white : LightCOLORS.primary}
                />
              }
              label="Last Name"
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={text => setLastName(text)}
              error={errors?.lastName}
            />

            {/* Email */}
            <Input
              leftIcon={
                <Icon
                  name="envelope"
                  size={24}
                  color={darkMode ? COLORS.white : LightCOLORS.primary}
                />
              }
              label="Email"
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
              error={errors?.email}
            />

            {/* Password */}
            <Input
              leftIcon={
                <Icon
                  name="lock"
                  size={30}
                  color={darkMode ? COLORS.white : LightCOLORS.primary}
                />
              }
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
              error={errors?.password}
            />

            {/* Sign Up Button */}

            <View style={{marginTop: sizer.horizontalScale(10)}}>
              <Button onPress={handleSignup} loading={loading}>
                Signup
              </Button>
            </View>

            <View
              style={[
                styles.divider,
                {
                  borderBottomColor: darkMode
                    ? COLORS.textSecondary
                    : COLORS.whiteSecondary,
                },
              ]}
            />

            <View style={styles.googleButtonContainer}>
              {/* Google Sign-In Button */}
              <TouchableOpacity
                style={[
                  styles.googleButton,
                  {
                    borderColor: darkMode
                      ? COLORS.buttonPrimary
                      : LightCOLORS.buttonPrimary,
                  },
                ]}
                onPress={() => console.log('Google Sign-In')}>
                <Icon
                  name="google"
                  size={20}
                  color={darkMode ? COLORS.white : LightCOLORS.primary}
                  style={styles.googleIcon}
                />
                <Text
                  style={[
                    styles.googleButtonText,
                    {color: darkMode ? COLORS.white : LightCOLORS.primary},
                  ]}>
                  Sign in with Google
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TextCustom>Already have an account? </TextCustom>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <TextCustom
                  customStyle={[
                    styles.login_text,
                    {
                      borderBottomColor: darkMode
                        ? COLORS.ButtonSecondarylight
                        : LightCOLORS.primary,
                      color: darkMode
                        ? COLORS.ButtonSecondarylight
                        : LightCOLORS.primary,
                    },
                  ]}>
                  Login
                </TextCustom>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
