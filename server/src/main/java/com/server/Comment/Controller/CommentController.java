package com.server.Comment.Controller;

import com.server.Comment.DTO.CommentPostDto;
import com.server.Comment.Entity.Comment;
import com.server.Comment.Mapper.CommentMapper;
import com.server.Comment.Service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/rev")
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper){
        this.commentService = commentService;
        this.mapper = mapper;
    }

    //리뷰댓글 작성
    @PostMapping
    public ResponseEntity postComment(@RequestBody CommentPostDto commentPostDto) {

        Comment comment = mapper.commentPostDtoToComment(commentPostDto);
        commentService.createComment(comment);

        return new ResponseEntity(HttpStatus.CREATED);
    }

}
