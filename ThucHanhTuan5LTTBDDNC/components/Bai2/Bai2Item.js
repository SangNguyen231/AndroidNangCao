import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


function Bai2Item({ item, onPress, backgroundColor, textColor }) {

    const [defaultRating, setdefaultRating] = useState(2)
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5])

    return (
        <View style={{ height: 200, width: 155, marginLeft: 20, marginTop: 20 }}>
            <TouchableOpacity onPress={onPress} style={backgroundColor}>
                <View style={[{ flexDirection: 'column', alignItems: 'center', marginLeft: 0 }, { justifyContent: 'space-between' }]}>
                    <View style={[]}>
                        <Image source={item.url} style={[{ marginTop: 3 }]}></Image>
                    </View>
                    <View style={[{ flex: 0 }, { marginTop: 5 }]}>
                        <Text >Cáp chuyển từ Cổng{"\n"}USB sang PS2...</Text>
                    </View>
                    <View style={[{ flex: 0 }, { marginLeft: 0 }, { marginTop: 5,flexDirection:'row', justifyContent:'space-evenly', width:'100%' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                maxRating.map((item, key) => {
                                    return (
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            key={item}
                                            onPress={() => setdefaultRating(item)}
                                        >
                                            <Image
                                                style={{ width: 20, height: 20, resizeMode: 'cover' }}
                                                source={
                                                    item <= defaultRating
                                                        ? require('../../img/star_filled.png')
                                                        : require('../../img/star_corner.png')
                                                }
                                            />

                                        </TouchableOpacity>
                                    )

                                })
                            }
                        </View>
                        <Text>(15)</Text>
                    </View>
                    <View style={[{ flex: 0 }, { marginLeft: 0, width: '100%' }, { marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }]}>
                        <Text style={{ fontWeight: '700' }}>69.900 đ</Text>
                        <Text style={{ color: '#969DAA' }}>-39%</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Bai2Item