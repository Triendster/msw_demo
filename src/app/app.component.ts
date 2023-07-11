import { Component } from '@angular/core';
import { IUserModel } from './models/user.model';
import { ExampleController } from 'controllers';
import { IAlbumModel } from './models/album.model';
import { IPostModel } from './models/post.model';
import { IPhotoModel } from './models/photo.model';
import { ITodoModel } from './models/todo.model';
import { ICommentModel } from './models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msw_demo';
  users: IUserModel[] = [];
  albums: IAlbumModel[] = [];
  posts: IPostModel[] = [];
  photos: IPhotoModel[] = [];
  todos: ITodoModel[] = [];
  comments: ICommentModel[] = [];


  constructor(private exampleController: ExampleController) { }

  public async handleClick(btn: string) {
    if (btn === 'users') {
      this.users = await this.exampleController.getAllUsers();
    }
    else if (btn === 'posts') {
      this.posts = await this.exampleController.getAllPosts();
    }
    else if (btn === 'albums') {
      this.albums = await this.exampleController.getAllAlbums();
    }
    else if (btn === 'photos') {
      this.photos = await this.exampleController.getAllPhotos();
    }
    else if (btn === 'comments') {
      this.comments = await this.exampleController.getAllComments();
    }
    else if (btn === 'todos') {
      this.todos = await this.exampleController.getAllTodos();
    }
    else {
      alert('Da hat irgendwas nicht funktioniert!');
    }
  }

  public handleClearCurrentData() {
    this.albums = [];
    this.posts = [];
    this.comments = [];
    this.photos = [];
    this.todos = [];
    this.users = [];
  }
}
