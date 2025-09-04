# NodeSeekIMG

![NodeSeekIMG](https://raw.githubusercontent.com/344LTD/NodeSeekIMG/main/screenshot.png) <!-- 可替换为实际截图链接 -->

## 简介
**NodeSeekIMG** 是一套针对 [NodeSeek](https://www.nodeseek.com/) 网站的图片上传辅助工具，包含两款油猴脚本：  

1. **NodeSeek 图片上传助手**  
   - 在 NodeSeek 编辑器中轻松上传本地或剪贴板图片  
   - 支持 Markdown 格式自动插入  

2. **京东隐藏上传监听器**  
   - 在京东反馈页后台监听图片上传请求  
   - 配合上传助手实现隐藏上传操作  

该工具可以提升 NodeSeek 图片上传效率，同时隐藏上传过程，不影响页面布局。

---

## 功能特色

- **点击上传**：在编辑器点击图片按钮即可上传本地图片  
- **粘贴上传**：直接粘贴剪贴板中的图片，自动上传并生成 Markdown  
- **隐身上传**：上传过程通过京东隐藏 iframe 完成  
- **自动插入**：上传完成后自动将图片 URL 或 Markdown 插入编辑框  

---

## 安装教程

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或其他油猴插件  
2. 安装脚本：
   - [NodeSeek 图片上传助手.user.js](./NodeSeek%20图片上传助手.user.js)  
   - [京东隐藏上传监听器.user.js](./京东隐藏上传监听器.user.js)  
3. 打开 NodeSeek 页面或京东反馈页，脚本会自动运行  

> 注意：两款脚本需要同时启用，上传助手会通过隐藏监听器完成图片上传。

---

## 使用说明

1. **点击上传**  
   - 在 NodeSeek 编辑器点击“图片”按钮  
   - 选择本地图片  
   - 上传成功后自动插入处理后的 URL  

2. **粘贴上传**  
   - 复制图片到剪贴板  
   - 在编辑器中粘贴  
   - 自动上传并以 Markdown 格式插入  

3. **后台监听**  
   - 京东隐藏上传监听器在京东反馈页后台运行  
   - 负责接收上传助手发送的图片数据并完成上传  

---

## 免责声明

- 本工具仅供 **NodeSeek 图片上传辅助** 使用  
- 请遵守 NodeSeek 网站相关规则，不得用于任何违规操作  

---

## 仓库地址

[https://github.com/344LTD/NodeSeekIMG](https://github.com/344LTD/NodeSeekIMG)

---

## 作者

**344.LTD**  
[https://github.com/344LTD/NodeSeekIMG](https://github.com/344LTD/NodeSeekIMG)
