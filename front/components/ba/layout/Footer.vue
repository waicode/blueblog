<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { getYear } from 'date-fns';
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
  weight: FONT_WEIGHT_MAP[FONT_WEIGHT_TYPE.WEIGHT400],
});

const thisYear = getYear(new Date());

useWebFont(props.font, props.weight);
const id = useId();
const className = bemx('BaLayoutFooter', id);
useCss(
  () =>
    `.BaLayoutFooter--${id} .BaLayoutFooter__Copyright{
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
      <p>© {{ thisYear }} archt.blue</p>
    </div>
  </footer>
</template>

<style lang="scss">
$twitter-icon-width: 80px;
$twitter-icon-height: $twitter-icon-width;
$twitter-icon-color: #00afff;

$github-icon-width: 80px;
$github-icon-height: $github-icon-width;
$github-icon-color: #778cff;

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
      margin-bottom: 0;
      list-style: none;

      li {
        &:not(:last-child) {
          margin-right: $scale32;
        }

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
        width: $twitter-icon-width;
        height: $twitter-icon-height;
      }

      &:focus,
      &:hover {
        svg {
          color: $twitter-icon-color;
        }
      }
    }
  }

  &__GithubIcon {
    a {
      svg {
        width: $github-icon-width;
        height: $github-icon-height;
      }

      &:focus,
      &:hover {
        svg {
          color: $github-icon-color;
        }
      }
    }
  }

  &__Copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size-48px;
    letter-spacing: $letter-spacing-2px;
    line-height: $line-height-125;
    @mixin phone {
      font-size: $font-size-36px;
    }
  }
}
</style>
