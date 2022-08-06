<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { getYear } from 'date-fns';
import { TEXT_SIZE, TEXT_COLOR } from '@/components/app/TextComposable';
import useId from '@/composables/useId';
import useCss from '@/composables/useCss';
import useWebFont, { FONT_TYPE_MAP, FontType, FONT_WEIGHT_MAP, FontWeightValueType } from '@/composables/useWebFont';
import { bemx } from '@/utils/util';

interface FooterPropType {
  /**
   * コピーライト文字列に適用するフォント
   *
   * `Advent Pro`
   */
  font?: FontType;
  /**
   * コピーライト文字列の太さ
   *
   * `400`
   */
  weight?: FontWeightValueType;
}

const props = withDefaults(defineProps<FooterPropType>(), {
  font: FONT_TYPE_MAP.ADVENT__PRO,
  weight: FONT_WEIGHT_MAP.weight400,
});

const thisYear = getYear(new Date());

useWebFont(props.font, props.weight);

const id = useId('BaLayoutFooter');
const className = bemx('BaLayoutFooter', id.value);
useCss(
  () =>
    `.BaLayoutFooter--${id.value} .BaLayoutFooter__Copyright{
      font-family: "${props.font}" !important;
      font-weight: ${props.weight} !important;
    }`,
);
</script>

<template>
  <footer :class="className">
    <div class="BaLayoutFooter__SocialIcons">
      <ul>
        <li class="BaLayoutFooter__TwitterIcon">
          <a href="https://twitter.com/waicode37" target="_blank" rel="noopener">
            <Icon icon="tabler:brand-twitter" />
          </a>
        </li>
        <li class="BaLayoutFooter__GithubIcon">
          <a href="https://github.com/waicode" target="_blank" rel="noopener">
            <Icon icon="tabler:brand-github" />
          </a>
        </li>
      </ul>
    </div>
    <div class="BaLayoutFooter__Copyright">
      <p>
        <AppText :type="TEXT_SIZE.COPYRIGHT" :color="TEXT_COLOR.WHITE">© {{ thisYear }} archt.blue</AppText>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
$footer-twitter-icon-width: 80px;
$footer-twitter-icon-height: $footer-twitter-icon-width;
$footer-twitter-icon-color: $twitter-blue-color;

$footer-github-icon-width: 80px;
$footer-github-icon-height: $footer-github-icon-width;
$footer-github-icon-color: $github-purple-color;

.BaLayoutFooter {
  padding: $scale24 0;
  margin-top: $scale48;
  color: $white-color;

  &__SocialIcons {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $scale32 $scale24;

    ul {
      display: flex;
      justify-content: center;
      gap: $scale32;
      margin-bottom: 0;
      list-style: none;

      li {
        a {
          svg {
            color: $white-color;
          }
        }
      }
    }
  }

  &__TwitterIcon {
    a {
      svg {
        width: $footer-twitter-icon-width;
        height: $footer-twitter-icon-height;
      }

      &:focus,
      &:hover {
        svg {
          color: $footer-twitter-icon-color;
        }
      }
    }
  }

  &__GithubIcon {
    a {
      svg {
        width: $footer-github-icon-width;
        height: $footer-github-icon-height;
      }

      &:focus,
      &:hover {
        svg {
          color: $footer-github-icon-color;
        }
      }
    }
  }

  &__Copyright {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
