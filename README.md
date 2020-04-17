### gm 的使用

首先安装 GraphicsMagick 或者 ImageMagick：

```bash
brew install imagemagick
brew install graphicsmagick
```

> 对于 brew install 的安装问题，可以参考：工作项目 > 终端命令

ImageMagick 支持 WebP：

```bash
brew install imagemagick --with-webp
```

然后就可以在项目中安装 gm：

```js
npm i gm -S
```

如果安装的是 ImageMagick，在使用 `gm` 的时候需要将这个配置打开：

```js
gm().options({ imageMagick: true })
```
