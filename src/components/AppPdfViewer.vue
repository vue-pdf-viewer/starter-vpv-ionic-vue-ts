<script setup lang="ts">
import { VPdfViewer, VPVBaseProps, useLicense } from "@vue-pdf-viewer/viewer";
import { IonRow, IonCol } from "@ionic/vue";
import { ref, watch } from "vue";

const props = defineProps({
  ...VPVBaseProps,
  title: {
    type: String,
    required: true,
  },
} as const);

const viewerRef = ref<InstanceType<typeof VPdfViewer> | null>(null);

watch(viewerRef, (newVal) => {
  if (newVal) {
    console.log("These are VPV instance properties", Object.keys(newVal));
  }
});
</script>
<template>
  <ion-grid class="ion-padding-top">
    <ion-row>
      <ion-col
        ><h5>{{ props.title }}</h5></ion-col
      >
    </ion-row>
  </ion-grid>
  <VPdfViewer v-bind="props" ref="viewerRef" />
</template>
