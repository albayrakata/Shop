import React from "react";
import { Image, Text, View } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import styles from './Detail.style'
import Loading from "../../component/Loading";
import Error from "../../component/Error";

const Details = ({ route }) => {
    const { id } = route.params;
    const { loading, data, error } = useFetch(`${Config.API_URL}/${id}`);
    console.log(id)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}
export default Details;