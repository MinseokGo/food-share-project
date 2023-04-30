<template>
  <!--loginView userId="testid"/-->
  <!--chatView userId="testid"/-->
  <loginView Id="testid"/>
  <!--payView userId="testid"/-->
  <!--writePostViewView userId="testid"/-->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import loginView from './components/loginView.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld,
//   }
// }

export default {
  name: 'App',
  components: {
    loginView
  }
}

</script>