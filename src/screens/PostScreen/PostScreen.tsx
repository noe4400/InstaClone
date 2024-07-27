import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import Post from '@/components/Post';
import posts from '@/asssets/data.json';

const PostScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default PostScreen;
