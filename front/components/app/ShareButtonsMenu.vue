<script setup lang="ts">
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';

interface ShareButtonsPropType {
  pageUrl: string;
  title: string;
}

const props = defineProps<ShareButtonsPropType>();

const shareUrlHatena = computed(
  () => `http://b.hatena.ne.jp/add?mode=confirm&url=${props.pageUrl}&title=${props.title}`,
);

const shareUrlTwitter = computed(() => `https://twitter.com/intent/tweet?url=${props.pageUrl}&text=${props.title}`);

const shareUrlFacebook = computed(
  () => `https://www.facebook.com/sharer/sharer.php?u=${props.pageUrl}&t=${props.title}`,
);

const shareUrlPocket = computed(() => `http://getpocket.com/edit?url=${props.pageUrl}`);
</script>

<template>
  <div class="AppShareButtonsMenu">
    <div class="AppShareButtonsMenu__ShareText">
      <AppText :type="TEXT_SIZE.SHARE1" :color="TEXT_COLOR.WHITE">SHARE</AppText>
    </div>
    <div class="AppShareButtonsMenu__ShareIcons">
      <div class="AppShareButtons__Twitter">
        <AppLink
          :href="shareUrlTwitter"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
          ><SvgPostShareIconTwitter width="22" height="18" fill="#fff"
        /></AppLink>
      </div>
      <div class="AppShareButtonsMenu__Hatena">
        <AppLink :href="shareUrlHatena"><SvgPostShareIconHatena width="22" height="18" fill="#fff" /></AppLink>
      </div>
      <div class="AppShareButtonsMenu__Facebook">
        <AppLink
          :href="shareUrlFacebook"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
          ><SvgPostShareIconFacebook width="21" height="19" fill="#fff"
        /></AppLink>
      </div>
      <div class="AppShareButtonsMenu__Pocket">
        <AppLink
          :href="shareUrlPocket"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
          ><SvgPostShareIconPocket width="21" height="21" fill="#fff"
        /></AppLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.AppShareButtonsMenu {
  display: flex;
  width: 36px;
  flex-direction: column;

  &__ShareText {
    margin-bottom: $scale24;
    padding-left: $scale1;

    .AppText {
      writing-mode: vertical-rl;
    }
  }

  &__ShareIcons {
    display: flex;
    flex-direction: column;
    width: 36px;
    text-align: center;
    gap: $scale16;
  }
}
</style>
