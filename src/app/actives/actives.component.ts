import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.scss'],
})
export class ActivesComponent implements OnInit {
  posts!: Post[];

  constructor(private postSrv: PostsService) {}

  async ngOnInit() {
    const posts = await this.postSrv.recuperaPosts();
    this.posts = posts;
  }

  onInactivePost(id: number, i: number) {
    this.postSrv.updatePost({ active: true }, id);
    this.posts.splice(i, 1);
  }
}
