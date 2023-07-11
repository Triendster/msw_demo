import { Injectable } from '@angular/core';
import { CoreController } from "./core/core.controller";
import { IPostModel } from 'models';
import { IAlbumModel } from 'models';
import { ICommentModel } from 'models';
import { IPhotoModel } from 'models';
import { ITodoModel } from 'models';
import { IUserModel } from 'models';

@Injectable({
    providedIn: 'root',
})
export class ExampleController extends CoreController {

    // Holt sich eine Liste aller verfügbaren Posts
    public getAllPosts(): Promise<IPostModel[]> {
        return super.fetch('posts', 'GET');
    }

    // Holt sich alle verfügbaren Comments
    public getAllComments(): Promise<ICommentModel[]> {
        return super.fetch('comments', 'GET');
    }

    //Holt sich alle verfügbaren Albums
    public getAllAlbums(): Promise<IAlbumModel[]> {
        return super.fetch('albums', 'GET');
    }

    // Holt sich alle verfügbaren Photos
    public getAllPhotos(): Promise<IPhotoModel[]> {
        return super.fetch('photos', 'GET');
    }

    // Holt sich alle verfügbaren Todos
    public getAllTodos(): Promise<ITodoModel[]> {
        return super.fetch('todos', 'GET');
    }

    // Holt sich alle verfügbaren Users
    public getAllUsers(): Promise<IUserModel[]> {
        return super.fetch('users', 'GET');
    }
}