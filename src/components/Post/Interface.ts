export interface PostI {
    post: {
        user: {
            username: string;
            image: string;
        };
        image: string;
        description: string;
        nofLikes: number;
    };
}
