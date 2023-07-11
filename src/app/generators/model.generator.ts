import { Injectable } from '@angular/core';
import { IAddressModel, IAlbumModel, ICommentModel, IPhotoModel, IPostModel, ITodoModel, IUserModel } from 'models';
import { faker } from '@faker-js/faker';

@Injectable({
    providedIn: 'root',
})

export class ModelGenerator {
    public static generateUsers(seed?: number, amount: number = 10): IUserModel[] {
        const users: IUserModel[] = [];
        for (let i = 0; i < amount; i++) {
            if (!!seed) {
                faker.seed(seed + i);
            }
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const email = faker.internet.email({ firstName, lastName });

            const user: IUserModel = {
                id: faker.number.int(),
                name: `${firstName} ${lastName}`,
                email: email,
                address: this.generateFakeAddress(!!seed ? (seed + i) : undefined),
                phone: faker.phone.number(),
                website: faker.internet.domainName(),
                company: {
                    name: faker.company.name(),
                    catchPhrase: faker.company.buzzPhrase(),
                    bs: faker.company.buzzVerb(),
                },
            }
            users.push(user);
        }
        return users;
    }

    public static generateComments(seed?: number, amount: number = 10): ICommentModel[] {
        const comments: ICommentModel[] = [];
        for (let i = 0; i < amount; i++) {
            if (!!seed) {
                faker.seed(seed + i);
            }
            const comment: ICommentModel = {
                postId: faker.number.int(),
                id: faker.number.int(),
                email: faker.internet.email(),
                name: faker.lorem.sentence(),
                body: faker.lorem.lines(),
            }
            comments.push(comment);
        }
        return comments;
    }

    public static generateAlbums(seed?: number, amount: number = 10): IAlbumModel[] {
        const albums: IAlbumModel[] = [];
        for (let i = 0; i < amount; i++) {
            if (!!seed) {
                faker.seed(seed + i);
            }
            const album: IAlbumModel = {
                userId: faker.number.int(),
                id: faker.number.int(),
                title: faker.lorem.sentence(),
            }
            albums.push(album);
        }
        return albums;
    }

    public static generatePhotos(seed?: number, amount: number = 10): IPhotoModel[] {
        const photos: IPhotoModel[] = [];
        for (let i = 0; i < amount; i++) {
            if (!!seed) {
                faker.seed(seed + i);
            }
            const photo: IPhotoModel = {
                albumId: faker.number.int(),
                id: faker.number.int(),
                title: faker.lorem.sentence(),
                url: faker.internet.url(),
                thumbnailUrl: '/assets/kitten.jpg',
            }
            photos.push(photo);
        }
        return photos;
    }

    public static generateTodos(seed?: number, amount: number = 10): ITodoModel[] {
        const todos: ITodoModel[] = [];
        for (let i = 0; i < amount; i++) {
            if (!!seed) {
                faker.seed(seed + i);
            }
            const todo: ITodoModel = {
                userId: faker.number.int(),
                id: faker.number.int(),
                title: faker.lorem.sentence(),
                completed: faker.datatype.boolean(),
            }
            todos.push(todo);
        }
        return todos;
    }

    public static generatePosts(seed?: number, amount: number = 10): IPostModel[] {
        const posts: IPostModel[] = [];
        for (let i = 0; i < amount; i++) {
            if (!!seed) {
                faker.seed(seed + i);
            }
            const post: IPostModel = {
                userId: faker.number.int(),
                id: faker.number.int(),
                title: faker.lorem.sentence(),
                body: faker.lorem.lines(),
            }
            posts.push(post);
        }
        return posts;
    }

    public static generateFakeAddress(seed?: number): IAddressModel {
        const address: IAddressModel = {
            street: faker.location.street(),
            suite: faker.number.int({ min: 0, max: 10 }).toString(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            geo: {
                lat: faker.location.latitude().toString(),
                lng: faker.location.longitude().toString(),
            },
        };

        return address;
    }
}