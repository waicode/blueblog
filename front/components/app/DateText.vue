<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { DATE_TEXT_TYPE_MAP, DateTextType, DATE_SIZE_TYPE_MAP, DateSizeType } from './DateTextComposable';
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { bemx, formatDate } from '@/utils/util';

interface DateTextPropType {
  type?: DateTextType;
  size?: DateSizeType;
  dateTimeText: string;
}

const props = withDefaults(defineProps<DateTextPropType>(), {
  type: DATE_TEXT_TYPE_MAP.CREATED,
  size: DATE_SIZE_TYPE_MAP.SMALL,
});

const className = computed(() =>
  bemx('AppDateText', {
    size: props.size,
  }),
);
</script>

<template>
  <div :class="className">
    <div class="AppDateText__Icon">
      <AppText v-if="size === DATE_SIZE_TYPE_MAP.SMALL" :type="TEXT_SIZE.DATE1"
        ><Icon :icon="props.type === DATE_TEXT_TYPE_MAP.CREATED ? 'tabler:calendar-event' : 'tabler:rotate-rectangle'"
      /></AppText>
      <AppText v-else-if="size === DATE_SIZE_TYPE_MAP.MEDIUM" :type="TEXT_SIZE.DATE2"
        ><Icon :icon="props.type === DATE_TEXT_TYPE_MAP.CREATED ? 'tabler:calendar-event' : 'tabler:rotate-rectangle'"
      /></AppText>
    </div>
    <div class="AppDateText__DateText">
      <AppText v-if="size === DATE_SIZE_TYPE_MAP.SMALL" :type="TEXT_SIZE.DATE1">{{ formatDate(dateTimeText) }}</AppText>
      <AppText v-else-if="size === DATE_SIZE_TYPE_MAP.MEDIUM" :type="TEXT_SIZE.DATE2">{{
        formatDate(dateTimeText)
      }}</AppText>
    </div>
  </div>
</template>

<style lang="scss">
$svg-icon-small-width: 12px;
$svg-icon-small-height: $svg-icon-small-width;
$svg-icon-medium-width: 14px;
$svg-icon-medium-height: $svg-icon-medium-width;

.AppDateText {
  display: flex;
  align-items: center;

  &__Icon {
    margin-right: $scale4;
  }

  &--size-small {
    .AppDateText {
      &__Icon {
        padding-top: $scale3;

        svg {
          width: $svg-icon-small-width;
          height: $svg-icon-small-width;
        }
      }
    }
  }

  &--size-medium {
    .AppDateText {
      &__Icon {
        padding-top: $scale3;

        svg {
          width: $svg-icon-medium-width;
          height: $svg-icon-medium-width;
        }
      }
    }
  }

  // &__DateText {
  // }
}
</style>
