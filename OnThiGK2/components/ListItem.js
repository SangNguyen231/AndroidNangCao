import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'

const ListItem = ({ data, setData }) => {

    const [isVisible, setVisible] = useState(false)

    const [isItem, setItem] = useState()
    const [isLink, setLink] = useState()


    const deleteItem = (id) => {
        fetch('https://6348cc9fa59874146b1113f9.mockapi.io/OnThiGK/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => {
                setData((prev) => [...prev].filter((item) => item.id !== data.id));
            })

        setData((prev) => prev.filter((item) => item.id !== id));
    }

    const handleConfirmData = (id, oldText, oldLink) => {
		if (isItem !== oldText || isLink !== oldLink) {
			const editData = {
				id: id,
				item: isItem,
                link: isLink
			};
			editDataApi(id, editData);
			setData((prev) => editDataLocal(prev, id, isItem, isLink));
            setVisible(false)
		}
        console.log(id, oldText, oldLink)
	};

    const editDataLocal = (data, id, text, link) => {
		const editIndex = data.findIndex((item) => item.id === id);
		data[editIndex].item = text;
        data[editIndex].link = link;
		return data;
	};

    const editDataApi = async (id, editData) => {
		try {
			await fetch('https://6348cc9fa59874146b1113f9.mockapi.io/OnThiGK/' + id, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editData),
			});
		} catch (error) {
			console.log('Error:', error);
		}
	};

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginTop: 30 }}>
                <View>
                    <Image source={{ uri: item.link }} style={{ width: 300, height: 150 }} />
                    <View style={{ alignItems: 'center', justifyContent: 'space-around', height: 40, flexDirection: 'row', backgroundColor: '#bbbbbbbb', borderBottomEndRadius: 20, borderBottomLeftRadius: 20 }}>
                        <Text style={{ fontSize: 17, fontWeight: '500' }}>{item.item}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{ justifyContent: 'center', width: 50, height: 30, backgroundColor: '#a8a', alignItems: 'center', borderRadius: 20 }}
                                onPress={() => deleteItem(item.id)}
                            >
                                <Text>delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ justifyContent: 'center', width: 50, height: 30, backgroundColor: '#a8a', alignItems: 'center', borderRadius: 20, marginLeft: 10 }}
                                onPress={() => {
                                    setVisible(true)
                                    setItem(item.item)
                                    setLink(item.link)
                                }}
                            >
                                <Text>edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Modal
                    animationType='slide'
                    visible={isVisible}
                >
                    <View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setVisible(false)
                                }}
                            >
                                <Text style={{ fontSize: 20, fontWeight: '700' }}>Close</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={{ marginTop: 0, width: '100%' }}>
                                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                                    <TextInput
                                        placeholder='Nhap link'
                                        style={{ borderWidth: 1, height: 40, width: 150, borderRadius: 20 }}
                                        value={isLink}
                                        onChangeText={setLink} />
                                    <TextInput placeholder='Nhap Item'
                                        style={{ borderWidth: 1, height: 40, width: 150, borderRadius: 20 }}
                                        value={isItem}
                                        onChangeText={setItem} />
                                    <TouchableOpacity
                                        style={{ justifyContent: 'center', width: 50, height: 40, backgroundColor: 'red', alignItems: 'center', borderRadius: 20 }}
                                        onPress={() => handleConfirmData(item.id, item.item, item.link)}
                                    >
                                        <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    return (
        <View style={{ height: 650 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})