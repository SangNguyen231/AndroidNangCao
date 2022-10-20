import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListItem = ({ item, isData, setData }) => {

    const [visible, setVisible] = useState(false)

    const [titleEdit, setTiteleEdit] = useState()

    const handleRemoveData = (id) => {
        setData((prev) => prev.filter((item) => item.id !== id));
        deleteDataApi(id);
    };

    const deleteDataApi = async (id) => {
        try {
            await fetch("https://6348cc9fa59874146b1113f9.mockapi.io/demo/" + id, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then((data) => {
                    setData((prev) => [...prev].filter((item) => item.id !== data.id));
                })
        } catch (error) {
            console.warn('Error:', error);
        }
    };

    const handleConfirmData = (id, oldText) => {
		if (titleEdit !== oldText) {
			const editData = {
				id: id,
				title: titleEdit,
			};
			editDataApi(id, editData);
			setData((prev) => editDataLocal(prev, id, titleEdit));
            setVisible(false)
		}
	};

    const editDataLocal = (data, id, text) => {
		const editIndex = data.findIndex((item) => item.id === id);
		data[editIndex].title = text;
		return data;
	};

    const editDataApi = async (id, editData) => {
		try {
			await fetch('https://6348cc9fa59874146b1113f9.mockapi.io/demo/' + id, {
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

    return (
        <View style={{ flexDirection: 'row', marginTop: 20, height: 50, backgroundColor: '#66ffff', width: 380, alignItems: 'center', borderRadius: 10 }}>
            <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginLeft: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 17, color: 'white' }}>{item.id}</Text>
            </View>
            <View style={{ marginLeft: 20, width: 180 }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
            </View>
            <View style={{ height: 40, width: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginLeft: 10, borderRadius: 10 }}>
                <TouchableOpacity
                    onPress={() => handleRemoveData(item.id)}
                >
                    <Text style={{ color: 'white' }}>Delete</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 40, width: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', marginLeft: 10, borderRadius: 10 }}>
                <TouchableOpacity
                    onPress={() => {
                        setVisible(true)
                        setTiteleEdit(item.title)
                    }}
                >
                    <Text style={{ color: 'white' }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='slide'
                visible={visible}
            >
                <View>
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginRight: 20 }}>
                        <TouchableOpacity
                            onPress={() => {
                                setVisible(false);
                            }}
                        >
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 20 }}>
                        <View style={{ justifyContent: 'center', width: 300, borderWidth: 1, borderRadius: 15, backgroundColor: 'white' }}>
                            <TextInput
                                style={{ marginLeft: 20 }}
                                placeholder="Text Edit"
                                value={titleEdit}
                                onChangeText={setTiteleEdit}
                            />
                        </View>
                        <View style={{ width: 50, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                            <TouchableOpacity onPress={() => handleConfirmData(item.id, item.title)}>
                                <Text style={{ fontSize: 17, color: 'white' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})