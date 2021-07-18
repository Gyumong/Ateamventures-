# 요구사항 정리

- 피그마 디자인바탕으로 UI

- JSON DATA 맵핑 
  - json 서버 띄운후 axios로 api 호출
  - proxy 설정 localhost4000
  
- JSON 데이터 가공(필터링)
  - checked 된 값 2개 교집합도 보여주기
  - 상담중인 데이터 보여주기
  
- 반응형 UI

- 모달 기능
  - 모달 트렌지션 왼쪽에서 오른쪽으로
  - 바깥요소 클릭시 창 닫힘




<br/>


## 고민한점
> 컴포넌트 디자인을 하면서 처음에 내 예상으로는 props를 2번 내려줄 생각이었다. 그래서 redux-toolkit으로 전역상태 관리를 하려했다.
> redux toolkit 쓰려한 이유는 2번이긴 하지만 props 두번 이동하는게 불편했고, reselect로 filter한 값에 대해 전체값과 비교해 메모제이션을 하려했다.
> 그러나 굳이 간단한 데이터를 redux를 적용하는건 너무 과하다 생각하여 브렌치를 새로 만들어 useState로 데이터를 관리해주었다.
> 필터링 구현할 때 some, every 등 js문법 활용, transition은 오랜만에 사용해봐서 시간이 걸렸다.

<br/>







# 웹뷰 스크린샷 

![image](https://user-images.githubusercontent.com/60845910/126067777-cd11c6f2-f9bc-403f-af6b-5680eca202aa.png)


<br/>

# 모바일뷰 스크린샷 

![image](https://user-images.githubusercontent.com/60845910/126067780-4c9f3633-d894-4741-a70c-6654a42e5b43.png)

<br/>

# 기능 GIF


<br/>

## 필터링 기능 + 교집합 필터링 


![ATV 필터링 ](https://user-images.githubusercontent.com/60845910/126067988-311501f3-40bb-48da-af56-a77f3651ad90.gif)

<br/>

## 모달 슬라이딩 + 바깥요소 클릭시 닫기


![ATV 모바일 모달 슬라이더](https://user-images.githubusercontent.com/60845910/126068131-c79b2403-6949-4853-8742-a363bb412ce5.gif)


<br/>

## 모바일 스크롤 



![ATV 모바일 스크롤](https://user-images.githubusercontent.com/60845910/126068139-87d88973-af41-4e18-8277-dae5bced6512.gif)



<br/>

## 상담중 토클 

![ATV 상담중 토글](https://user-images.githubusercontent.com/60845910/126067994-e70e1fc1-9440-41e0-a25f-4758162de3cc.gif)






