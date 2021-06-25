<!-- eslint-disable-next-line -->
<!-- eslint-disable  -->
<template>
<v-layout column>
<v-flex xs6 offset-xs3 style="max-width:50%;">
   <songs-search-panel />
   <songs-panel class="mt-4">
   </songs-panel>
</v-flex>
</v-layout>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongService from '@/services/SongService'
export default {
components: {
    SongsPanel,
    SongsSearchPanel
},
data() {
    return{
        songs: null
    }
},
methods:{
 navigateTo (route){
     this.$router.push(route)
 }
},
async mounted(){
 this.songs = (await SongService.index()).data
}
}
</script>
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
