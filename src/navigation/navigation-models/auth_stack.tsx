import { StackScreenProps } from '@react-navigation/stack';

export type AuthStackParamList = {
    LandingScreen: undefined;
    SignInClockScreen: undefined;
    SignInEmailScreen: undefined;
    SignUpOtpScreen: undefined;
}

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = StackScreenProps<
  AuthStackParamList,
  Screen
>;