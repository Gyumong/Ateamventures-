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
import { LoadPost, PostList, getFilterStatus, filterMethod } from "../../lib/slice/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
const DashBoard = () => {
  const dispatch = useDispatch();
  const modalEl = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [state, setState] = useState<"A" | "B" | "C">("A");
  const [toggle, setToggle] = useState(false);
  const [isChecked, setIsChecked] = useState<{ [prop: string]: any }>({});
  const PostData = useSelector(PostList);
  const FilterStatusData = useSelector(getFilterStatus);
  useEffect(() => {
    dispatch(LoadPost());
  }, []);

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

  const handleChangeMethod = (event: any) => {
    // updating an object instead of a Map
    setIsChecked({ ...isChecked, [event.target.value]: event.target.checked });
  };

  useEffect(() => {
    console.log("checkedItems: ", isChecked);
    dispatch(filterMethod(isChecked));
  }, [isChecked, dispatch]);

  console.log(PostData);

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
              {MethodData.map((item) => {
                return (
                  <p key={item.id}>
                    <input
                      type="checkbox"
                      value={item.value}
                      checked={isChecked[item.value]}
                      onChange={handleChangeMethod}
                    />
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
      {toggle
        ? FilterStatusData.map((List) => {
            return <Card key={List.id} PostItem={List} />;
          })
        : PostData.map((PostItem) => {
            return <Card key={PostItem.id} PostItem={PostItem} />;
          })}
    </DashBoardLayout>
  );
};

export default DashBoard;
