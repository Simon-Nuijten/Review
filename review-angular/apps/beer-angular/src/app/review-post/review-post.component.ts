import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'libs/objects/src/lib/review';
import { BeerService } from 'libs/services/src/lib/beer.service';

@Component({
  selector: 'review-angular-review-post',
  templateUrl: './review-post.component.html',
  styleUrls: ['./review-post.component.css'],
})
export class ReviewPostComponent implements OnInit {
  beerId: string | null | undefined;
  review: Review = {
    id: "",
    beerId: "",
    comment: "",
    rating: 0
};
  constructor(private route: ActivatedRoute, private router: Router, private beerService: BeerService) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.beerId = params.get("id");
    });
  }

  onSubmit() {
    this.review.beerId = this.beerId;
    this.beerService.addReview(this.review);
    this.router.navigateByUrl('overview/'+ this.beerId);
  }
}
