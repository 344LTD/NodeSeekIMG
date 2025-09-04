# NodeSeekIMG

![NodeSeekIMG](https://img20.360buyimg.com/openfeedback/jfs/t1/334008/23/9120/8493/68b942b9F61f95de1/8f784315f112c6bc.png) <!-- 可替换为实际截图链接 -->

## 简介
**NodeSeekIMG** 是一套针对 [NodeSeek](https://www.nodeseek.com/) 网站的图片上传辅助工具，包含两款油猴脚本：  

1. **NodeSeek 图片上传助手**  
   - 在 NodeSeek 编辑器中轻松上传本地或剪贴板图片  
   - 支持 Markdown 格式自动插入  
   - [安装脚本](https://github.com/344LTD/NodeSeekIMG/blob/main/v1/NodeSeek%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0%E5%8A%A9%E6%89%8B.js)

2. **京东隐藏上传监听器**  
   - 在京东反馈页后台监听图片上传请求  
   - 配合上传助手实现隐藏上传操作  
   - [安装脚本](https://github.com/344LTD/NodeSeekIMG/blob/main/v1/%E4%BA%AC%E4%B8%9C%E9%9A%90%E8%97%8F%E4%B8%8A%E4%BC%A0%E7%9B%91%E5%90%AC%E5%99%A8.js)

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
2. 分别安装两款脚本：
   - [NodeSeek 图片上传助手](https://github.com/344LTD/NodeSeekIMG/blob/main/v1/NodeSeek%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0%E5%8A%A9%E6%89%8B.js)  
   - [京东隐藏上传监听器](https://github.com/344LTD/NodeSeekIMG/blob/main/v1/%E4%BA%AC%E4%B8%9C%E9%9A%90%E8%97%8F%E4%B8%8A%E4%BC%A0%E7%9B%91%E5%90%AC%E5%99%A8.js)  
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
