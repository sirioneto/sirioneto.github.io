<script setup lang="ts">
import AboutItem from "./AboutItem.vue";
import GraduatedIcon from "./icons/GraduatedIcon.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import IconDocumentation from "./icons/IconDocumentation.vue";
import FlagIcon from "./icons/FlagIcon.vue";
</script>

<template>
  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ $t("about.work.title") }}</template>
    <i18n-t keypath="about.work.text" tag="span">
      <template #company>
        <a href="https://www.bling.com.br/" target="_blank" rel="noopener">{{
          $t("about.work.company")
        }}</a>
      </template>
      <template #region>
        <a href="https://www.bling.mx/" target="_blank" rel="noopener">{{
          $t("about.work.region")
        }}</a>
      </template>
      <template #projects>
        <a
          href="https://github.com/sirioneto?tab=repositories&q=&type=&language=&sort=stargazers"
          target="_blank"
          rel="noopener"
          >{{ $t("about.work.projects") }}</a
        >
      </template>
    </i18n-t>
  </AboutItem>
  <AboutItem>
    <template #icon>
      <GraduatedIcon />
    </template>
    <template #heading>{{ $t("about.graduation.title") }}</template>
    <i18n-t keypath="about.graduation.text" tag="span">
      <template #graduationName>
        <a href="https://ifrs.edu.br/bento/" target="_blank" rel="noopener">
          {{ $t("about.graduation.campusName") }}
        </a>
      </template>
    </i18n-t>
  </AboutItem>
  <AboutItem>
    <template #icon>
      <IconDocumentation />
    </template>
    <template #heading>{{ $t("about.postgraduate.title") }}</template>
    <i18n-t keypath="about.postgraduate.text" tag="span">
      <template #postgraduateName>
        <a
          href="https://www.linkedin.com/school/fiap/"
          target="_blank"
          rel="noopener"
          >{{ $t("about.postgraduate.name") }}</a
        >
      </template>
    </i18n-t>
  </AboutItem>
  <AboutItem>
    <template #icon>
      <FlagIcon />
    </template>
    <template #heading>{{ $t("about.me.title") }}</template>
    <span>{{ $t("about.me.text") }}</span>
  </AboutItem>
</template>
