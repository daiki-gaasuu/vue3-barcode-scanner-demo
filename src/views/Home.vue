<template>
  <v-container>
    <h3>ISBNコードのバーコードを下記のカメラに合わせてください</h3>
    <div id="camera"></div>
    <v-card v-if="bookApiRes" class="mt-2" max-width="350">
      <v-img height="250" :src="bookApiRes.cover"></v-img>

      <v-card-title>{{ bookApiRes.title }}</v-card-title>
      <v-card-text>
        <p>ISBN: {{ bookApiRes.isbn }}</p>
        <p>著者: {{ bookApiRes.author }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import Quagga from "@ericblade/quagga2";
import axios from "axios";
import { ref, onMounted } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const bookApiRes: any = ref(null);
onMounted(() => {
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          // サイズ指定
          width: 360,
          height: 240,
        },
        target: document.querySelector("#camera")!,
      },
      decoder: {
        readers: ["ean_reader"], //isbnコードは基本これらしい
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      // エラーがなければ読み取り開始
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    }
  );
  // バーコードをデコードが完了したタイミングでの処理
  Quagga.onDetected((success) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const code = success.codeResult.code!;
    if (calc(code)) {
      const result = confirm(`読み込んだISBNコードは「${code}」で合っていますか？`);
      if (result) {
        Quagga.stop();
        getBookData(code);
      }
    }
  });
  // チェックディジット
  const calc = (isbn: string) => {
    const arrIsbn = isbn
      .toString()
      .split("")
      .map((num) => parseInt(num));
    let remainder = 0;
    const checkDigit = arrIsbn.pop();

    arrIsbn.forEach((num, index) => {
      remainder += num * (index % 2 === 0 ? 1 : 3);
    });
    remainder %= 10;
    remainder = remainder === 0 ? 0 : 10 - remainder;
    return checkDigit === remainder;
  };
  //openDB API実行
  const getBookData = async (isbn: string) => {
    try {
      const res = await axios.get(`https://api.openbd.jp/v1/get?isbn=${isbn}`);
      console.log(res);
      bookApiRes.value = res.data[0].summary;
    } catch (error) {
      console.log(error);
    }
  };
});
</script>

<style lang="sass"></style>
