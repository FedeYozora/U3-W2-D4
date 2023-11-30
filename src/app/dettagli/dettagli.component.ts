// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { PostsService } from '../service/post.service';

// @Component({
//   selector: 'app-post-details',
//   templateUrl: './dettagli.component.html',
//   styleUrls: ['./dettagli.component.scss'],
// })
// export class PostDetailsComponent {
//   id = null;
//   constructor(private route: ActivatedRoute, postSrv: PostsService) {}

//   ngOnInit() {
//     const id = this.route.snapshot.paramMap.get('id');
//     console.log(id);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../service/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  id: number = 0;
  post: any;

  constructor(private route: ActivatedRoute, private postSrv: PostsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getPostDetails(id);
  }

  getPostDetails(id: any) {
    this.postSrv.recuperaPosts;
  }
}
