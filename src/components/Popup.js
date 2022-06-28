import { faAngleDown, faCircleInfo, faDisplay } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const Popup = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.View}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Süresi dolmuş ilan</Text>
                        <Text style={styles.modalText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quibusdam qui nostrum culpa laboriosam esse ipsa quisquam minima corrupti nobis, deserunt ex vitae optio quo quod sunt reiciendis fugit eos?</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Tamamdır!</Text>
                        </Pressable>
                    </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faCircleInfo} style={[styles.icon]} />
                    <Text style={styles.textStyle}>İlanların süresi neden dolar?</Text>
                </View>
                <FontAwesomeIcon icon={faAngleDown} style={[styles.icon]} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        position: "relative",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    button: {
        borderRadius: 20,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#000",
        width: '100%',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 30,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 15
    },
    buttonClose: {
        backgroundColor: "#ff3f55",
        width: '100%',
        padding: 10,
        marginTop: 15
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        marginLeft: 5
    },
    modalTitle: {
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'left'
    },
    icon: {
        color: '#fff'
    }
});

export default Popup;