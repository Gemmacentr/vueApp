<script setup lang="ts">
import images from "../../assets/images";
import { jsonData } from "../Api/Api";
import { ApiData } from "../Modelli";
import { PropType, ref } from "vue";
import { imagesModel } from "../Modelli/imagesModel";

defineProps({
  elementsToShow: {
    type: Array as PropType<ApiData[]>,
    default: () => [],
  },
});

const items = ref<imagesModel[]>([
  {
    imageAnatomia: images.Anatomia,
    imageIntro: images.Intro,
    image24: images.Images,
    image2: images.Post2,
    image3: images.Post4,
    imagePoteri: images.Poteri,
    imageRush: images.Rush,
    imageRush2: images.Rush2,
    image4: images.Post7,
    image5: images.posta,
    image6: images.Post10,
    image7: images.Images2,
  },
]);
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
    <div :class="'wrapper'" v-for="(image, index) in items" :key="index">
      <div :class="'cards'">
        <img :class="'foto'" :src="image.image2" alt="Immagine" />
        <img :class="'foto'" :src="image.image24" alt="Immagine" />
        <img :class="'foto'" :src="image.image3" alt="Immagine" />
        <img :class="'foto'" :src="image.image4" alt="Immagine" />
        <img :class="'foto'" :src="image.image5" alt="Immagine" />
        <img :class="'foto'" :src="image.image6" alt="Immagine" />
        <img :class="'foto'" :src="image.image7" alt="Immagine" />
        <img :class="'foto'" :src="image.imageAnatomia" alt="Immagine" />
        <img :class="'foto'" :src="image.imageIntro" alt="Immagine" />
        <img :class="'foto'" :src="image.imagePoteri" alt="Immagine" />
        <img :class="'foto'" :src="image.imageRush" alt="Immagine" />
        <img :class="'foto'" :src="image.imageRush2" alt="Immagine" />
      </div>
    </div>
  </main>
</template>
