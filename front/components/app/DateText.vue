<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { DATE_TEXT_TYPE_MAP, DateTextType } from './DateTextComposable';
import { TEXT_SIZE } from '@/components/app/TextComposable';
import { formatDate } from '@/utils/util';

interface DateTextPropType {
  type?: DateTextType;
  dateTimeText: string;
}

const props = withDefaults(defineProps<DateTextPropType>(), {
  type: DATE_TEXT_TYPE_MAP.CREATED,
});
</script>

<template>
  <div class="AppDateText">
    <div class="AppDateText__Icon">
      <Icon :icon="props.type === DATE_TEXT_TYPE_MAP.CREATED ? 'tabler:calendar-event' : 'tabler:rotate-rectangle'" />
    </div>
    <div class="AppDateText__DateText">
      <AppText :type="TEXT_SIZE.DATE1">{{ formatDate(dateTimeText) }}</AppText>
    </div>
  </div>
</template>

<style lang="scss">
$svg-icon-width: 13px;
$svg-icon-height: $svg-icon-width;

.AppDateText {
  display: flex;
  align-items: center;

  &__Icon {
    margin-right: $scale4;
    svg {
      width: $svg-icon-width;
      height: $svg-icon-height;
      vertical-align: middle;
    }
  }

  // &__DateText {
  // }
}
</style>
