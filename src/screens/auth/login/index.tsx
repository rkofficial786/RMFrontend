import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Pressable, TouchableOpacity, Text } from 'react-native';
import { COLORS, LightCOLORS } from '../../../constants/colors';
import Input from '../../../components/input';
import Button from '../../../components/button';
import sizer from '../../../helpers/sizer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import asset from '../../../assets/images/login/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, sendOtp } from '../../../store/auth';
import { validateSigninForm, validateSignupForm } from '../../../utils/validator';
import { setLoading } from '../../../store/loading';
import { setSignupData } from '../../../store/others';
import { styles } from './styles';
import TextCustom from '../../../components/textStyle';
import { textStyle } from '../../../components/textStyle/textStyle';
import { container } from '../../../utils/containerStyle';

const Login = ({ navigation }: any) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});



    const { loading } = useSelector((state) => state.load)

    const { darkMode, signupData } = useSelector((state) => state.other)


    useEffect(() => {
        // Check if signupData.email exists and set the state values accordingly
        if (signupData) {
            setEmail(signupData?.email);
            setPassword(signupData?.password)
        }
    }, [signupData]);


    const handleSignin = async () => {

        const signinData = {

            email,
            password,
        };

        console.log('Sign Up Pressed with Data:', signinData);
        dispatch(setSignupData(signinData));

        const validationErrors = validateSigninForm(

            email,
            password,
        );

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            dispatch(setLoading(true));
            try {
                const { payload } = await dispatch(loginUser(signinData));
                console.log(payload, 'login payload');
                if (payload.status === 200) {
                    navigation.navigate('Home');
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
        <View style={{ flex: 1, backgroundColor: darkMode ? COLORS.blackyish : LightCOLORS.white }}>

            <ScrollView>

                <View style={{ alignSelf: "center", marginTop: sizer.horizontalScale(30), backgroundColor: darkMode ? COLORS.primaryReduced : LightCOLORS.primaryReduced, borderRadius: sizer.horizontalScale(999), padding: sizer.horizontalScale(10) }}>
                    <Icon2 name="clock-plus-outline" size={128} color={darkMode ? COLORS.white : LightCOLORS.primary} />
                </View>
                <View style={[styles.container, {}]}>

                    <TextCustom customStyle={textStyle.fs_700_32} color={darkMode ? COLORS.white : LightCOLORS.primary}>Brand Name</TextCustom>
                    <TextCustom customStyle={textStyle.fs_600_24} color={darkMode ? COLORS.white : LightCOLORS.blackyish}>Signin </TextCustom>
                    <View style={styles.main_container}>

                        {/* Email */}
                        <Input
                            leftIcon={<Icon name="envelope" size={24} color={darkMode ? COLORS.white : LightCOLORS.primary} />}
                            label="Email"
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            error={errors?.email}
                        />

                        {/* Password */}
                        <Input
                            leftIcon={<Icon name="lock" size={30} color={darkMode ? COLORS.white : LightCOLORS.primary} />}
                            label="Password"
                            placeholder="Enter your password"
                            secureTextEntry
                            value={password}
                            onChangeText={text => setPassword(text)}
                            error={errors?.password}
                        />

                        {/* Sign Up Button */}

                        <View style={{ marginTop: sizer.horizontalScale(10) }}>
                            <Button onPress={handleSignin} loading={loading}>Signin</Button>
                        </View>



                        <View style={[styles.divider, { borderBottomColor: darkMode ? COLORS.textSecondary : COLORS.whiteSecondary }]} />

                        <View style={styles.googleButtonContainer}>
                            {/* Google Sign-In Button */}
                            <TouchableOpacity
                                style={[styles.googleButton, { borderColor: darkMode ? COLORS.buttonPrimary : LightCOLORS.buttonPrimary }]}
                                onPress={() => console.log('Google Sign-In')}


                            >
                                <Icon name="google" size={20} color={darkMode ? COLORS.white : LightCOLORS.primary} style={styles.googleIcon} />
                                <Text style={[styles.googleButtonText, { color: darkMode ? COLORS.white : LightCOLORS.primary, }]}>Sign in with Google</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <TextCustom>Create new Account </TextCustom>
                            <Pressable onPress={() => navigation.navigate("Signup")}><TextCustom customStyle={[styles.login_text, { borderBottomColor: darkMode ? COLORS.ButtonSecondarylight : LightCOLORS.primary, color: darkMode ? COLORS.ButtonSecondarylight : LightCOLORS.primary }]}>Here</TextCustom></Pressable>

                        </View>



                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default Login