<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center gap-8 mt-9">
      <div
        class="rounded-full border-b-2 border-[--color-border] overflow-hidden w-40 h-40"
      >
        <img
          class="transition-all duration-1000 w-40"
          src="../assets/perfil.png"
          alt="Sírio N."
        />
      </div>
      <div class="w-full mb-4 text-center">
        <p class="text-4xl">Sírio Neto</p>
        <p class="text-2xl">{{ $t("contact.profession") }}</p>
      </div>
    </div>
    <div class="flex flex-col w-80 text-center gap-8 mt-9">
      <a
        v-for="contactLink in contactLinks"
        :key="contactLink.to"
        :href="contactLink.to"
        :target="contactLink.openNewPage ? '_blank' : ''"
        rel="noopener"
        class="px-6 py-2 min-h-16 text-2xl border flex items-center justify-center rounded-3xl border-[--color-border] hover:border-[--color-border-hover] hover:bg-[--color-background-soft]"
      >
        <component :is="contactLink.icon" class="inline-block mr-4 w-8" />
        <span class="inline-block text-3xl">{{ $t(contactLink.text) }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconGitlab from "@/components/icons/IconGitlab.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconMail from "@/components/icons/IconMail.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const contactLinks = [
  {
    to: "https://www.linkedin.com/in/sirio-neto/",
    text: "contact.link.linkedIn",
    icon: IconLinkedIn,
    openNewPage: true,
  },
  {
    to: "https://github.com/sirioneto",
    text: "contact.link.github",
    icon: IconGithub,
    openNewPage: true,
  },
  {
    to: "https://gitlab.com/sirioneto",
    text: "contact.link.gitlab",
    icon: IconGitlab,
    openNewPage: true,
  },
  {
    to: `mailto:sirionetooficial@gmail.com?subject=${t("contact.mail.subject")}&body=${t("contact.mail.body")}`,
    text: "contact.link.mail",
    icon: IconMail,
    openNewPage: false,
  },
];
</script>
