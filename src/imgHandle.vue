<template>
  <div class="img-handle">
    <ul>
      <li :title="`${!isFullscreen ? '全屏显示':'关闭全屏'}`" @click="$emit('fullScreen')">
        <svg
          v-if="isFullscreen"
          title="打开全屏"
          class="ico_class"
          data-icon="expand"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          viewBox="64 64 896 896"
          focusable="false"
        >
          <path
            d="M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm578 576h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z"
          ></path>
        </svg>
        <svg
          v-else
          title="退出全屏"
          class="ico_class"
          data-icon="compress"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          viewBox="64 64 896 896"
          focusable="false"
        >
          <path
            d="M326 664H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V696c0-17.7-14.3-32-32-32zm16-576h-48c-8.8 0-16 7.2-16 16v176H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V104c0-8.8-7.2-16-16-16zm578 576H698c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V744h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm0-384H746V104c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16z"
          ></path>
        </svg>
      </li>
      <li title="复位图片" @click="$emit('resetImage')">
        <svg
          class="ico_class"
          data-icon="sync"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          viewBox="64 64 896 896"
          focusable="false"
        >
          <path
            d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"
          ></path>
        </svg>
      </li>
      <li title="向左旋转" @click="$emit('rotateToLeft',-1)">
        <svg
          class="ico_class"
          data-icon="rotate-left"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          viewBox="64 64 896 896"
          focusable="false"
        >
          <path
            d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"
          ></path>
          <path
            d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"
          ></path>
        </svg>
      </li>
      <li title="向右旋转" @click="$emit('rotateToRight',1)">
        <svg
          class="ico_class"
          data-icon="rotate-right"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          viewBox="64 64 896 896"
          focusable="false"
        >
          <path
            d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"
          ></path>
          <path
            d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"
          ></path>
        </svg>
      </li>
      <li title="退出预览" @click="$emit('close')">
        <svg
          class="ico_class"
          data-icon="export"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          viewBox="64 64 896 896"
          focusable="false"
        >
          <path
            d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
          ></path>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 是否全屏
    isFullscreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.img-handle ul {
  z-index: 101;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  list-style-type: none;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0;
  transition: all 0.2s linear;
  border-radius: 5px;
  box-shadow: 0 0 13px 0px #0000004f;
}
.img-handle ul li {
  float: left;
  padding: 5px 10px;
  margin: 5px;
  box-shadow: 0 0 13px 0px #0000004f;
  background-color: #ffffffa6;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.15s linear;
}
.img-handle ul li:nth-child(1) {
  margin: 5px 5px 5px 10px;
}
li:nth-last-child(1) {
  margin: 5px 10px 5px 5px;
}
.img-handle ul li:hover {
  background-color: #0079fe;
  color: white;
}
.ico_class {
  width: 1.1rem;
  height: 1.1rem;
  transform: translateY(3px);
}
.img-handle ul li:active .ico_class {
  color: wheat;
}
</style>