import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { CarsService } from 'src/app/shared/service/cars.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  userId: string;
  carid: string;
  posts: any;
  totalPosts;
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private carService: CarsService
  ) {}

  ngOnInit(): void {
    this.authService.signedIn$.subscribe((data) => {
      this.userId = data.uid;
      console.log(this.userId);
      this.carService
        .getPosts(this.userId)
        .snapshotChanges()
        .subscribe(
          (c) =>
            (this.posts = c.map((e) => {
              return {
                cid: e.payload.doc.id,
                ...e.payload.doc.data(),
              };
            }))
        );
    });
  }
  showtotal(total){
   this.totalPosts =total;
  }
  deletePost() {
    console.log(this.carid);
    this.carService.carCollection.doc(this.carid).delete();
  }
}
