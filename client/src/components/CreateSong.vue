<!-- eslint-disable-next-line -->
<!-- eslint-disable  -->
<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex>
      <panel title="Song Structure" class="ml-2">
        <v-textarea
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"
        ></v-textarea>

        <v-textarea
          label="Lyrics"
          multi-line
          required
          :rules="[required]"
          v-model="song.lyrics"
        ></v-textarea>
      </panel>

      <div class="danger-alert mt-2" v-if="error">
        {{error}}
      </div>

      <v-btn
        dark
        class="cyan mt-4"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
// eslint-disable-next-line
// eslint-disable  
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
      for (const [key, value] of Object.entries(this.song)) {
        console.log(`${key}: ${value}`)
      }
    }
  }
}
</script>

<style scoped>
</style>
