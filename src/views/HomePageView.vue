<template>
  <HomePageNav></HomePageNav>
</template>

<script>
//경로 파일에서
import HomePageNav from "/src/components/HomePageNav.vue";

export default {
  //name 속성은 없어도 보통의 동작에 이상은 없다. 디버깅시 개발자가 알아보기 쉬우려고 작성한다. 컴포넌트 구조가 재귀적일때 필요하다고 한다.
  name: "HomePageNav",
  components: {
    HomePageNav,
  },
};
</script>
