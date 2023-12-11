<!-- == SCRIPT ============================================================= -->

<script setup>
import { onMounted, ref, toRefs } from 'vue';
import P5 from 'p5';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      document: {
        headers: {},
        content: {},
      },
      nodes: {
        headers: {},
        content: {},
        tree: [],
      },
      graph: {
        nodes: {},
        edges: {
          level1: [],
          level2: [],
          level3: [],
          level4: [],
        },
      },
    }),
  },
});

const { data } = toRefs(props);

// -----------------------------------------------------------------------------

const sketch = ref();

onMounted(() => {
  const _ = new P5((p5) => {
    const SL1 = 40;
    const SL2 = 32;
    const SL3 = 30;
    const SCN = 10;

    p5.setup = function () {
      p5.createCanvas(800, 1000);
    };

    p5.draw = function () {
      p5.background(240);

      p5.stroke(109, 109, 221);
      p5.strokeWeight(9);
      data.value.graph.edges.level1.forEach(([a, b]) => {
        const [xa, ya] = data.value.graph.nodes[a];
        const [xb, yb] = data.value.graph.nodes[b];
        p5.line(xa, ya, xb, yb);
      });

      p5.stroke(135, 193, 111);
      p5.strokeWeight(5);
      data.value.graph.edges.level2.forEach(([a, b]) => {
        const [xa, ya] = data.value.graph.nodes[a];
        const [xb, yb] = data.value.graph.nodes[b];
        p5.line(xa, ya, xb, yb);
      });

      p5.stroke(211, 119, 15);
      p5.strokeWeight(2);
      data.value.graph.edges.level3.forEach(([a, b]) => {
        const [xa, ya] = data.value.graph.nodes[a];
        const [xb, yb] = data.value.graph.nodes[b];
        p5.line(xa, ya, xb, yb);
      });

      p5.stroke(195, 195, 195);
      p5.strokeWeight(6);
      data.value.graph.edges.level4.forEach(([a, b]) => {
        const [xa, ya] = data.value.graph.nodes[a];
        const [xb, yb] = data.value.graph.nodes[b];
        p5.line(xa, ya, xb, yb);
      });

      p5.stroke(0);
      p5.textAlign(p5.CENTER, p5.CENTER);
      Object.entries(data.value.graph.nodes).forEach(([nodeId, [x, y, d]]) => {
        if (d === SCN) {
          p5.stroke(0);
          p5.strokeWeight(2);

          if (data.value.nodes.content[nodeId] === true) {
            p5.fill(127);
          } else {
            p5.fill(255);
          }

          p5.circle(x, y, d);
        } else {
          if (data.value.nodes.headers[nodeId] === true) {
            p5.strokeWeight(0);

            if (d === SL1) p5.fill(72, 72, 212);
            if (d === SL2) p5.fill(106, 176, 76);
            if (d === SL3) p5.fill(240, 147, 43);
            p5.circle(x, y, d);

            p5.fill(255);
            p5.text(nodeId.split('-')[0].substring(1), x, y);
          } else {
            p5.strokeWeight(2);
            if (d === SL1) p5.stroke(72, 72, 212);
            if (d === SL2) p5.stroke(106, 176, 76);
            if (d === SL3) p5.stroke(240, 147, 43);

            p5.fill(255);
            p5.circle(x, y, d);

            p5.strokeWeight(0);
            if (d === SL1) p5.fill(72, 72, 212);
            if (d === SL2) p5.fill(106, 176, 76);
            if (d === SL3) p5.fill(240, 147, 43);
            p5.text(nodeId.split('-')[0].substring(1), x, y);
          }
        }
      });

      Object.entries(data.value.graph.nodes).forEach(([nodeId, [x, y, d]]) => {
        if (d === SCN) return;

        if (p5.dist(x, y, p5.mouseX, p5.mouseY) < d / 2) {
          p5.strokeWeight(0);

          if (d === SL1) p5.fill(22, 22, 92);
          if (d === SL2) p5.fill(42, 70, 30);
          if (d === SL3) p5.fill(211, 119, 15);
          p5.rect(x - 100, y - 25, 200, 50);

          p5.fill(255);
          p5.text(data.value.document.headers[nodeId].label || nodeId, x, y);
        }
      });
    };
  }, sketch.value);
});
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="sketch" ref="sketch"></div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped></style>
