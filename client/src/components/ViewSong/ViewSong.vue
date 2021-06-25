<!-- eslint-disable-next-line -->
<!-- eslint-disable  -->
<template>
<v-layout>
<v-flex xs6 style="max-width:50%;">
    <panel title="Songs Metadata">
        <div class="song">
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
                              
                </v-flex>

                <v-flex xs6>
                    <img class="album-image" :src="song.albumImageUrl" />
                    <br>
                    {{song.album}}
                </v-flex>
        </v-layout>
        </div>
    </panel>
</v-flex>
<v-flex xs6 class="ml-2" style="max-width:50%;">
     <panel title="Tabs">
          <v-textarea
          label="Tab"
          readonly
          v-model="song.tab"
        ></v-textarea>

     </panel>
</v-flex>
</v-layout>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import SongsService from '@/services/SongService'
export default {
    data (){
        return {
            song : {}
        }
    },
    async mounted(){
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
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
