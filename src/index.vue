<template>
  <div v-show="finallyVisible">
    <div
      class="g-imgview"
      @mousewheel.prevent="wheelScaleMeth"
      :style="{
        backgroundColor: isFullscreen ? 'black' : 'rgba(0, 0, 0, 0.199)',
      }"
    >
      <!-- draggable: false 禁止 chrome 拖拽图片 -->
      <img
        class="image"
        draggable="false"
        @load="handleImageLoad"
        :style="imgStyle"
        @mousedown="handleImageMouseDown"
        @wheel="wheelScaleMeth"
        :src="src"
      />
    </div>
    <img-handle
      :isFullscreen="isFullscreen"
      @fullScreen="fullScreen"
      @resetImage="resetImageMeth"
      @rotateToLeft="rotateToMeth"
      @rotateToRight="rotateToMeth"
      @close="close"
    ></img-handle>
  </div>
</template>

<script>
import imgHandle from "./imgHandle.vue";
import screenfull from "screenfull";

const DEFAULT_MAX_SCALE = 5; // 最大放大比例
const DEFAULT_MIN_SCALE = 0.1; // 最小放大比例
const DEFAULT_ANGLE = 90; //默认旋转的角度
export default {
  // name:"GImgViewer",
  components: { imgHandle },
  props: {
    src: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      aspectRatio: 1,
      // 图片的放大的比例
      scale: 1,
      // 图片旋转多少deg
      rotateAngle: 0,
      // 图片起始位置
      position: {
        left: 0,
        top: 0,
      },
      // 拖动图片的位置
      mouse: {
        x: 0,
        y: 0,
      },
      // 工具区域
      isFullscreen: false,
    };
  },
  computed: {
    // img图片样式
    imgStyle() {
      let { left, top } = this.position;
      let _styleKey = this.aspectRatio > 1 ? "max-width" : "max-height";
      return {
        transform: `translate3d(${left}px, ${top}px, 0) scale(${this.scale}) rotate(${this.rotateAngle}deg)`,
        [_styleKey]: "100%",
      };
    },
    innerMaxScale() {
      let maxScale = +DEFAULT_MAX_SCALE;
      return Number.isFinite(maxScale) && maxScale >= 1
        ? maxScale
        : DEFAULT_MAX_SCALE;
    },
    innerMinScale() {
      let minScale = +DEFAULT_MIN_SCALE;
      return Number.isFinite(minScale) && minScale <= 1 && minScale > 0
        ? minScale
        : DEFAULT_MIN_SCALE;
    },
    finallyVisible() {
      return this.visible;
    },
  },
  mounted() {
    if (screenfull.isEnabled) {
        screenfull.on("change", ()=>{
            this.isFullscreen = screenfull.isFullscreen;
        });
    }
    window.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  },
  methods: {
    initAspectRatio(e) {
      let width = e.target.offsetWidth;
      let height = e.target.offsetHeight;
      this.aspectRatio = width / height;
    },
    handleImageLoad(e) {
      this.initAspectRatio(e);
    },
    // 图片拖拽
    handleImageMouseDown(e) {
      this.mouse = {
        x: e.clientX,
        y: e.clientY,
      };
      window.addEventListener("mousemove", this.handleImageMouseMove);
      window.addEventListener("mouseup", this.handleImageMouseUp);
    },
    handleImageMouseMove(e) {
      // 移动event的坐标
      let { clientX, clientY } = e;
      // 鼠标按下时记录的坐标
      let { x, y } = this.mouse;
      // 偏移后的位置
      let deltaX = clientX - x + this.position.left;
      let deltaY = clientY - y + this.position.top;
      this.mouse = {
        x: clientX,
        y: clientY,
      };
      this.position = {
        left: deltaX,
        top: deltaY,
      };
    },
    handleImageMouseUp(e) {
      window.removeEventListener("mousemove", this.handleImageMouseMove);
      window.removeEventListener("mouseup", this.handleImageMouseUp);
    },
    // 滚轮缩放
    wheelScaleMeth(e) {
      // 实际缩放与缩放偏移量的系数
      const RATIO = 35;
      let computedScale = this.scale - e.deltaY / RATIO;
      this.scale =
        computedScale >= this.innerMinScale
          ? computedScale <= this.innerMaxScale
            ? computedScale
            : this.innerMaxScale
          : this.innerMinScale;
    },
    // 重置图片大小
    resetImageMeth() {
      this.scale = 1;
      this.rotateAngle = 0;
      this.position.left = 0;
      this.position.right = 0;
      this.mouse.x = 0;
      this.mouse.y = 0;
    },
    // 全屏
    fullScreen() {
      if (!screenfull.isEnabled) {
        alert("您的浏览器版本过低，不支持全屏浏览");
        return false;
      }
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    },
    // 图片向转向
    rotateToMeth(to) {
      if (to == 1) {
        this.rotateAngle += DEFAULT_ANGLE;
      } else {
        this.rotateAngle -= DEFAULT_ANGLE;
      }
    },
    // 关闭预览
    close() {
      if (this.isFullscreen){
        this.fullScreen();
      };
      setTimeout(() => {
        this.$emit("update:visible", false);
      }, 10);
    },
  },
  beforeDestroy() {
    if (screenfull.isEnabled) {
      screenfull.off("change", () => {
        this.isFullscreen = screenfull.isFullscreen;
      });
    }
  },
};
</script>

<style scoped>
.g-imgview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.199);
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: none;
  user-select: none;
  -webkit-user-drag: none;
}
.g-imgview .image {
  cursor: grab;
  position: absolute;
  cursor: grab;
  border-radius: 5px;
  transition: transform 0.1s linear;
}
</style>
