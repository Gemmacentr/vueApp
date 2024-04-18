<script setup lang="ts">
import { jsonData } from "../Api/Api";
import { ApiData } from "../Modelli";
import { PropType, ref } from "vue";
import Anatomia from "../../assets/Images_progetto/Anatomia.jpg";
import Intro from "../../assets/Images_progetto/Intro.jpg";
import Poteri from "../../assets/Images_progetto/Poteri_Privilegi.png";
import Rush from "../../assets/Images_progetto/rush-3.png";
import Rush2 from "../../assets/Images_progetto/rush.png";
import Post2 from "../../assets/Images_progetto/post-2.gif";
import Post4 from "../../assets/Images_progetto/post-4.jpeg";
import Post7 from "../../assets/Images_progetto/post-7.gif";
import Images from "../../assets/Images_progetto/images.jpg";
import Images2 from "../../assets/Images_progetto/image2.jpg";
import posta from "../../assets/Images_progetto/24_personal.jpg";
defineProps({
  elementsToShow: {
    type: Array as PropType<ApiData[]>,
    default: () => [],
  },
  imageUrl: Image,
  title: String,
  id: Number,
  description: String,
});
const is_expanded = ref(false);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<template>
  <main>
    <aside :class="is_expanded ? 'is-expanded' : 'not-show'">
      <div :class="'menu-toggle-wrap'">
        <button :class="'menu-toggle'" @click="toggleMenu">
          <span class="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </button>

        <div :class="'layout'" v-for="pippo in jsonData" :key="pippo.id">
          <div class="list-column">
            <ul>
              <li :class="'text'">
                {{ pippo.title }}
              </li>
            </ul>
          </div>

          <div :class="'description'">
            <p :class="'text-description'">{{ pippo.description }}</p>
          </div>
        </div>
      </div>
    </aside>
    <div :class="'wrapper'">
      <div :class="'cards'">
        <img :class="'foto'" :src="Intro" />

        <img :class="'foto'" :src="Anatomia" />

        <img :class="'foto'" :src="Poteri" />

        <img :class="'foto'" :src="Rush" />

        <img :class="'foto'" :src="Post2" />

        <img :class="'foto'" :src="Rush2" />

        <img :class="'foto'" :src="Images" />

        <img :class="'foto'" :src="Post4" />

        <img :class="'foto'" :src="Post7" />

        <img :class="'foto'" :src="Images2" />

        <img :class="'foto'" :src="posta" />
      </div>
    </div>
  </main>
</template>
