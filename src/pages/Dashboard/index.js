import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import myself from '../../assets/img/myself.jpg';
import imgBell from '../../assets/img/img_bell.png';
import imgSearch from '../../assets/img/img_search.png';
import imgSeledri from '../../assets/img/img_seledri.png';
import imgApel from '../../assets/img/img_apel.png';
import imgPAdi from '../../assets/img/img_padi.png';
import imgJagung from '../../assets/img/img_jagung.png';
import imgKelapa from '../../assets/img/img_kelapa.png';
import imgScan from '../../assets/img/img_scan.png';

const Dashboard = () => {
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      {/*Header*/}
      <View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={myself}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              marginStart: 16,
              marginTop: 32,
            }}
          />
          <View style={{marginTop: 32, marginStart: 8}}>
            <Text style={{color: '#5ABA8A'}}>Hello</Text>
            <Text style={{color: '#2F3637', fontWeight: 'bold', fontSize: 20}}>
              Gery Akbar Fauzi
            </Text>
          </View>
          <Image
            source={imgBell}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              right: 0,
              marginEnd: 16,
              marginTop: 35,
            }}
          />
        </View>
      </View>
      {/*Content*/}
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            marginStart: 16,
            marginTop: 32,
            marginEnd: 16,
            elevation: 3,
            backgroundColor: 'white',
            borderRadius: 12,
            alignItems: 'center',
          }}>
          <Image
            source={imgSearch}
            style={{
              width: 32,
              height: 32,
              marginStart: 20,
            }}
          />
          <TextInput
            style={{
              color: '#C8CFD0',
              fontSize: 18,
              marginStart: 10,
              marginEnd: 20,
              flex: 1
            }}
            placeholder="Cari"
            placeholderTextColor="#C8CFD0"
          />
        </View>
        <Text
          style={{
            color: '#2F3637',
            marginStart: 16,
            marginTop: 25,
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          Kategori
        </Text>
        <ScrollView
          horizontal={true}
          style={{
            flexDirection: 'row',
            marginStart: 8,
            marginEnd: 8,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.itemBody}>
              <Image
                source={imgSeledri}
                style={{
                  width: 70,
                  height: 70,
                }}
              />
            </View>
            <Text
              style={{
                color: '#464646',
                fontWeight: 'bold',
                marginTop: 8,
                fontSize: 15,
              }}>
              Seledri
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.itemBody}>
              <Image
                source={imgApel}
                style={{
                  width: 70,
                  height: 70,
                }}
              />
            </View>
            <Text
              style={{
                color: '#464646',
                fontWeight: 'bold',
                marginTop: 8,
                fontSize: 15,
              }}>
              Apel
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.itemBody}>
              <Image
                source={imgPAdi}
                style={{
                  width: 70,
                  height: 70,
                }}
              />
            </View>
            <Text
              style={{
                color: '#464646',
                fontWeight: 'bold',
                marginTop: 8,
                fontSize: 15,
              }}>
              Padi
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.itemBody}>
              <Image
                source={imgJagung}
                style={{
                  width: 70,
                  height: 70,
                }}
              />
            </View>
            <Text
              style={{
                color: '#464646',
                fontWeight: 'bold',
                marginTop: 8,
                fontSize: 15,
              }}>
              Jagung
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View style={styles.itemBody}>
              <Image
                source={imgKelapa}
                style={{
                  width: 70,
                  height: 70,
                }}
              />
            </View>
            <Text
              style={{
                color: '#464646',
                fontWeight: 'bold',
                marginTop: 8,
                fontSize: 15,
              }}>
              Kelapa
            </Text>
          </View>
        </ScrollView>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <Image
            source={imgScan}
            style={{
              height: 200,
              flex: 1,
              marginStart: 16,
              marginEnd: 16,
              borderRadius: 16,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            color: '#2F3637',
            marginStart: 16,
            marginTop: 16,
            fontWeight: 'bold',
            fontSize: 25,
          }}>
          Cuaca
        </Text>
        <View
          style={{
            height: 120,
            marginBottom: 16,
            borderRadius: 16,
            elevation: 3,
            backgroundColor: '#37CEB6',
            marginStart: 16,
            marginEnd: 16,
            marginTop: 16,
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                color: '#1B1A1A',
                marginStart: 32,
                fontWeight: 'bold',
                fontSize: 35,
                marginTop: 16,
              }}>
              29°C
            </Text>
            <Text
              style={{
                color: '#000000',
                marginStart: 32,
                fontWeight: 'bold',
              }}>
              Rabu, 27 April 2022
            </Text>
          </View>
          <Text
            style={{
              color: '#1B1A1A',
              marginTop: 25,
              position: 'absolute',
              right: 0,
              fontWeight: 'bold',
              marginEnd: 16,
            }}>
            Baleendah
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemBody: {
    marginTop: 20,
    marginStart: 8,
    marginEnd: 8,
    borderRadius: 12,
    height: 100,
    width: 100,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
