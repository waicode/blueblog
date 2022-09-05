<script setup lang="ts">
import { TEXT_SIZE } from '@/components/app/TextComposable';

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
  <div class="AppShareButtons">
    <div class="AppShareButtons__ShareText">
      <AppText :type="TEXT_SIZE.SHARE1">SHARE</AppText>
    </div>
    <div class="AppShareButtons__ShareIcons">
      <div class="AppShareButtons__Twitter">
        <AppLink
          :href="shareUrlTwitter"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
          ><SvgPostShareIconTwitter
        /></AppLink>
      </div>
      <div class="AppShareButtons__Hatena">
        <AppLink :href="shareUrlHatena" rel="nofollow noopener"><SvgPostShareIconHatena /></AppLink>
      </div>
      <div class="AppShareButtons__Facebook">
        <AppLink
          :href="shareUrlFacebook"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
          ><SvgPostShareIconFacebook
        /></AppLink>
      </div>
      <div class="AppShareButtons__Pocket">
        <AppLink
          :href="shareUrlPocket"
          rel="nofollow noopener"
          onclick="window.open(this.href, 'window', 'width=600, height=400, menubar=no, toolbar=no, scrollbars=yes'); return false;"
          ><SvgPostShareIconPocket
        /></AppLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.AppShareButtons {
  display: flex;
  gap: $scale64;

  @include tablet {
    gap: $scale32;
    flex-direction: column;
    align-items: center;
  }

  @include phone {
    gap: $scale20;
  }

  &__ShareIcons {
    display: flex;
    gap: $scale44;
    @include phone {
      gap: $scale36;
    }
  }
}
</style>
