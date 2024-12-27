import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function PromoPage() {
  const promoProducts = [
    { name: 'Facial Moisturizer', originalPrice: 'Rp 150.000', discountPrice: 'Rp 120.000', image: 'https://tse4.mm.bing.net/th?id=OIP.Up-XRzMKi-qBhmzIZUHH-wHaEK&w=266&h=266&c=7' },
    { name: 'Matte Lipstick', originalPrice: 'Rp 120.000', discountPrice: 'Rp 90.000', image: 'https://tse4.mm.bing.net/th?id=OIP.9_WqoiKOBEv0uX6LSSIGnAHaHa&w=474&h=474&c=7' },
    { name: 'Perfume Spray', originalPrice: 'Rp 300.000', discountPrice: 'Rp 250.000', image: 'https://tse4.mm.bing.net/th?id=OIP.y2kBrDLAKqRl_1fNHJKulgHaEo&w=296&h=296&c=7' },
    { name: 'Shampoo & Conditioner', originalPrice: 'Rp 150.000', discountPrice: 'Rp 110.000', image: 'https://tse3.mm.bing.net/th?id=OIP.QHhpkh0Q4sy5tFt6nHjKZQHaHa&w=474&h=474&c=7' },
    { name: 'Sunscreen', originalPrice: 'Rp 180.000', discountPrice: 'Rp 150.000', image: 'https://tse4.mm.bing.net/th?id=OIP.sz3sxp1sN_KOqKe-V7qbkwHaFj&w=355&h=355&c=7' },
    { name: 'Eye Shadow Palette', originalPrice: 'Rp 350.000', discountPrice: 'Rp 300.000', image: 'https://tse1.mm.bing.net/th?id=OIP.jTnWMqJGh_Ly2eBbujR3vwHaHa&w=474&h=474&c=7' },
    { name: 'Sunscreen', originalPrice: 'Rp 180.000', discountPrice: 'Rp 150.000', image: 'https://tse4.mm.bing.net/th?id=OIP.sz3sxp1sN_KOqKe-V7qbkwHaFj&w=355&h=355&c=7' },
    { name: 'Eye Shadow Palette', originalPrice: 'Rp 350.000', discountPrice: 'Rp 300.000', image: 'https://tse1.mm.bing.net/th?id=OIP.jTnWMqJGh_Ly2eBbujR3vwHaHa&w=474&h=474&c=7' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Promo Page</Text>
      </View>

      {/* Promo Products */}
      <FlatList
        data={promoProducts}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              <Text style={styles.discountPrice}>{item.discountPrice}</Text>
            </View>
            <View style={styles.promoBadge}>
              <Text style={styles.promoText}>Promo</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
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
    position: 'relative',
    borderWidth: 1,
    borderColor: '#FFC1E3',
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
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  originalPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountPrice: {
    fontSize: 14,
    color: '#FF69B4', // Hot pink for emphasis
    fontWeight: 'bold',
  },
  promoBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF69B4',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  promoText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
