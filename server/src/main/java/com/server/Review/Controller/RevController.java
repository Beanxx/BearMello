package com.server.Review.Controller;

import com.server.Review.Dto.ReviewPutDto;
import com.server.Review.Dto.ReviewPostDto;
import com.server.Review.Entity.Review;
import com.server.Review.Mapper.ReviewMapper;
import com.server.Review.Service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RevController {
    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    public RevController(ReviewService reviewService, ReviewMapper mapper) {
        this.reviewService = reviewService;
        this.mapper = mapper;
    }

    //리뷰등록
    @PostMapping("/client/rev")
    public ResponseEntity postReview(@RequestBody ReviewPostDto reviewPostDto )  {

        Review review = mapper.reviewPostDtoToReview(reviewPostDto);
        reviewService.createReview(review);


        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    //리뷰수정
    @PutMapping("/client/rev/{rev-id}")
    public ResponseEntity putReview(@PathVariable("rev-id") long rev_id,
                                      @RequestBody ReviewPutDto reviewPutDto) {
        reviewPutDto.setRev_id(rev_id);
        reviewService.updateReview(mapper.reviewPutDtoToReview(reviewPutDto));
        return new ResponseEntity(HttpStatus.OK);
    }

    //리뷰삭제
    @DeleteMapping("/client/rev/{rev-id}")
    public ResponseEntity deleteReview(@PathVariable("rev-id")long rev_id) {
        reviewService.deleteReview(rev_id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //리뷰조회
    @GetMapping("/{rev-id}")
    public ResponseEntity<Review> getReview(@PathVariable("rev-id")long rev_id) {
        Optional<Review> review = reviewService.findReview(rev_id);
        return new ResponseEntity(review,HttpStatus.OK);
    }

    //리뷰전체조회
    @GetMapping("/admin/rev")
    public ResponseEntity getReview() {
        List<Review> response = reviewService.findReviews();
        return new ResponseEntity(response,HttpStatus.OK);
    }



}
