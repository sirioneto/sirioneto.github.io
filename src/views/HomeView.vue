<template>
  <div>
    <div class="xl:flex-row flex flex-col justify-center items-center">
      <KinesisContainer class="xl:text-left text-center w-full mt-12 mb-4">
        <div class="flex flex-col mb-8 gap-2">
          <KinesisElement type="translate" :strength="-10" class="text-2xl">{{
            $t("home.salutation.hello")
          }}</KinesisElement>
          <KinesisElement
            type="translate"
            :strength="10"
            class="xl:text-5xl text-4xl"
            >{{ $t("home.salutation.me") }}</KinesisElement
          >
          <KinesisElement
            type="translate"
            :strength="-10"
            class="xl:text-5xl text-4xl"
            >{{ $t("home.salutation.profession") }}</KinesisElement
          >
          <KinesisElement type="translate" :strength="10" class="text-2xl">{{
            $t("home.salutation.welcome")
          }}</KinesisElement>
        </div>
        <RouterLink
          to="/about"
          class="px-6 py-2 text-2xl border rounded-3xl border-[--color-border] hover:border-[--color-border-hover] hover:bg-[--color-background-soft]"
        >
          {{ $t("home.salutation.moreAboutMe") }}
        </RouterLink>
      </KinesisContainer>
      <KinesisContainer class="w-full">
        <KinesisElement :strength="20" type="depth">
          <IconDeveloper />
        </KinesisElement>
      </KinesisContainer>
    </div>
    <div class="xl:mt-24 flex-row flex justify-center items-center gap-8">
      <a
        href="https://www.linkedin.com/in/sirio-neto/"
        target="_blank"
        rel="noopener"
        class="px-6 py-2 text-2xl border rounded-3xl border-[--color-border] hover:border-[--color-border-hover] hover:bg-[--color-background-soft]"
      >
        <IconLinkedIn class="md:inline-block md:mr-4" />
        <span class="md:inline-block hidden">{{
          $t("home.link.linkedIn")
        }}</span>
      </a>
      <a
        :href="mailLink"
        class="px-6 py-2 text-2xl border rounded-3xl border-[--color-border] hover:border-[--color-border-hover] hover:bg-[--color-background-soft]"
      >
        <IconMail class="md:inline-block md:mr-4" />
        <span class="md:inline-block hidden">{{ $t("home.link.mail") }}</span>
      </a>
      <a
        href="https://github.com/sirioneto"
        target="_blank"
        rel="noopener"
        class="px-6 py-2 text-2xl border rounded-3xl border-[--color-border] hover:border-[--color-border-hover] hover:bg-[--color-background-soft]"
      >
        <IconGithub class="md:inline-block md:mr-4" />
        <span class="md:inline-block hidden">{{ $t("home.link.github") }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import IconDeveloper from "@/components/icons/IconDeveloper.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconGithub from "@/components/icons/IconGithub.vue";

const { t } = useI18n();

const mailLink = computed(() => {
  return `mailto:sirionetooficial@gmail.com?subject=${t("contact.mail.subject")}&body=${t("contact.mail.body")}`;
});
</script>
