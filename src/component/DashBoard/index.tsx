import React, { useState, useEffect, useRef } from "react";
import {
  DashBoardLayout,
  DashBoardTitleGroup,
  DasBoardTitle,
  DasBoardDesc,
  FilterGroup,
  BtnGroup,
  SelectBtn,
  SelectBtnText,
  SelectModal,
  ConsultingToggleGroup,
  ConsultingToggleDesc,
} from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";
import Switch from "@material-ui/core/Switch";
import Card from "../Card";
import { useCallback } from "react";
import { IPostItem } from "../../typings/db";
import axios from "axios";
const DashBoard = () => {
  const modalEl = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isChecked, setIsChecked] = useState<Array<string>>([]);
  const [Post, setPost] = useState<Array<IPostItem>>([]);
  async function getPostData() {
    const response = await axios.get("/requests");
    setPost(response.data);
  }
  useEffect(() => {
    getPostData();
  }, []);

  useEffect(() => {
    if (toggle) {
      const toggleData = Post.filter((it) => it.status === "상담중");
      setPost(toggleData);
    } else {
      getPostData();
    }
    console.log(isChecked);
  }, [toggle, isChecked]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (modalEl.current && !modalEl.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalEl]);

  const handleChange = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const handleChangeMethod = (e: any) => {
    // updating an object instead of a Map
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setIsChecked([...isChecked, e.target.value]);
    } else {
      setIsChecked(isChecked.filter((it) => it !== e.target.value));
    }
  };

  const MethodData = [
    { id: 1, value: "밀링" },
    { id: 2, value: "선반" },
  ];
  return (
    <DashBoardLayout>
      <DashBoardTitleGroup>
        <DasBoardTitle>들어온 요청</DasBoardTitle>
        <DasBoardDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</DasBoardDesc>
      </DashBoardTitleGroup>
      <FilterGroup>
        <BtnGroup>
          <SelectBtn onClick={() => setOpen((prev) => !prev)}>
            <SelectBtnText>가공방식</SelectBtnText>
            <IoMdArrowDropdown style={{ fontSize: "20px" }} color={"#939FA5"} />
          </SelectBtn>
          <SelectBtn smail>
            <SelectBtnText>재료</SelectBtnText>
            <IoMdArrowDropdown style={{ fontSize: "20px" }} color={"#939FA5"} />
          </SelectBtn>
          {isOpen && (
            <SelectModal ref={modalEl}>
              {MethodData.map((item, index) => {
                return (
                  <p key={item.id}>
                    <input type="checkbox" value={item.value} onChange={handleChangeMethod} />
                    <label>{item.value}</label>
                  </p>
                );
              })}
            </SelectModal>
          )}
        </BtnGroup>
        <ConsultingToggleGroup>
          <Switch color="primary" checked={toggle} onChange={handleChange} />
          <ConsultingToggleDesc>상담 중인 요청만 보기</ConsultingToggleDesc>
        </ConsultingToggleGroup>
      </FilterGroup>
      {Post.map((PostItem) => {
        return <Card key={PostItem.id} PostItem={PostItem} />;
      })}
    </DashBoardLayout>
  );
};

export default DashBoard;
