import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ReservationBtn } from "../../../../src/components/atoms/Button";
import { useSelector } from "react-redux";
import Calendar from "../../atoms/Calendar.js";
import InputLabel from "../../atoms/InputLabel";
import Modoal from "../../atoms/Modoal";
import Toast from "../../atoms/Toast";

import { ReactComponent as CalendarIcon } from "./../../../svg/calendar.svg";
import { ReactComponent as UserIcon } from "./../../../svg/profile.svg";
import { ReactComponent as PhoneIcon } from "./../../../svg/phone.svg";
import { ReactComponent as CountIcon } from "./../../../svg/revcount.svg";
import { ReactComponent as CoinIcon } from "./../../../svg/coin.svg";
import { ReactComponent as RequestIcon } from "./../../../svg/note.svg";

const DetailAside = (props) => {
  const reservation = useSelector((state) => state.reservationDate);
  const [modalSwitch, setModalSwitch] = useState(false);
  const userRole = localStorage.getItem("role");
  const [reservationInput, setReservationInput] = useState({
    name: "",
    phone: "",
    quantity: "",
    price: "",
    note: "",
    checkIn: "",
    checkOut: "",
    campId: props.campId.id,
  });
  const [reservationPrice, setReservationPrice] = useState(props.campPrice);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setReservationInput((preState) => {
      return {
        ...preState,
        checkIn: reservation.from?.toLocaleDateString(),
        checkOut: reservation.to?.toLocaleDateString(),
      };
    });
  }, [reservation.from, reservation.to]);

  useEffect(() => {
    setReservationInput((preState) => {
      return {
        ...preState,
        quantity: quantity,
        price: reservationPrice,
      };
    });
  }, [quantity, reservationPrice]);

  const nameHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        name: event.target.value,
      };
    });
  };

  const phoneHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        phone: event.target.value,
      };
    });
  };

  const quantityHandler = (event) => {
    setReservationPrice(props.campPrice * event.target.value);
    setQuantity(event.target.value);
  };

  const noteHandler = (event) => {
    setReservationInput((preState) => {
      return {
        ...preState,
        note: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userRole === "ADMIN") {
      Toast.fire({
        icon: "error",
        title: "관리자는 예약할 수 없습니다.",
      });
      return;
    } else if (userRole === "USER") {
      if (reservationInput.checkOut !== undefined) {
        setModalSwitch(!modalSwitch);
      } else {
        Toast.fire({
          icon: "warning",
          title: "예약 날짜를 선택해주세요.",
        });
        return;
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "로그인이 필요합니다.",
      });
      return;
    }
  };

  const modalHandler = () => {
    setModalSwitch(!modalSwitch);
  };

  const errorPrevention = () => {};
  return (
    <S.AsideContainer mobile={props.mobile}>
      {modalSwitch ? (
        <Modoal input={reservationInput} onModalHandler={modalHandler} />
      ) : null}
      {props.mobile ? (
        <div className="closeBtn" onClick={props.onModalHandler}>
          X
        </div>
      ) : null}
      <Calendar
        mobile={props.mobile}
        maximumAcceptance={props.maximumAcceptance}
      />
      <form onSubmit={submitHandler}>
        <InputLabel
          icon={<CalendarIcon width="20" height="20" />}
          type="text"
          id="reservationDate"
          name="reservationDate"
          value={
            reservation.from && reservation.to
              ? `${reservation.from.toLocaleDateString()} - ${reservation.to.toLocaleDateString()}`
              : null
          }
          disable="true"
          onChange={errorPrevention}
        >
          예약 날짜
        </InputLabel>
        <InputLabel
          icon={<UserIcon width="20" height="20" fill="var(--main-color-1)" />}
          type="text"
          id="reservationName"
          name="reservationName"
          onChange={nameHandler}
        >
          예약자 이름
        </InputLabel>
        <InputLabel
          icon={<PhoneIcon width="20" height="20" />}
          type="text"
          id="reservationPhone"
          name="reservationPhone"
          onChange={phoneHandler}
        >
          예약자 연락처
        </InputLabel>
        <InputLabel
          icon={<CountIcon width="20" height="20" />}
          type="number"
          id="reservationCount"
          name="reservationCount"
          onChange={quantityHandler}
          min="1"
          max={props.capacity}
        >
          예약 수량
        </InputLabel>
        <InputLabel
          icon={<CoinIcon width="20" height="20" />}
          type="number"
          id="reservationPrice"
          name="reservationPrice"
          onChange={errorPrevention}
          disable="true"
          value={reservationPrice}
        >
          예약 가격
        </InputLabel>
        <InputLabel
          icon={
            <RequestIcon width="20" height="20" fill="var(--main-color-1)" />
          }
          on="false"
          id="reservationRequest"
          name="reservationRequest"
          textarea
          onChange={noteHandler}
        >
          요청 사항
        </InputLabel>
        <ReservationBtn type={"submit"}>예약하기</ReservationBtn>
      </form>
    </S.AsideContainer>
  );
};

export default DetailAside;
