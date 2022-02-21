import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import btnBack from '../../assets/img/logo_back.png';
import imgRegister from '../../assets/img/img_register.jpg';
import imgEmail from '../../assets/img/logo_email.png';
import imgUser from '../../assets/img/logo_user.png';
import imgPassword from '../../assets/img/logo_password.png';

const Register = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      {/*Header*/}
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={btnBack}
            style={{
              marginStart: 16,
              marginTop: 16,
              width: 28,
              height: 28,
            }}
          />
        </Pressable>
        <Image
          source={imgRegister}
          style={{
            height: 230,
            width: Dimensions.get('window').width,
            marginTop: 10,
            resizeMode: 'center',
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: '#091E42',
            marginStart: 32,
            marginTop: 32,
            fontSize: 30,
          }}>
          Register
        </Text>
      </View>
      {/*Content*/}
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 32,
            marginStart: 32,
            marginEnd: 32,
          }}>
          <Image
            source={imgEmail}
            style={{
              width: 28,
              height: 28,
              marginTop: 10,
              marginEnd: 16,
            }}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              height: 50,
              flex: 1,
              fontSize: 20,
              color: '#A3ABB9',
            }}
            placeholder="Alamat Email"
            placeholderTextColor="#A3ABB9"
            textContentType="emailAddress"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginStart: 32,
            marginEnd: 32,
            marginTop: 16,
          }}>
          <Image
            source={imgUser}
            style={{
              width: 28,
              height: 28,
              marginTop: 10,
              marginEnd: 16,
            }}
          />
          <TextInput
            style={{
              borderBottomColor: '#F2F2F2',
              borderBottomWidth: 1,
              height: 50,
              flex: 1,
              fontSize: 20,
              color: '#A3ABB9',
            }}
            placeholder="Nama Lengkap"
            placeholderTextColor="#A3ABB9"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginStart: 32,
            marginEnd: 32,
            marginTop: 16,
          }}>
          <Image
            source={imgPassword}
            style={{
              width: 28,
              height: 28,
              marginTop: 10,
              marginEnd: 16,
            }}
          />
          <TextInput
            style={{
              borderBottomColor: '#F2F2F2',
              borderBottomWidth: 1,
              height: 50,
              flex: 1,
              fontSize: 20,
              color: '#A3ABB9',
            }}
            placeholder="Kata Sandi"
            placeholderTextColor="#A3ABB9"
            secureTextEntry={true}
          />
        </View>
      </View>
      {/*Footer*/}
      <View>
        <View
          style={{
            marginEnd: 32,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 16,
          }}>
          <Text style={{color: '#A3ABB9'}}>
            Dengan mendaftar, anda menyetujui
          </Text>
          <Text style={{color: '#2DDFA3'}}> syarat </Text>
        </View>
        <Text style={{color: '#2DDFA3', marginStart: 41}}>
          dan ketentuan kami
        </Text>
        <Pressable
          style={{
            marginTop: 16,
            borderRadius: 12,
            backgroundColor: '#2DDFA3',
            marginStart: 32,
            marginEnd: 32,
            height: 50,
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: 16,
          }}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'Dashboard'}],
              }),
            )
          }>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Daftar
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Register;
