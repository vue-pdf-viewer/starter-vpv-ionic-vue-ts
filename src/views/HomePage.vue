<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { VPdfViewer, useLicense } from "@vue-pdf-viewer/viewer";
import { onBeforeMount } from "vue";
import AppPdfViewer from "@/components/AppPdfViewer.vue";

const pdfSrc =
  "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vue PDF Viewer, Composition API, and Ionic</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col><h5>Default</h5></ion-col>
        </ion-row>
      </ion-grid>
      <VPdfViewer :src="pdfSrc" />

      <ion-grid class="ion-padding-top">
        <ion-row>
          <ion-col><h5>Disable toolbar</h5></ion-col>
        </ion-row>
      </ion-grid>

      <VPdfViewer :src="pdfSrc" :toolbarOptions="false" />

      <!-- Shared component -->
      <AppPdfViewer :src="pdfSrc" title="Shared component" />
    </ion-content>
  </ion-page>
</template>

<style></style>
