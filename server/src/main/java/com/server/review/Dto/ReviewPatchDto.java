package com.server.review.Dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ReviewPatchDto {
    private Long rev_id;
    private String review;
    private int star;
}
