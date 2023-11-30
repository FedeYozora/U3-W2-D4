import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-not-actives',
  templateUrl: './not-actives.component.html',
  styleUrls: ['./not-actives.component.scss'],
})
export class NotActivesComponent implements OnInit {
  posts!: Post[];

  constructor(private postSrv: PostsService) {}

  async ngOnInit() {
    const posts = await this.postSrv.recuperaPosts();
    this.posts = posts;
  }

  onActivePost(id: number, i: number) {
    this.postSrv.updatePost({ active: true }, id);
    this.posts.splice(i, 1);
  }
}
