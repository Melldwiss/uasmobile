import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function TransactionPage() {
  const transactions = [
    {
      id: 1,
      name: 'Facial Moisturizer',
      date: '2024-12-20',
      status: 'Completed',
      image: 'https://tse4.mm.bing.net/th?id=OIP.Up-XRzMKi-qBhmzIZUHH-wHaEK&w=266&h=266&c=7',
    },
    {
      id: 2,
      name: 'Matte Lipstick',
      date: '2024-12-21',
      status: 'Pending',
      image: 'https://tse4.mm.bing.net/th?id=OIP.9_WqoiKOBEv0uX6LSSIGnAHaHa&w=474&h=474&c=7',
    },
    {
      id: 3,
      name: 'Perfume Spray',
      date: '2024-12-19',
      status: 'Completed',
      image: 'https://tse4.mm.bing.net/th?id=OIP.y2kBrDLAKqRl_1fNHJKulgHaEo&w=296&h=296&c=7',
    },
    {
      id: 4,
      name: 'Sunscreen',
      date: '2024-12-18',
      status: 'Cancelled',
      image: 'https://tse4.mm.bing.net/th?id=OIP.sz3sxp1sN_KOqKe-V7qbkwHaFj&w=355&h=355&c=7',
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return styles.completedStatus;
      case 'Pending':
        return styles.pendingStatus;
      case 'Cancelled':
        return styles.cancelledStatus;
      default:
        return styles.defaultStatus;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transactions</Text>
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transactionCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.transactionDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
              <Text style={[styles.transactionStatus, getStatusStyle(item.status)]}>{item.status}</Text>
            </View>
          </View>
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
  transactionCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 10,
    borderRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#FFC1E3',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
    marginVertical: 4,
  },
  transactionStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 6,
    width: 100,
  },
  completedStatus: {
    color: '#FFFFFF',
    backgroundColor: '#4CAF50', // Green for completed
  },
  pendingStatus: {
    color: '#FFFFFF',
    backgroundColor: '#FF9800', // Orange for pending
  },
  cancelledStatus: {
    color: '#FFFFFF',
    backgroundColor: '#F44336', // Red for cancelled
  },
  defaultStatus: {
    color: '#FFFFFF',
    backgroundColor: '#888',
  },
});

