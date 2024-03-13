import "./style.css";

import * as EXIF from "exif-js";
import Croppie from "croppie";
import { parse } from "mrz";
import { useEffect } from "react";
import { useState } from "react";
import { useFormContext } from "../../context/FormContext";

function Display({ onClose }) {
  // import Tesseract from "tesseract.js";
  const { scannedData, setScannedData } = useFormContext();

  console.log(scannedData);

  const TESSERACT_CONFIG = {
    lang: "OCRB",
    load_system_dawg: "F",
    load_freq_dawg: "F",
    load_unambig_dawg: "F",
    load_punc_dawg: "F",
    load_number_dawg: "F",
    load_fixed_length_dawgs: "F",
    load_bigram_dawg: "F",
    wordrec_enable_assoc: "F",
    tessedit_pageseg_mode: "6",
    tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<",
  };

  window.EXIF = EXIF; // requied by croppie

  // eslint-disable-next-line no-undef
  window.Tesseract = Tesseract.create({
    langPath: "https://cdn.jsdelivr.net/gh/uwolfer/tesseract-mrz@master/lang/",
  });

  useEffect(() => {
    const progress = document.getElementById("progress");
    const displayArea = document.getElementById("document");
    const contentArea = document.getElementById("document-content");
    const checkArea = document.getElementById("document-check");

    // warm up tessearact
    window.Tesseract.recognize(
      document.createElement("canvas"),
      TESSERACT_CONFIG
    ).progress((message) => {
      console.log(message);
      progress.innerText = `${Math.round(message.progress * 100)}%`;
    });

    const croppie = new Croppie(displayArea, {
      url: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", // transparent 1px
      viewport: {
        width: 900,
        height: 220,
      },
      enableExif: true,
      showZoomer: false,
      enforceBoundary: false,
      enableResize: true,
      enableOrientation: true,
    });

    const handleFile = (event) => {
      const input = event.target;
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => croppie.bind(e.target.result);
      reader.readAsDataURL(file);
    };

    const rotate = () => croppie.rotate(90);

    const detect = () => {
      contentArea.value = "";
      croppie.result().then((r) => {
        window.Tesseract.recognize(r, TESSERACT_CONFIG)
          .progress((message) => {
            // console.log(message);
            progress.innerText = `${Math.round(message.progress * 100)}%`;
          })
          .then((result) => {
            // console.log(result);
            const lines = result.lines
              .map((line) => line.text)
              .map((text) => text.replace(/ |\r\n|\r|\n/g, ""))
              .filter((text) => text.includes("<<"))
              .filter((text) => text.length < 48)
              .filter((text) => text.length > 28);
            console.log(lines);
            // setContent(contentArea);
            console.log(lines.join("\r\n"));
            contentArea.value = lines.join("\r\n");

            check();
          })
          .catch((err) => console.error(err));
      });
    };

    const check = () => {
      const lines = contentArea.value.split("\n");
      console.log(lines);
      try {
        const result = lines ? parse(lines) : { valid: false };
        console.log(result.fields);
        setScannedData(result.fields);
        checkArea.value = JSON.stringify(result, null, 2);
        contentArea.className = result.valid ? "valid" : "invalid";
        onClose();
      } catch (e) {
        console.log(e);
        //   checkArea.value = e;
        //   contentArea.className = "invalid";
      }
    };

    const copyToClipboard = (e) => {
      e.target.select();
      document.execCommand("copy");
    };

    document.getElementById("fileInput").addEventListener("change", handleFile);
    document.getElementById("rotate").addEventListener("click", rotate);
    document.getElementById("scan").addEventListener("click", detect);
    // document.getElementById("check").addEventListener("click", check);
    contentArea.addEventListener("click", copyToClipboard);
    checkArea.addEventListener("click", copyToClipboard);
    // console.log(content);
  }, []);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(new URL("../../service-worker.js", import.meta.url), {
        type: "module",
      })
      .then(() => console.log("Service-Worker-Registered"));
  }

  return (
    <div id="document-display">
      <img src="#" id="document" />
      <div id="controls">
        <textarea id="document-content" rows={1} defaultValue={""} />
        <textarea id="document-check" rows={1} defaultValue={""} />
      </div>
      <input type="file" id="fileInput" name="fileInput" accept="image/*" />
      <span id="progress" />
      <button className="button1" id="scan" title="Scan">
        ✔
      </button>
      <button className="button1" id="rotate" title="Rotate">
        ↶
      </button>
    </div>
  );
}

export default Display;
