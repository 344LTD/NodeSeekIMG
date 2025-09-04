// ==UserScript==
// @name         NodeSeek图片上传助手
// @namespace    http://tampermonkey.net/
// @version      1.3
// @match        https://www.nodeseek.com/*
// @grant        none
// @author       344.LTD (https://github.com/344LTD/NodeSeekIMG)
// @description  NodeSeek 图片上传助手：点击或粘贴上传图片至京东隐藏反馈页，自动插入编辑框（支持 Markdown）。
// ==/UserScript==

(function() {
    'use strict';

    console.log("京东隐藏上传脚本已启动");

    // 插入隐藏iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://feedback.jd.com/'; // 京东反馈页地址
    iframe.style.position = 'fixed';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.opacity = 0;
    iframe.style.pointerEvents = 'none';
    document.body.appendChild(iframe);

    // 上传文件到京东 iframe
    function uploadToJD(file, callback) {
        const reader = new FileReader();
        reader.onload = function() {
            const msg = { type: 'upload-image', filename: file.name, filedata: reader.result };
            const listener = (e) => {
                if (!e.data) return;
                if (e.data.type === 'upload-success') {
                    callback(null, e.data.url);
                    window.removeEventListener('message', listener);
                }
                if (e.data.type === 'upload-fail') {
                    callback(e.data.msg || '未知错误', null);
                    window.removeEventListener('message', listener);
                }
            };
            window.addEventListener('message', listener);
            iframe.contentWindow.postMessage(msg, '*');
        };
        reader.readAsDataURL(file);
    }

    // 点击上传逻辑
    document.addEventListener("click", (e) => {
        if (e.target.closest(".toolbar-item.i-icon.i-icon-pic")) {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.onchange = () => {
                const file = input.files[0];
                if (!file) return;
                uploadToJD(file, (err, url) => {
                    if (err) return console.error("上传失败:", err);

                    // 去掉 http(s):// 前缀
                    const domainOnly = url.replace(/^https?:\/\//i, '');

                    const editor = document.querySelector("textarea"); // 修改选择器匹配你的编辑框
                    if (editor) {
                        const start = editor.selectionStart || editor.value.length;
                        const end = editor.selectionEnd || editor.value.length;
                        const before = editor.value.substring(0, start);
                        const after = editor.value.substring(end);
                        editor.value = before + domainOnly + after;
                        const cursorPos = start + domainOnly.length;
                        editor.selectionStart = editor.selectionEnd = cursorPos;
                        editor.dispatchEvent(new Event("input"));
                    }
                });
            };
            input.click();
        }
    });

    // 粘贴上传逻辑（保留 Markdown + http(s)）
    document.addEventListener("paste", (e) => {
        const items = e.clipboardData?.items;
        if (!items) return;

        for (const item of items) {
            if (item.type.indexOf('image') !== -1) {
                const file = item.getAsFile();
                if (!file) return;
                uploadToJD(file, (err, url) => {
                    if (err) return console.error("上传失败:", err);

                    // Markdown 格式
                    const markdown = `![image](${url})`;

                    const editor = document.querySelector("textarea"); // 修改选择器匹配你的编辑框
                    if (editor) {
                        const start = editor.selectionStart || editor.value.length;
                        const end = editor.selectionEnd || editor.value.length;
                        const before = editor.value.substring(0, start);
                        const after = editor.value.substring(end);
                        editor.value = before + markdown + after;
                        const cursorPos = start + markdown.length;
                        editor.selectionStart = editor.selectionEnd = cursorPos;
                        editor.dispatchEvent(new Event("input"));
                    }
                });
                e.preventDefault();
                break;
            }
        }
    });

})();
