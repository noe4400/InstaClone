import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { PostI } from './Interface';
import { createStyles } from '@/asssets/theme';

const Post = ({ post }: PostI) => {
    const { username, image: userImage } = post.user;
    const { image: postImage, nofLikes, description } = post;

    return (
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <View style={styles.headerLeft}>
                    <Image source={{ uri: userImage }} style={styles.avatar} />

                    <View>
                        <Text style={styles.boldText}>{username}</Text>
                    </View>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
            <View style={styles.verticalMargin}>
                <Image
                    source={{
                        uri: postImage,
                    }}
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.horizontalContainer}>
                    <View style={styles.footerLeftIcons}>
                        <AntDesign name="hearto" size={24} color="black" />
                        <FontAwesome5 name="comment" size={24} color="black" />
                        <Ionicons name="paper-plane-outline" size={24} color="black" />
                    </View>
                    <FontAwesome5 name="bookmark" size={24} color="black" />
                </View>
                <Text style={styles.boldText}>{nofLikes} Likes</Text>
                <View>
                    <Text numberOfLines={2}>
                        <Text style={styles.boldText}>{username} </Text>
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = createStyles((theme, baseStyles) => ({
    postContainer: {
        ...baseStyles.container,
        paddingHorizontal: 0,
    },
    postHeader: {
        ...baseStyles.horizontalContainer,
        paddingHorizontal: theme.spacing.sm,
    },
    headerLeft: {
        ...baseStyles.horizontalContainer,
        gap: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'gray',
    },
    footerContainer: {
        paddingHorizontal: 15,
        gap: 7,
    },
    footerLeftIcons: {
        ...baseStyles.horizontalContainer,
        gap: 20,
    },
}));

export default Post;
