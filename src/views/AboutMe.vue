<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
  <v-img
  lazy-src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.15752-9/305383537_1131372360791853_1542495798935658143_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH6BkTr-gKJrUpTfvqwo0knjqOaQm_fzCCOo5pCb9_MIKvS-77VQIAYqCsbXe1ezFqnb6WeSDk81KV03JWcyBF1&_nc_ohc=3D6hWZmIMzkAX8km9CF&_nc_ht=scontent.fmnl8-3.fna&oh=03_AVJqX3VD_mHYfbMYjjUnGVlSlajr3E62FgAapXc9AiNq6g&oe=63424BC3"
  max-height="350"
  max-width="250"
  src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t1.15752-9/305383537_1131372360791853_1542495798935658143_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH6BkTr-gKJrUpTfvqwo0knjqOaQm_fzCCOo5pCb9_MIKvS-77VQIAYqCsbXe1ezFqnb6WeSDk81KV03JWcyBF1&_nc_ohc=3D6hWZmIMzkAX8km9CF&_nc_ht=scontent.fmnl8-3.fna&oh=03_AVJqX3VD_mHYfbMYjjUnGVlSlajr3E62FgAapXc9AiNq6g&oe=63424BC3"
></v-img>

    <v-card-title>
        Hello & Welcome to my page!
    </v-card-title>

    <v-card-subtitle>
        My name is Jewel Rose Lorejas. 
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        About Me:
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
            I am a 4th year college studying Bachelor of Scinece in Information Technology 
        at Technological Institute of the Philippines. 
        </v-card-text>
        <v-card-text>
            I am a simple girl who enjoys keeping life simple, and I am a kind-hearted person. 
            As I get older, I dream of living independently. 
            I want to be in loving relationships, but I don't want to be dependent on anyone. 
            I want to be financially and emotionally self-sufficient and strong. 
            I enjoy learning and trying new things in life. I am grateful for what I have and want to do 
            everything that I can to make others happy. 
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
    export default {
      data: () => ({
        show: false,
      }),
    }
  </script>