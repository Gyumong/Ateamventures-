/* eslint-disable @typescript-eslint/no-empty-function */
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
  SelectNextModal,
} from "./styles";
import { IoMdArrowDropdown, IoIosRefresh } from "react-icons/io";
import Switch from "@material-ui/core/Switch";
import Card from "../Card";
import { useCallback } from "react";
import { IPostItem } from "../../typings/db";
import axios from "axios";
import { Grid, Container } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const DashBoard = () => {
  const classes = useStyles();
  const modalEl = useRef<HTMLDivElement>(null);
  const nextmodalEl = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [isNextOpen, setNextOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isChecked, setIsChecked] = useState<Array<string>>([]);
  const [isMaterialChecked, setIsMaterialChecked] = useState<Array<string>>([]);
  const [Post, setPost] = useState<Array<IPostItem>>([]);
  const [MethodFilterPost, setMethodFilterPost] = useState<Array<IPostItem>>([]);
  const [MaterialFilterPost, setMaterialFilterPost] = useState<Array<IPostItem>>([]);
  const [MultiFilterPost, setMultiFilterPost] = useState<Array<IPostItem>>([]);
  async function getPostData() {
    const response = await axios.get("/requests");
    setPost(response.data);
  }
  useEffect(() => {
    getPostData();
  }, []);

  useEffect(() => {
    if (isChecked.length > 0 && isMaterialChecked.length > 0) {
      setMultiFilterPost(MethodFilterPost.filter((it) => MaterialFilterPost.includes(it)));
    }
  }, [isChecked, isMaterialChecked, MethodFilterPost, MaterialFilterPost]);
  useEffect(() => {
    if (toggle) {
      const toggleData = Post.filter((it) => it.status === "상담중");
      setPost(toggleData);
    } else {
      getPostData();
    }
  }, [toggle]);

  useEffect(() => {
    // state.FilterList = state.List.filter((item) => item.method.some((it) => b.includes(it)));
    if (isChecked.length === 0) {
      getPostData();
    } else if (isChecked.length === 2) {
      const MethodFilterData = Post.filter((item) => isChecked.every((it) => item.method.includes(it)));

      setMethodFilterPost(MethodFilterData);
    } else {
      const MethodFilterData = Post.filter((item) => item.method.some((it) => isChecked.includes(it)));
      setMethodFilterPost(MethodFilterData);
    }
  }, [isChecked]);

  useEffect(() => {
    // state.FilterList = state.List.filter((item) => item.method.some((it) => b.includes(it)));
    if (isMaterialChecked.length === 0) {
      getPostData();
    } else if (isMaterialChecked.length >= 2) {
      const MaterialFilterData = Post.filter((item) => isMaterialChecked.every((it) => item.material.includes(it)));
      setMaterialFilterPost(MaterialFilterData);
    } else {
      const MaterialFilterData = Post.filter((item) => item.material.some((it) => isMaterialChecked.includes(it)));
      setMaterialFilterPost(MaterialFilterData);
    }
  }, [isMaterialChecked]);

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (nextmodalEl.current && !nextmodalEl.current.contains(e.target as Node)) {
        setNextOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nextmodalEl]);

  const handleChange = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const handleChangeMethod = (e: any) => {
    // updating an object instead of a Map

    if (e.target.checked === true) {
      setIsChecked([...isChecked, e.target.value]);
    } else {
      setIsChecked(isChecked.filter((it) => it !== e.target.value));
    }
  };

  const handleMaterialChangeMethod = (e: any) => {
    // updating an object instead of a Map

    if (e.target.checked === true) {
      setIsMaterialChecked([...isMaterialChecked, e.target.value]);
    } else {
      setIsMaterialChecked(isMaterialChecked.filter((it) => it !== e.target.value));
    }
  };

  const ReSet = () => {
    setIsChecked([]);
    setIsMaterialChecked([]);
  };

  const MethodData = [
    { id: 1, value: "밀링" },
    { id: 2, value: "선반" },
  ];
  const MaterialData = [
    { id: 1, value: "알루미늄" },
    { id: 2, value: "탄소강" },
    { id: 3, value: "구리" },
    { id: 4, value: "합금강" },
    { id: 5, value: "강철" },
  ];
  return (
    <DashBoardLayout>
      <DashBoardTitleGroup>
        <DasBoardTitle>들어온 요청</DasBoardTitle>
        <DasBoardDesc>파트너님에게 딱 맞는 요청서를 찾아보세요.</DasBoardDesc>
      </DashBoardTitleGroup>
      <FilterGroup>
        <BtnGroup>
          <div style={{ width: "210px", display: "flex", justifyContent: "space-between" }}>
            <SelectBtn onClick={() => setOpen((prev) => !prev)} isChecked={isChecked.length > 0}>
              <SelectBtnText>가공방식{isChecked.length > 0 ? `(${isChecked.length})` : null}</SelectBtnText>
              <IoMdArrowDropdown style={{ fontSize: "20px" }} color={isChecked.length > 0 ? "white" : "#939FA5"} />
            </SelectBtn>
            <SelectBtn smail onClick={() => setNextOpen((prev) => !prev)} isChecked={isMaterialChecked.length > 0}>
              <SelectBtnText>재료{isMaterialChecked.length > 0 ? `(${isMaterialChecked.length})` : null}</SelectBtnText>
              <IoMdArrowDropdown
                style={{ fontSize: "20px" }}
                color={isMaterialChecked.length > 0 ? "white" : "#939FA5"}
              />
            </SelectBtn>
          </div>
          {isOpen && (
            <SelectModal ref={modalEl}>
              {MethodData.map((item) => {
                return (
                  <p key={item.id}>
                    <input
                      type="checkbox"
                      value={item.value}
                      onChange={handleChangeMethod}
                      checked={isChecked.includes(item.value)}
                    />
                    <label>{item.value}</label>
                  </p>
                );
              })}
            </SelectModal>
          )}
          {isNextOpen && (
            <SelectNextModal ref={nextmodalEl}>
              {MaterialData.map((item) => {
                return (
                  <p key={item.id}>
                    <input type="checkbox" value={item.value} onChange={handleMaterialChangeMethod} />
                    <label>{item.value}</label>
                  </p>
                );
              })}
            </SelectNextModal>
          )}
          {isChecked.length > 0 || isMaterialChecked.length > 0 ? (
            <div style={{ display: "flex", alignItems: "center" }} onClick={ReSet}>
              <IoIosRefresh color="#2196F3" />
              <h4>필터링 리셋</h4>
            </div>
          ) : null}
        </BtnGroup>
        <ConsultingToggleGroup>
          <Switch color="primary" checked={toggle} onChange={handleChange} />
          <ConsultingToggleDesc>상담 중인 요청만 보기</ConsultingToggleDesc>
        </ConsultingToggleGroup>
      </FilterGroup>

      <Grid container spacing={3}>
        {(() => {
          if (isChecked.length > 0 && isMaterialChecked.length === 0) {
            return MethodFilterPost.map((PostItem) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Card key={PostItem.id} PostItem={PostItem} />
                </Grid>
              );
            });
          } else if (isMaterialChecked.length > 0 && isChecked.length === 0) {
            return MaterialFilterPost.map((PostItem) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Card key={PostItem.id} PostItem={PostItem} />
                </Grid>
              );
            });
          } else if (isChecked.length > 0 && isMaterialChecked.length > 0) {
            return MultiFilterPost.map((PostItem) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Card key={PostItem.id} PostItem={PostItem} />
                </Grid>
              );
            });
          } else {
            return Post.map((PostItem) => {
              return (
                <Grid item xs={12} sm={4}>
                  <Card key={PostItem.id} PostItem={PostItem} />
                </Grid>
              );
            });
          }
        })()}
      </Grid>
    </DashBoardLayout>
  );
};

export default DashBoard;
