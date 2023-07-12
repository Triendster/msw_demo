import { ExampleController } from './example.controller';
import { ModelGenerator } from 'generators';
import { TestBed } from '@angular/core/testing';
import { IUserModel } from '../models/user.model';
import { IPostModel } from '../models/post.model';
import { IAlbumModel } from '../models/album.model';
import { IPhotoModel } from '../models/photo.model';
import { ITodoModel } from '../models/todo.model';
import { ICommentModel } from '../models/comment.model';

describe('ExampleController', () => {
    let exampleController: ExampleController;

    describe('Mock_ExampleController', () => {
        beforeEach(() => {
            TestBed.configureTestingModule(
                {
                    imports: [],
                    teardown: { destroyAfterEach: false },
                }
            );

            exampleController = TestBed.inject(ExampleController);
        })

        it('mock_should fetch all users', async () => {
            const mockUsers = await exampleController.getAllUsers();
            expect(mockUsers).toEqual(ModelGenerator.generateUsers(123));
        });

        it('mock_should fetch all posts', async () => {
            const mockPosts = await exampleController.getAllPosts();
            expect(mockPosts).toEqual(ModelGenerator.generatePosts(123, 100));
        });

        it('mock_should fetch all albums', async () => {
            const mockAlbums = await exampleController.getAllAlbums();
            expect(mockAlbums).toEqual(ModelGenerator.generateAlbums(123, 100));
        });

        it('mock_should fetch all photos', async () => {
            const mockPhotos = await exampleController.getAllPhotos();
            expect(mockPhotos).toEqual(ModelGenerator.generatePhotos(123, 5000));
        });

        it('mock_should fetch all todos', async () => {
            const mockTodos = await exampleController.getAllTodos();
            expect(mockTodos).toEqual(ModelGenerator.generateTodos(123, 200));
        });

        it('mock_should fetch all comments', async () => {
            const mockComments = await exampleController.getAllComments();
            expect(mockComments).toEqual(ModelGenerator.generateComments(123, 500));
        });
    });

    describe('Reg_ExampleController', () => {
        beforeEach(() => {
            TestBed.configureTestingModule(
                {
                    imports: [],
                    teardown: { destroyAfterEach: false },
                }
            );

            exampleController = TestBed.inject(ExampleController);
        })

        it('reg_should fetch all users', async () => {
            const fetchedUsers = await exampleController.getAllUsers();
            const expectedUsers: IUserModel[] = require('./json-results/users.json');

            expect(fetchedUsers).toEqual(expectedUsers);
        });

        it('reg_should fetch all posts', async () => {
            const fetchedPosts = await exampleController.getAllPosts();
            const expectedPosts: IPostModel[] = require('./json-results/posts.json');

            expect(fetchedPosts).toEqual(expectedPosts);
        });

        it('reg_should fetch all albums', async () => {
            const fetchedAlbums = await exampleController.getAllAlbums();
            const expectedAlbums: IAlbumModel[] = require('./json-results/albums.json');

            expect(fetchedAlbums).toEqual(expectedAlbums);
        });

        it('reg_should fetch all photos', async () => {
            const fetchedPhotos = await exampleController.getAllPhotos();
            const expectedPhotos: IPhotoModel[] = require('./json-results/photos.json');

            expect(fetchedPhotos).toEqual(expectedPhotos);
        });

        it('reg_should fetch all todos', async () => {
            const fetchedTodos = await exampleController.getAllTodos();
            const expectedTodos: ITodoModel[] = require('./json-results/todos.json');

            expect(fetchedTodos).toEqual(expectedTodos);
        });

        it('reg_should fetch all comments', async () => {
            const fetchedComments = await exampleController.getAllComments();
            const expectedComments: ICommentModel[] = require('./json-results/comments.json');

            expect(fetchedComments).toEqual(expectedComments);
        });
    })
})