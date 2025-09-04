// ==UserScript==
// @name         京东隐藏上传监听器
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        https://feedback.jd.com/*
// @grant        none
// @author       344.LTD (https://github.com/344LTD/NodeSeekIMG)
// @description  京东隐藏上传监听器：接收 NodeSeek 页面发送的图片上传请求，将图片上传至京东服务器并返回 URL。
// ==/UserScript==

(function() {
    'use strict';

    const uploadUrl = 'https://pic.jd.com/0/32ac1cd9ca1543e2a9cce60a4c9be94e';
    const imgPreUrl = 'https://img20.360buyimg.com/openfeedback/';

    window.addEventListener("message", async (e) => {
        const data = e.data;
        if (!data || data.type !== 'upload-image') return;

        try {
            const res = await fetch(data.filedata);
            const blob = await res.blob();
            const formData = new FormData();
            formData.append('file', blob, data.filename);

            const r = await fetch(uploadUrl, { method: 'POST', body: formData, credentials: 'include' });
            const text = await r.text();
            const result = JSON.parse(text);
            const fileName = result.msg || result.imgKey || result.fileName || (result.data && result.data[0] && result.data[0].name);

            if (fileName) {
                const url = imgPreUrl + fileName;
                e.source.postMessage({ type: 'upload-success', url }, '*');
            } else {
                e.source.postMessage({ type: 'upload-fail', msg: text }, '*');
            }
        } catch(err) {
            e.source.postMessage({ type: 'upload-fail', msg: err.message }, '*');
        }
    });
})();
