<template>
  <!--loginView userId="testid"/-->
  <!--chatView userId="testid"/-->
  <chatListView userId="testid"/>
  <!--payView userId="testid"/-->
  <!--writePostViewView userId="testid"/-->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import loginView from './components/loginView.vue'
import chatListView from './components/chatListView.vue'
//import chatView from './components/chatView.vue'
//import payView from './components/payView.vue'
//import writePostView from './components/writePostView.vue'

export default {
  name: 'App',
  components: {
    //loginView
    //chatView
    chatListView
    //payView
    //writePostView
  }
}
</script>