import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text } from "react-native";
import Config from "react-native-config";
import Loading from "../../component/Loading";
import ProductCard from "../../component/ProductCard";
import useFetch from "../../hooks/useFetch";
import Error from "../../component/Error";

const Products = ({ navigation }) => {

    const { loading, data, error } = useFetch(Config.API_URL)  //oluşturuduğumuz custom hook'u kullanıyoruz


    const handleProductSelect = id => { //Seçili ürünlerdeki id numaralarına erişmek ve onların 
        navigation.navigate('DetailPage',{id})//detay sayfasına gitmek için id parametresi gönderdik.
    };
    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={ () =>handleProductSelect(item.id)} />

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }
    return (

        <FlatList data={data} renderItem={renderProduct} />

    )
}
export default Products;