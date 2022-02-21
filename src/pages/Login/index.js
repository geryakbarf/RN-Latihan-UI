import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import logo from '../../assets/img/smart_farming.jpg';
import logoEmail from '../../assets/img/logo_email.png';
import logoPassword from '../../assets/img/logo_password.png';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      {/*Header*/}
      <View>
        <View style={{marginTop: 64, flexDirection: 'row'}}>
          <Image
            source={logo}
            style={{
              height: 200,
              flex: 1,
            }}
          />
        </View>
        <View style={{marginTop: 16, marginStart: 16}}>
          <Text style={{fontWeight: 'bold', color: '#1B2E50', fontSize: 40}}>
            Login
          </Text>
        </View>
      </View>
      {/*Input*/}
      <View>
        <View
          style={{
            borderBottomColor: '#F2F2F2',
            borderBottomWidth: 1,
            flexDirection: 'row',
            marginTop: 32,
            marginStart: 32,
            marginEnd: 32,
          }}>
          <Image
            source={logoEmail}
            style={{
              width: 28,
              height: 28,
              marginTop: 12,
            }}
          />
          <TextInput
            textAlign="left"
            style={{
              color: '#A3ABB9',
              flex: 1,
              marginStart: 8,
              height: 50,
              fontSize: 20,
            }}
            placeholder="Alamat Email"
            placeholderTextColor="#A3ABB9"
            textContentType="emailAddress"
          />
        </View>
        <View
          style={{
            borderBottomColor: '#F2F2F2',
            borderBottomWidth: 1,
            flexDirection: 'row',
            marginTop: 16,
            marginStart: 32,
            marginEnd: 32,
          }}>
          <Image
            source={logoPassword}
            style={{
              width: 28,
              height: 28,
              marginTop: 12,
            }}
          />
          <TextInput
            textAlign="left"
            style={{
              color: '#A3ABB9',
              flex: 1,
              marginStart: 8,
              height: 50,
              fontSize: 20,
            }}
            placeholder="Kata Sandi"
            placeholderTextColor="#A3ABB9"
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
      </View>
      {/*Footer*/}
      <View>
        <Pressable
          style={{
            marginTop: 32,
            borderRadius: 12,
            backgroundColor: '#1CB78B',
            alignItems: 'center',
            marginStart: 32,
            marginEnd: 32,
            height: 50,
            justifyContent: 'center',
            marginBottom: 16,
          }}
          onPress={() => navigation.replace('Dashboard')}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#FFFFFF',
              fontSize: 18,
            }}>
            Masuk
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#CBCFD7', fontSize: 15}}>
            Belum punya akun ?
          </Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#1CB78B', fontSize: 15}}> Daftar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
