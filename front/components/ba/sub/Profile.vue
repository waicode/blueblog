<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { TEXT_SIZE } from '@/components/app/TextComposable';

console.log('TEXT_SIZE', TEXT_SIZE);

interface BaSubProfilePropType {
  /**
   * 見出しのタイトル
   */
  title: string;
}

defineProps<BaSubProfilePropType>();
</script>
<template>
  <div class="BaSubProfile">
    <h3 class="BaSubProfile__Heading">
      <AppText :type="TEXT_SIZE.SUB_HEADING2">{{ title }}</AppText>
    </h3>
    <div class="BaSubProfile__AuthorIconWrapper">
      <div class="BaSubProfile__AuthorIcon">
        <SvgProfileIconWaicode width="124" height="124" />
      </div>
    </div>
    <div class="BaSubProfile__SocialIcons">
      <ul>
        <li class="BaSubProfile__TwitterIcon">
          <a href="https://twitter.com/waicode37" target="_blank" rel="noopener">
            <Icon icon="tabler:brand-twitter" />
          </a>
        </li>
        <li class="BaSubProfile__GithubIcon">
          <a href="https://github.com/waicode" target="_blank" rel="noopener">
            <Icon icon="tabler:brand-github" />
          </a>
        </li>
      </ul>
    </div>
    <div class="BaSubProfile__Text">
      <!-- @slot 囲まれたタグを表示する -->
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
$side-profile-waicode-icon-width: 124px;
$side-profile-waicode-icon-border-color: $gray-204-alpha-050-color;

$side-profile-twitter-icon-width: 40px;
$side-profile-twitter-icon-height: $side-profile-twitter-icon-width;
$side-profile-twitter-icon-color: $twitter-blue-color;

$side-profile-github-icon-width: 40px;
$side-profile-github-icon-height: $side-profile-github-icon-width;
$side-profile-github-icon-color: $github-purple-color;

.BaSubProfile {
  margin-bottom: $scale28;

  &__Heading {
    margin-bottom: $scale32;
  }

  &__AuthorIconWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: $scale20;
  }

  &__AuthorIcon {
    width: $side-profile-waicode-icon-width;
    border: 1px solid $side-profile-waicode-icon-border-color;
    border-radius: $border-radius-circle;
  }

  &__SocialIcons {
    display: flex;
    justify-content: center;
    margin-bottom: $scale28;

    ul {
      display: flex;
      justify-content: center;
      gap: $scale16;
      margin-bottom: 0;
      list-style: none;
    }
  }

  &__TwitterIcon {
    a {
      svg {
        width: $side-profile-twitter-icon-width;
        height: $side-profile-twitter-icon-height;
        color: $side-profile-twitter-icon-color;
      }
    }
  }

  &__GithubIcon {
    a {
      svg {
        width: $side-profile-github-icon-width;
        height: $side-profile-github-icon-height;
        color: $side-profile-github-icon-color;
      }
    }
  }
}
</style>
