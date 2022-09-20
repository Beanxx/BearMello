package com.server.camp.Mapper;

import com.server.camp.DTO.CampPostDto;
import com.server.camp.Entity.Camp;
import org.springframework.stereotype.Component;

@Component
public class CampMapper {
    public Camp campPostDtoToCamp(CampPostDto campPostDto) {
        return new Camp(0L,
                campPostDto.getName(),
                campPostDto.getPrice(),
                campPostDto.getNote(),
                campPostDto.getPlace(),
                campPostDto.getPhone(),
                campPostDto.getCapacity(),
                0
                );
    }
}
