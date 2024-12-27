import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';

export default function BeautyStore() {
  const categories = [
    { name: 'Skincare', image: 'https://tse3.mm.bing.net/th?id=OIP.QpcLhzIETApRMzm4VgrRMQHaEx&w=305&h=305&c=7' },
    { name: 'Makeup', image: 'https://tse4.mm.bing.net/th?id=OIP.DQLgsfNiiJA6LodnT9vJrgHaE8&w=316&h=316&c=7' },
    { name: 'Fragrances', image: 'https://tse2.mm.bing.net/th?id=OIP.GNRB4FBVmqW2SKXNdpj7CwHaHa&w=474&h=474&c=7' },
    { name: 'Haircare', image: 'https://tse4.mm.bing.net/th?id=OIP.vCpwZTLb8oOygelAzugfXAHaF_&w=383&h=383&c=7' },
  ];

  const products = [
    { name: 'Facial Moisturizer', price: 'Rp 120.000', image: 'https://tse4.mm.bing.net/th?id=OIP.Up-XRzMKi-qBhmzIZUHH-wHaEK&w=266&h=266&c=7' },
    { name: 'Matte Lipstick', price: 'Rp 90.000', image: 'https://tse4.mm.bing.net/th?id=OIP.9_WqoiKOBEv0uX6LSSIGnAHaHa&w=474&h=474&c=7' },
    { name: 'Perfume Spray', price: 'Rp 250.000', image: 'https://tse4.mm.bing.net/th?id=OIP.y2kBrDLAKqRl_1fNHJKulgHaEo&w=296&h=296&c=7' },
    { name: 'Shampoo & Conditioner', price: 'Rp 110.000', image: 'https://tse3.mm.bing.net/th?id=OIP.QHhpkh0Q4sy5tFt6nHjKZQHaHa&w=474&h=474&c=7' },
    { name: 'Sunscreen', price: 'Rp 150.000', image: 'https://tse4.mm.bing.net/th?id=OIP.sz3sxp1sN_KOqKe-V7qbkwHaFj&w=355&h=355&c=7' },
    { name: 'Eye Shadow Palette', price: 'Rp 300.000', image: 'https://tse1.mm.bing.net/th?id=OIP.jTnWMqJGh_Ly2eBbujR3vwHaHa&w=474&h=474&c=7' },
    { name: 'Facial Moisturizer', price: 'Rp 120.000', image: 'https://tse4.mm.bing.net/th?id=OIP.Up-XRzMKi-qBhmzIZUHH-wHaEK&w=266&h=266&c=7' },
    { name: 'Matte Lipstick', price: 'Rp 90.000', image: 'https://tse4.mm.bing.net/th?id=OIP.9_WqoiKOBEv0uX6LSSIGnAHaHa&w=474&h=474&c=7' },
    { name: 'Perfume Spray', price: 'Rp 250.000', image: 'https://tse4.mm.bing.net/th?id=OIP.y2kBrDLAKqRl_1fNHJKulgHaEo&w=296&h=296&c=7' },
    { name: 'Shampoo & Conditioner', price: 'Rp 110.000', image: 'https://tse3.mm.bing.net/th?id=OIP.QHhpkh0Q4sy5tFt6nHjKZQHaHa&w=474&h=474&c=7' },
    { name: 'Sunscreen', price: 'Rp 150.000', image: 'https://tse4.mm.bing.net/th?id=OIP.sz3sxp1sN_KOqKe-V7qbkwHaFj&w=355&h=355&c=7' },
    { name: 'Eye Shadow Palette', price: 'Rp 300.000', image: 'https://tse1.mm.bing.net/th?id=OIP.jTnWMqJGh_Ly2eBbujR3vwHaHa&w=474&h=474&c=7' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Beauty Store</Text>
      </View>

      {/* Categories in Horizontal Scroll */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Products in Grid */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Products</Text>
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F8', // Soft pastel pink
  },
  header: {
    padding: 20,
    backgroundColor: '#FFC1E3', // Light pink
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5A5A5A',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
    color: '#FF69B4', // Hot pink for emphasis
  },
  horizontalScroll: {
    paddingLeft: 16,
  },
  categoryCard: {
    marginRight: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#FFC1E3', // Matches header
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
  },
  productRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#FFC1E3', // Adds subtle pink border
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});

