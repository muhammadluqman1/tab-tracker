<!-- eslint-disable-next-line -->
<!-- eslint-disable  -->
<template>
    <panel title="Songs">
        <v-btn slot="action" @click="navigateTo({name: 'songs-create'})" fab light small absolute right middle class="cyan accent-2">
            <v-icon>
                add
            </v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
            <v-layout>
                <v-flex xs6>
                    <div class="song-title">
                        {{song.title}}
                    </div>
                    <div class="song-artist">
                        {{song.artist}}
                    </div>
                    <div class="song-genre">
                        {{song.genre}}
                    </div>  
                    <v-btn
                        dark
                        class="cyan mt-4"
                        :to="{
                        name: 'song', 
                        params: {
                            songId: song.id
                        }
                        }">
                        View
                    </v-btn>                 
                </v-flex>

                <v-flex xs6>
                    <img class="album-image" :src="song.albumImageUrl" />
                </v-flex>
        </v-layout>
        </div>
    </panel>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import SongService from '@/services/SongService'
export default {
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
watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
  }
// async mounted(){
//  this.songs = (await SongService.index()).data
// }
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
