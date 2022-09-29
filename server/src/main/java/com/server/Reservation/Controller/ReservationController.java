package com.server.Reservation.Controller;

import com.server.Reservation.DTO.RezPostDto;
import com.server.Reservation.Entity.Reservation;
import com.server.Reservation.Mapper.RezMapper;
import com.server.Reservation.Service.RezService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ReservationController {

    private final RezService rezService;
    private final RezMapper mapper;

    public ReservationController(RezService rezService, RezMapper mapper) {
        this.rezService = rezService;
        this.mapper = mapper;
    }


    @PostMapping("/detail")
    public ResponseEntity postRez(@RequestBody RezPostDto rezPostDto) {
        Reservation reservation = mapper.rezPostDtoToRez(rezPostDto);
        rezService.createRez(reservation);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("client/info/rez/{rez-id}")
    public ResponseEntity deleteRez(@PathVariable("rez-id")long rez_id) {
        rezService.deleteRez(rez_id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //예약전체조회
    @GetMapping("client/info/rez")
    public ResponseEntity getRez() {
        List<Reservation> response = rezService.findRez();
        return new ResponseEntity(response,HttpStatus.OK);
    }
}
